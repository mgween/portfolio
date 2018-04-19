<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png" height="100" width="100" alt="Matt's Logo">
      <h1>Matt Gween</h1>
    </div>
    <div class="nav-bar">
      <router-link :to="'/home'" :class="{'active-page': $route.path === '/home'}">Demos</router-link>
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
      server: location.host === 'localhost:8080' ? 'http://localhost:2626' : '',
      palette: [
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
@font-face {
  font-family: Quicksand;
  src: url('/static/font/Quicksand-Regular.ttf');
}

body {
  background: #636363;
  font-family: 'Quicksand';
  overflow-x: hidden;
  margin: 0;
}
@media screen and (min-width: 769px) {
  body {
    margin: 0 20vw 1rem;
  }
}

input, textarea, select {
  /* https://stackoverflow.com/a/17212432 */
  background: linear-gradient(to right, #c9c9c9 50%, white 50%);
  background-size: 202% 100% !important;
  background-position: left bottom !important;
  border: none;
  transition: 0.5s;
  outline: none;
  font-family: 'Quicksand', sans-serif;
}
input:focus, textarea:focus, select:focus {
  background-position: right bottom !important;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: black;
}
::-moz-placeholder { /* Firefox 19+ */
  color: black;
}
:-ms-input-placeholder { /* IE 10+ */
  color: black;
}
:-moz-placeholder { /* Firefox 18- */
  color: black;
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
.collapse-enter-active, .collapse-leave-active {
  transition: all .3s;
}
.collapse-enter, .collapse-leave-to {
  transform: scale(0, 1);
}
.icon-button {
  color: #636363;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
}
.icon-button:hover {
  transform: scale(1.7);
  color: black;
  transition: 0.5s;
}

.logo {
  display: flex;
  align-items: center;
  margin: 1rem;
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
