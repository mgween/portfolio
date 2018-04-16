<template lang="html">
  <div class="container">
    <h2>{{ post.title }}</h2>
    <p v-html="post.body"></p>
    <router-link :to="'/demo/' + post.path" class="icon-button demo-link">
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
}
</style>
