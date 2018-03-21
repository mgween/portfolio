<template lang="html">
  <div>
    What is your name?
    <input v-model="username">
    <button @click="connect">click</button>
  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
  name: 'LiveUpdates',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    connect() {
      this.socket.emit('username', this.username);
    }
  },
  created() {
    this.socket = io(this.server);
    this.socket.on('connection-time', data => {
      console.log(`connected for ${data.new_val.duration} seconds`);
    })
  }
}
</script>

<style lang="css" scoped>
</style>
