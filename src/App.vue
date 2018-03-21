<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png" height="100" width="100" alt="Matt's Logo">
      <h1>Matt Gween</h1>
    </div>
    <div class="nav-bar">
      <router-link :to="'/home'" :class="{'active-page': $route.path === '/home'}">Home</router-link>
      <router-link :to="'/about'" :class="{'active-page': $route.path === '/about'}">About</router-link>
      <router-link :to="'/contact'" :class="{'active-page': $route.path === '/contact'}">Contact</router-link>
    </div>
    <transition name="route" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';

Vue.mixin({
  data() {
    return {
      server: 'http://localhost:2626',
      colors: [
        '#ffb3ba',
        '#ffdfba',
        '#ffffba',
        '#baffc9',
        '#bae1ff',
        '#b19cd9'
      ]
    }
  },
  methods: {
    shuffleArray(array) { // Source: https://stackoverflow.com/a/12646864
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      };
    }
  }
});

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

body {
  background: #636363;
  font-family: 'Quicksand', sans-serif;
  overflow-x: hidden;
}
@media screen and (min-width: 769px) {
  body {
    margin: 0 25vw 1rem;
  }
}
.route-enter-active, .route-leave-active {
  transition: 0.75s;
}
.route-enter {
  transform: translateX(-160%);
}
.route-leave-to {
  transform: translateX(160%);
}
input, textarea {
  background: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: solid 2px #c9c9c9;
  transition: border 0.5s;
  outline: none;
  font-family: 'Quicksand', sans-serif;
}
textarea {
  border: solid 2px #c9c9c9;
}
input:focus {
  border-bottom: solid 2px #616161;
}
textarea:focus {
  border: solid 2px #616161;
}

.logo {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}
.logo > img {
  margin-right: 1rem;
}
.nav-bar {
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  background: grey;
  z-index: 100;
}
.nav-bar > * {
  flex-grow: 1;
  text-align: center;
  text-decoration: none;
  font-size: 2em;
  color: white;
  transition: 1s;
}
.nav-bar > *:hover, .active-page {
  color: grey;
  background: #f2f2f2;
  transition: 1s;
}
</style>
