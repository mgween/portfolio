<template lang="html">
  <div>
    <p class="description">This page shows a few services that have public APIs that can be used to access different kinds of data.</p>
    <div class="section" :style="{ background: palette[0] }">
      <div class="title-bar">
        <div></div>
        <h2>Quotes on Design</h2>
        <button @click="getQuote" class="icon-button">
          <font-awesome-icon :icon="icons.faPaintBrush" size="2x"/>
        </button>
      </div>
      <transition name="flip" mode="out-in">
        <div v-if="quote" :key="quote.ID">
          <div v-html="quote.content"></div>
          <p>- {{ quote.title }}</p>
          <a :href="quote.link">{{ quote.link }}</a>
        </div>
      </transition>

    </div>

    <div class="section" :style="{ background: palette[1] }">
      <div class="title-bar">
        <div></div>
        <h2>SpaceX Launches</h2>
        <button @click="getSpaceXData" class="icon-button">
          <font-awesome-icon :icon="icons.faRocket" size="2x"/>
        </button>
      </div>
      <transition name="flip" mode="out-in">
        <div v-if="spaceX.display" :key="spaceX.display.flight_number" class="space-x-data">
          <div class="space-x-details">
            <img :src="spaceX.display.links.mission_patch" width="200" height="200" class="space-x-img">
            <div>
              Flight Number: {{ spaceX.display.flight_number }}</br>
              </br>
              Rocket: {{ spaceX.display.rocket.rocket_name }}</br>
              </br>
              Launch Date: {{ $moment(spaceX.display.launch_date_local).format('DD MMM YYYY HH:mm a') }}</br>
              </br>
              Launch Site: {{ spaceX.display.launch_site.site_name_long }}
            </div>
          </div>
          {{ spaceX.display.details }}
        </div>
      </transition>
    </div>

    <div class="section" :style="{ background: palette[2] }">
      <div class="title-bar">
        <div></div>
        <h2>xkcd Comics</h2>
        <button @click="getXkcd" ref="xkcdButton" class="icon-button">
          <font-awesome-icon :icon="icons.faPencilAlt" size="2x"/>
        </button>
      </div>
      <transition name="flip" mode="out-in">
        <div v-if="xkcd.display" :key="xkcd.display.num">
          <img :src="xkcd.display.img" @click="openXkcd" :title="xkcd.display.alt" class="xkcd-img">
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
import faPaintBrush from '@fortawesome/fontawesome-free-solid/faPaintBrush';
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';

export default {
  name: 'Api',
  data() {
    return {
      quote: null,
      spaceX: {
        all: null,
        display: null
      },
      xkcd: {
        max: null,
        display: null
      },
      sectionpalette: [],
      icons: {
        faPaintBrush: faPaintBrush,
        faRocket: faRocket,
        faPencilAlt: faPencilAlt
      }
    }
  },
  methods: {
    getQuote() {
      fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand', {
        cache: 'no-store'
      }).then(response => {
        return response.json();
      }).then(data => {
        this.quote = data[0];
      });
    },
    getSpaceXData() {

      const getRand = () => {
        const rand = this.spaceX.all[Math.floor(Math.random() * this.spaceX.all.length)];

        if (this.spaceX.display) {

          if (rand.flight_number !== this.spaceX.display.flight_number) {
            this.spaceX.display = rand;
          } else {
            getRand();
          };

        } else {
          this.spaceX.display = rand;
        };

      };

      if (!this.spaceX.all) {
        fetch('https://api.spacexdata.com/v2/launches').then(response => {
          return response.json();
        }).then(data => {
          this.spaceX.all = data;
          getRand();
        });
      } else {
        getRand();
      };

    },
    getXkcd() {
      if (!this.xkcd.display) {
        fetch(`${this.server}/xkcd`).then(response => {
          return response.json();
        }).then(data => {
          this.xkcd.max = data.num;
          this.xkcd.display = data;
        });
      } else {
        const rand = Math.floor(Math.random() * this.xkcd.max) + 1;
        fetch(`${this.server}/xkcd?num=${rand}`).then(response => {
          return response.json();
        }).then(data => {
          this.xkcd.display = data;
          scrollTo(this.$refs.xkcdButton)
        });
      };
    },
    openXkcd() {
      window.open(this.xkcd.display.img);
    }
  },
  created() {
    this.shuffleArray(this.palette);
  }
}
</script>

<style lang="css" scoped>
.description {
  color: white;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}
.title-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.space-x-data {
  width: 100%;
}
.space-x-details {
  display: flex;
}
@media screen and (max-width:768px) {
  .space-x-details {
    flex-direction: column;
    align-items: center;
  }
}
.space-x-img {
  margin: 0 1rem 1rem 0;
}
.xkcd-img {
  max-width: 100%;
  cursor: pointer;
}
</style>
