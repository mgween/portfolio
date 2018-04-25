<template lang="html">
  <div>
    <div class="about">
      <div :style="{ background: palette[0] }">
        I am a self-taught developer that has been working professionally since 2014. In this time I have created multiple applications including custom CRM systems to manage clients from various campaigns, a web app for searching and downloading recordings from a VOIP phone service, and a calendar application to manage appointments. I also have developed static websites for marketing purposes and multiple reactive web forms. I have experience working as a full-stack developer and can take a project from start to finish single-handedly.<br><br>I am always willing to take on new and unfamiliar tasks. Learning new technologies is my passion and I wont hesitate to take any challenge to satisfy my client.
      </div>
      <img src="@/assets/portrait.png" alt="Portrait of Matt Gween">
    </div>
    <div class="tech-list-container" :style="{ background: palette[1] }">
      <div style="margin-bottom:1rem">I am proficient with these technologies:</div>
      <div class="tech-list">
        <div v-for="tech in techList" :key="tech.name">
          <font-awesome-icon :icon="tech.icon" size="2x"/>
          {{ tech.name }}
        </div>
        <div>
          <img src="/static/rethinkdb_logo.svg" height="32">
          RethinkDB
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faVuejs from '@fortawesome/fontawesome-free-brands/faVuejs';
import faAngular from '@fortawesome/fontawesome-free-brands/faAngular';
import faNodejs from '@fortawesome/fontawesome-free-brands/faNodejs';
import faGit from '@fortawesome/fontawesome-free-brands/faGit';
import faLinux from '@fortawesome/fontawesome-free-brands/faLinux';
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5';
import faCss3Alt from '@fortawesome/fontawesome-free-brands/faCss3Alt';
import faJs from '@fortawesome/fontawesome-free-brands/faJs';

export default {
  name: 'About',
  data() {
    return {
      techList: [
        { icon: faVuejs, name: 'Vue.js' },
        { icon: faAngular, name: 'Angular' },
        { icon: faHtml5, name: 'HTML5' },
        { icon: faJs, name: 'ES6' },
        { icon: faCss3Alt, name: 'CSS3' },
        { icon: faNodejs, name: 'Node.js' },
        { icon: faGit, name: 'Git' },
        { icon: faLinux, name: 'Linux' },
      ]
    }
  },
  created() {
    this.shuffleArray(this.palette);
  }
}
</script>

<style lang="css" scoped>
.about {
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
}
.about > img {
  border-radius: 5rem;
  margin-left: 1rem;
}
.about > div {
  padding: 1rem;
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 1rem;
}
@media screen and (min-width: 1024px) {
  .about {
    flex-direction: row;
    align-items: flex-start;
  }
  .about > div {
    position: relative;
    margin-left: -6rem;
    left: 6rem;
    top: 2rem;
  }
}
.tech-list-container {
  margin-top: 1rem;
  padding: 1rem;
}
.tech-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.tech-list > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
}
</style>
