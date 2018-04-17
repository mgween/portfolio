<template lang="html">
  <div>

    <p>This is a simple chat application. You can open this page in a new tab with <a target="_blank" :href="'#' + $route.fullPath" :style="{ color: colors[3] }">this link</a> to see how the messages are recieved in real time.</p>

    <transition name="collapse" mode="out-in">
      <div v-if="!socket" key="intro" :style="{ background: colors[0] }" class="intro">
        <h2>What is your name?</h2>
        <input v-model="username" @keyup.enter="connect">
        <button v-if="username" @click="connect" class="icon-button">
          <font-awesome-icon icon="comments" size="2x"/>
        </button>
      </div>

      <div v-else key="chat" class="chat-container">

        <div v-chat-scroll class="chat-log">
          <div v-for="message in chatLog" :style="{ background: colors[1] }">
            {{ message.author }}: <strong>{{ message.text }}</strong>
          </div>
        </div>

        <div class="sender" :style="{ background: colors[2] }">
          <textarea v-model="message" @keyup.enter="sendMessage" placeholder="Enter a message." />
          <button @click="sendMessage" class="icon-button">
            <font-awesome-icon icon="paper-plane" size="2x"/>
          </button>
        </div>

      </div>
    </transition>

  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
  name: 'LiveUpdates',
  data() {
    return {
      socket: null,
      username: null,
      message: '',
      chatLog: []
    }
  },
  methods: {
    connect() {
      if (this.username) {
        this.socket = io(this.server);
        this.socket.on('message-in', data => {
          this.chatLog.push(data);
        });
        this.socket.emit('message-out', {
          author: 'System',
          text: `${this.username} has joined the chat.`
        });
      };
    },
    sendMessage() {
      if (this.message) {
        this.socket.emit('message-out', {
          author: this.username,
          text: this.message
        });
        this.message = '';
      };
    },
    sendLogout() {
      this.socket.emit('message-out', {
        author: 'System',
        text: `${this.username} has left the chat.`
      });
    }
  },
  created() {
    this.shuffleArray(this.colors);
    window.addEventListener('beforeunload', this.sendLogout);
  },
  destroyed() {
    if (this.socket) {
      this.sendLogout();
    }
  }
}
</script>

<style lang="css" scoped>
p {
  color: white;
}
a {
  font-weight: bold;
  text-decoration: none;
}
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro > input {
  font-size: 1.5em;
  max-width: 90%;
}
.intro > * {
  margin: 1rem;
}
.chat-container {
  word-wrap: break-word;
}
.intro, .chat-container {
  margin: 0 10vw;
}
.chat-log {
  max-height: 50vh;
  overflow-y: scroll;
}
.sender {
  display: flex;
  justify-content: space-between;
}
.sender > textarea {
  flex-grow: 1;
}
.sender > * {
  margin: 1rem;
}
</style>
