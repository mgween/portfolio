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

    <div class="github-link">
      <a href="https://github.com/mgween/portfolio" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="faGithub" size="3x" /></a>
    </div>
  </div>
</template>

<script>
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

export default {
  name: 'App',
  data() {
    return {
      faGithub: faGithub
    }
  }
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
  .github-link {
    position: fixed;
    bottom: 0;
    left: 0;
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

.flip-enter-active, .flip-leave-active, .route-enter-active, .route-leave-active {
  transition: 0.3s;
}
.flip-enter, .flip-leave-to, .route-enter, .route-leave-to {
  transform: scale(0, 1);
}
.fade-enter-active, .fade-leave-active {
  transition: 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-out-enter, .slide-out-leave-to {
  transform: translate(0, -100%);
}
.slide-out-enter-active, .slide-out-leave-active {
  z-index: -100;
  transition: 0.3s;
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
.icon-button:active {
  color: #bababa;
  transition: 0s;
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
.github-link {
  margin: 1rem;
}
.github-link > a {
  color: black;
}

</style>
