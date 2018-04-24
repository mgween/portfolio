<template lang="html">
  <div>
    <p class="intro">The examples below demonstrate a few of the features that I have had to implement in the course of my career. These are features that are generally found in all kinds of applications.</p>
    <div class="demo-board">
      <Post v-for="post in demoPosts" :key="post.title" :post="post" :style="{ background: post.color }"></Post>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post';
import { descriptions } from '@/assets/demo-descriptions';

export default {
  name: 'Home',
  components: { Post },
  created() {
    this.shuffleArray(this.palette);
    descriptions.forEach((item, index) => {
      item['color'] = this.palette[index];
      if (item.linkString) {
        item.body = item.body.replace(
          item.linkString,
          `<a href="${item.linkSite}" target="_blank" rel="noopener noreferrer">${item.linkString}</a>`
        );
      };
    });
    this.demoPosts = descriptions;
  }
}
</script>

<style lang="css" scoped>
.intro {
  color: white;
  text-align: center;
}
.demo-board {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
}
@media screen and (max-width: 768px) {
  .demo-board {
    grid-template-columns: 1fr;
  }
}
</style>
