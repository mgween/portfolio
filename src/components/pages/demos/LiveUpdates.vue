<template lang="html">
  <div>

    <p class="demo-description">This is a simple chat application. You can open this page in a new tab with <a target="_blank" :href="'#' + $route.fullPath" :style="{ color: palette[0] }">this link</a> to see how the messages are recieved in real time.</p>

    <transition name="flip" mode="out-in">
      <div v-if="!socket" key="intro" class="intro-container">
        <div :style="{ background: palette[1] }" class="intro">
          <h2>Nickname:</h2>
          <input v-model="username" @keyup.enter="connect" :style="inputColorizer(2)">
        </div>
        <transition name="slide-out">
          <div v-if="username" :style="{ background: palette[3] }" class="connect-button-container">
            <button @click="connect" class="icon-button">
              <font-awesome-icon :icon="icons.faComments" size="2x"/>
            </button>
          </div>
        </transition>
      </div>

      <div v-else key="chat" class="chat-container">

        <div v-chat-scroll class="chat-log">
          <div v-for="message in chatLog" :style="{ background: palette[4] }">
            {{ message.author }}: <strong>{{ message.text }}</strong>
          </div>
        </div>

        <div class="sender" :style="{ background: palette[5] }">
          <textarea v-model="message" @keyup.enter="sendMessage" placeholder="Enter a message." :style="inputColorizer(1)" />
          <button @click="sendMessage" class="icon-button">
            <font-awesome-icon :icon="icons.faArrowRight" size="2x"/>
          </button>
        </div>

      </div>
    </transition>

  </div>
</template>

<script>
import io from 'socket.io-client';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';

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
        faArrowRight: faArrowRight
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
.intro, .intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro {
  width: 70%;
  padding: 1rem;
}
.intro > input {
  font-size: 1.5em;
  max-width: 90%;
}
.connect-button-container {
  border-radius: 0 0 1rem 1rem;
}
.connect-button-container > button {
  padding: 1rem 3rem;
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
