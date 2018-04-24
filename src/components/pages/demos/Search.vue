<template lang="html">
  <div>
    <form @submit.prevent>
      <div class="inputs" :style="{ background: palette[0] }">
        <div>Nickname:
          <input v-model="params.nickname" :style="inputColorizer(2)">
        </div>
        <div>Birthday Between:<br>
          <input v-model="params.bdayStart" type="date" :style="inputColorizer(3)">
          <br>and<br>
          <input v-model="params.bdayEnd" type="date" :style="inputColorizer(4)">
        </div>
      </div>
      <div :style="{ background: palette[1] }">
        Icon:
        <icon-picker
        @select-icon="params.icon = $event"
        :selected-icon="params.icon" style="width: 90%"/>
      </div>
    </form>

    <button @click="doSearch()">Search</button>

    <div v-if="results" style="text-align:center;display:flex;justify-content:center">
      <div v-if="results.length">
        <div :style="{ background: palette[5] }" style="padding: 1rem">
          <table>
            <thead>
              <tr>
                <th>Added</th>
                <th>Icon</th>
                <th>Nickname</th>
                <th>Birthday</th>
                <th>Favorite Drink</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="result in results" :key="result._id"
              :style="{ background: result.color.hex }">
              <td>{{ $moment(result.timestamp).format('MMM DD YYYY hh:mm a') }}</td>
              <td>
                <font-awesome-icon
                :icon="findIcon(result.icon)" />
              </td>
              <td>{{ result.nickname }}</td>
              <td>{{ $moment(result.birthday).format('MMM DD YYYY') }}</td>
              <td>{{ result.drink }}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div v-else>
        No Results Found
      </div>
    </div>
  </div>
</template>

<script>
import { Slider } from 'vue-color';
import  IconPicker from '@/components/IconPicker';

export default {
  name: 'Search',
  components: { 'icon-picker': IconPicker },
  data() {
    return {
      params: {
        nickname: '',
        bdayStart: '',
        bdayEnd: '',
        drink: '',
        icon: ''
      },
      results: null
    }
  },
  methods: {
    doSearch() {
      const params = new URLSearchParams(Object.entries(this.params));
      fetch(`${this.server}/get-profiles?${params}`)
      .then(response => response.json())
      .then(data => this.results = data);
    },
    findIcon(iconName) {
      return IconPicker.data().iconList.filter(item => {
        return item.iconName === iconName;
      })[0];
    }
  },
  created() {
    this.shuffleArray(this.palette);
  }
}
</script>

<style lang="css" scoped>
form {
  display: flex;
}
form > * {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: center;
  padding: 1rem 0;
}
.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.inputs input {
  font-size: 1.25em;
}
table {
  border-collapse: collapse;
}
td, th {
  padding: 1rem;
}
</style>
