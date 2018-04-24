<template lang="html">
  <div>
    <transition name="flip" mode="out-in">
      <div v-if="!results" key="form" class="form-container">
        <form @submit.prevent>
          <div :style="{ background: palette[0] }">Nickname:
            <input v-model="params.nickname" :style="inputColorizer(1)">
          </div>
          <div :style="{ background: palette[2] }">
            Favorite Drink:
            <select v-model="params.drink" :style="inputColorizer(3)">
              <option disabled value="">-- Drinks --</option>
              <optgroup label="Alcoholic">
                <option v-for="drink in drinkList.alcoholic">
                  {{ drink }}
                </option>
              </optgroup>
              <optgroup label="Non-Alcoholic">
                <option v-for="drink in drinkList.nonAlcoholic">
                  {{ drink }}
                </option>
              </optgroup>
            </select>
          </div>
          <div :style="{ background: palette[4] }">
            <div class="birthday-inputs">
              Birthday Between:
              <input v-model="params.bdayStart" type="date" :style="inputColorizer(5)">
              and
              <input v-model="params.bdayEnd" type="date" :style="inputColorizer(0)">
            </div>
          </div>
          <div :style="{ background: palette[1] }">Icon:
            <icon-picker
            @select-icon="params.icon = $event"
            :selected-icon="params.icon"/>
          </div>
        </form>
        <transition name="slide-out">
          <div v-if="params.nickname || params.bdayStart || params.bdayEnd || params.drink || params.icon" :style="{ background: palette[3] }" class="search-button-container">
            <button @click="doSearch()" class="icon-button">
              <font-awesome-icon :icon="icons.faSearch" size="2x" />
            </button>
          </div>
        </transition>
      </div>

      <div v-else :key="JSON.stringify(results)" style="display:flex;justify-content:center">
        <div :style="{ background: palette[5] }" style="padding:1rem;">
          <button @click="results = null" class="icon-button">
            <font-awesome-icon :icon="icons.faArrowLeft" size="2x" />
          </button>
          <div v-if="results.length">
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
                  <td>{{ $moment(result.birthday).utc().format('MMM DD YYYY') }}</td>
                  <td>{{ result.drink }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            No Results Found
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { formOptions } from '@/assets/form-options';
import { Slider } from 'vue-color';
import IconPicker from '@/components/IconPicker';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';

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
      results: null,
      drinkList: formOptions.drinkList,
      icons: {
        faArrowLeft: faArrowLeft,
        faSearch: faSearch
      }
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
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
}
form > * {
  padding: 1rem;
  text-align: center;
  align-items: center;
  font-size: 1.2em;
}
input, select {
  font-size: 1.2em;
}
table {
  border-collapse: collapse;
  text-align: center;
}
td, th {
  padding: 1rem;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.birthday-inputs {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.search-button-container {
  border-radius: 0 0 1rem 1rem;
}
.search-button-container > button {
  padding: 1rem 3rem;
}
</style>
