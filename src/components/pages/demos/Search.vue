<template lang="html">
  <div>
    <form @submit.prevent>
      <input v-model="params.nickname" placeholder="Nickname">
      <input v-model="params.bdayStart" type="date">
      <input v-model="params.bdayEnd" type="date">
      <icon-picker
      @select-icon="params.icon = $event"
      :selected-icon="params.icon" />
    </form>
    <button @click="doSearch()">Search</button>
    <div v-if="results">
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
            <td>{{ result.timestamp }}</td>
              <td>{{ result.icon }}</td>
              <td>{{ result.nickname }}</td>
              <td>{{ result.birthday }}</td>
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
    }
  }
}
</script>

<style lang="css">
</style>
