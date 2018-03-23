<template lang="html">
  <div class="container">
    <h2>{{ post.title }}</h2>
    <p v-html="post.body"></p>
    <!-- :to="'/demo/' + post.path" -->
    <router-link to="/coming-soon" class="demo-link">
      <font-awesome-icon icon="arrow-circle-right" size="2x"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post']
}
</script>

<style lang="css" scoped>
.container {
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container > h2 {
  margin: 0;
}
.demo-link {
  align-self: flex-end;
  color: #636363;
  transition: 0.5s;
}
.demo-link:hover {
  transform: scale(1.7);
  color: black;
  transition: 0.5s;
}
</style>
