<template lang="html">
  <div>

    <p>This is a simple chat application. You can open this page in a new tab with <a target="_blank" :href="'#' + $route.fullPath" :style="{ color: palette[3] }">this link</a> to see how the messages are recieved in real time.</p>

    <transition name="collapse" mode="out-in">
      <div v-if="!socket" key="intro" :style="{ background: palette[0] }" class="intro">
        <h2>What is your name?</h2>
        <input v-model="username" @keyup.enter="connect" :style="inputColorizer(4)">
        <transition name="fade">
          <button v-if="username" @click="connect" class="icon-button">
            <font-awesome-icon :icon="icons.faComments" size="2x"/>
          </button>
        </transition>
      </div>

      <div v-else key="chat" class="chat-container">

        <div v-chat-scroll class="chat-log">
          <div v-for="message in chatLog" :style="{ background: palette[1] }">
            {{ message.author }}: <strong>{{ message.text }}</strong>
          </div>
        </div>

        <div class="sender" :style="{ background: palette[2] }">
          <textarea v-model="message" @keyup.enter="sendMessage" placeholder="Enter a message." :style="inputColorizer(5)" />
          <button @click="sendMessage" class="icon-button">
            <font-awesome-icon :icon="icons.faPaperPlane" size="2x"/>
          </button>
        </div>

      </div>
    </transition>

  </div>
</template>

<script>
import io from 'socket.io-client';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane';

export default {
  name: 'LiveUpdates',
  data() {
    return {
      socket: null,
      username: null,
      message: '',
      chatLog: [],
      icons: {
        faComments: faComments,
        faPaperPlane: faPaperPlane
      }
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
    this.shuffleArray(this.palette);
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
