<template lang="html">
  <div class="about">
    <div :style="{ background: palette[0] }">
      I am an entirely self-taught developer that has been working professionally since 2014. In this time I have created multiple projects including custom CRM systems to manage clients from various campaigns, a web app for searching and downloading recordings from a VOIP phone service, a calendar application to manage appointments, and multiple reactive web forms. I also have developed static websites for marketing purposes. I have experience working as a full-stack developer and can take a project from start to finish single-handedly.<br><br>I am always willing to take on new and unfamiliar tasks. Learning new technologies is my passion and I wont hesitate to take any challenge to satisfy my client.
    </div>
    <img src="../assets/portrait.png" alt="Portrait of Matt Gween">
  </div>
</template>

<script>
export default {
  name: 'About',
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
</style>
