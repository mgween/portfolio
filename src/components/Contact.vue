<template lang="html">
  <div>
    <div class="contact">
      <form @submit.prevent="sendMessage">
        <input v-model="form.name" placeholder="Your Name" name="name" class="bottom-margin">
        <input v-model="form.email" placeholder="Your Email Address" name="email" class="bottom-margin">
        <input v-model="form.subject" placeholder="Subject" name="subject" class="bottom-margin">
        <textarea v-model="form.message" rows="15" placeholder="Message" class="bottom-margin"></textarea>
        <button type="submit" name="submit" :disabled="!valid" :class="submitButtonClass"><i class="fa fa-envelope-o fa-2x" aria-label="Send Message"></i></button>
      </form>
      <div :style="{ background: colors[0] }">
        If you would like to contact me with any questions, employment opportunities, or just to chat you can do so with this form.<br><br>You can also email me at <a href="mailto:dev@mattgween.com" target="_blank" rel="noopener">dev@mattgween.com</a>. I respond promptly to any serious inquiries.
      </div>
    </div>
    <transition name="toast" mode="out-in">
      <div v-if="toast" class="toast">
        {{ toast }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      toast: ''
    }
  },
  computed: {
    valid() {
      return this.form.name && this.form.email && this.form.subject && this.form.message;
    },
    submitButtonClass() {
      return {
        active: this.valid,
        inactive: !this.valid
      };
    }
  },
  methods: {
    sendMessage() {
      fetch(`${this.server}/send-message`, {
        method: 'POST',
        body: JSON.stringify(this.form),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        if (!response.ok) {
          this.changeToast('error');
          throw Error(response.statusText);
        } else {
          return response.json();
        };
      }).then(data => {
        console.log(data);
        if (data.accepted) {
          Object.keys(this.form).forEach(item => {
            this.form[item] = ''
          });
          this.changeToast('success');
        } else {
          this.changeToast('error');
        };
      });
    },
    changeToast(type) {
      if (type === 'success') {
        this.toast = 'Your message has been received.\nI will get back to you as soon as possible.';
      } else {
        this.toast = 'Sorry, but something went wrong.\nPlease try again later or send me an email.';
      };
      setTimeout(() => this.toast = '', 3000);
    }
  },
  created() {
    this.shuffleArray(this.colors);
  }
}
</script>

<style lang="css" scoped>
.contact {
  margin-top: 1rem;
  display: flex;
  flex-direction: column-reverse;
}
.contact > form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  background: white;
  border-radius: 5rem;
  flex-grow: 2;
}
.contact > div {
  background: #bae1ff;
  align-self: start;
  padding: 1rem;
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 1rem;
}
form > input {
  width: 50%;
}
form > textarea {
  resize: none;
  width: 60%;
}
button[type=submit] {
  background: none;
  border: none;
}
.active {
  cursor: pointer;
  transition: 0.5s;
  color: #636363;
}
.active:hover {
  transform: scale(1.5);
  transition: 0.5s;
  color: black;
}
.inactive {
  opacity: 0;
  transition: 0.5s;
  pointer-events: none;
}
.toast {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: grey;
  color: white;
  border-radius: 3em 3em 0 0;
  white-space: pre;
  text-align: center;
}
.bottom-margin {
  margin-bottom: 1.5em;
}
@media screen and (min-width: 1024px) {
  .contact {
    flex-direction: row;
  }
  .contact > div {
    position: relative;
    right: 3rem;
    top: 2rem;
    margin-right: -3rem;
    width: 50%
  }
  .toast {
    left: auto;
    right: 1em;
    padding: 0 1em;
  }
}
.toast-enter-active, .toast-leave-active {
  transition: 0.5s;
}
.toast-enter {
  transform: translateY(100%);
}
.toast-leave-to {
  transform: translateY(100%);
}
</style>
