<template lang="html">
  <div>
    <p>This is an example of a form that might be used to create a user profile. Please be aware that this data will be saved to be used in another demo.</p>

    <form v-if="stage === 'form'" @submit.prevent>
      <div class="form-small-inputs">
        <div :style="{ background: palette[0] }">
          <h2>Nickname</h2>
          <input v-model="profile.nickname"
          :style="inputColorizer(1)">
        </div>
        <div :style="{ background: palette[2] }">
          <h2>Birthday</h2>
          <input v-model="profile.birthday" type="date"
          :style="inputColorizer(3)">
        </div>
        <div :style="{ background: palette[4] }">
          <h2>Favorite Drink</h2>
          <select v-model="profile.drink" :style="inputColorizer(5)">
            <option disabled value="null">-- Drinks --</option>
            <optgroup label="Alcoholic">
              <option v-for="drink in drinkList.alcoholic">
                {{ drink }}
              </option>
            </optgroup>
            <optgroup label="Non-Alcoholic">
              <option v-for="drink in drinkList.nonAlcoholic">
                {{ drink }}
              </option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="form-big-inputs">
        <div :style="{ background: palette[1] }">
          <h2>Color</h2>
          <div class="color-picker">
            <slider-picker v-model="profile.color" />
          </div>
        </div>
        <div :style="{ background: palette[3] }">
          <h2>Icon</h2>
          <icon-picker
          @select-icon="profile.icon = $event"
          :selected-icon="profile.icon" />
        </div>
      </div>
    </form>

    <div v-else style="display:flex; justify-content: center">
      <div :style="{ background: profile.color.hex }" class="profile">
        <span>{{ profile.nickname }}</span>
        <div class="profile-details">
          <font-awesome-icon :icon="profile.icon" size="10x" />
          <div>
            <span>Birthday: {{ $moment(profile.birthday).format('DD MMM YYYY') }}</span>
            <span>Favorite Drink: {{ profile.drink }}</span>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <button v-if="validatorArray.length === 0"
      @click="changeStage"
      form="profileForm"
      type="submit"
      class="submit-button icon-button"
      :style="{ background: palette[5] }">
        <font-awesome-icon v-if="stage === 'form'" icon="arrow-right" size="2x" />
        <font-awesome-icon v-if="stage === 'results'" icon="arrow-left" size="2x" />
      </button>
    </transition>

  </div>
</template>

<script>
import { Slider } from 'vue-color';
import  IconPicker from '@/components/IconPicker';

export default {
  name: 'Form',
  components: {
    'slider-picker': Slider,
    'icon-picker': IconPicker
  },
  data() {
    return {
      stage: 'form',
      iconList: [
        'bolt',
        'cogs',
        'dove',
        'eye',
        'flask',
        'gem',
        'heart',
        'leaf',
        'moon',
        'music',
        'paw',
        'snowflake',
        'wrench'
      ],
      drinkList: {
        alcoholic: [
          'Beer',
          'Wine',
          'Whiskey',
          'Vodka',
          'Rum',
          'Mixed Drink'
        ],
        nonAlcoholic: [
          'Water',
          'Juice',
          'Tea',
          'Coffee',
          'Milk',
          'Soda'
        ]
      },
      profile: {
        nickname: null,
        birthday: null,
        drink: null,
        icon: null,
        color: {
          "hsl": {
            "h": 134.8314606741573,
            "s": 0.49999999999999983,
            "l": 0.65,
            "a": 1
          },
          "hex": "#79D28F",
          "rgba": {
            "r": 121,
            "g": 210,
            "b": 143,
            "a": 1
          },
          "hsv": {
            "h": 134.8314606741573,
            "s": 0.4242424242424241,
            "v": 0.825,
            "a" :1
          },
          "oldHue": 134.8314606741573,
          "source": "hsl",
          "a": 1
        }
      }
    }
  },
  computed: {
    validatorArray() {
      const profileClone = { ...this.profile };
      delete profileClone.color;
      return Object.entries(profileClone).filter(item => {
        return item[1] == null || item[1] === '';
      });
    }
  },
  methods: {
    changeStage() {
      if (this.stage === 'form') {
        fetch(`${this.server}/save-profile`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(this.profile)
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (!this.profile.id) {
            this.profile['id'] = data.generated_keys[0];
          };
          this.stage = 'results';
        });
      } else {
        this.stage = 'form';
      };
    }
  },
  created() {
    this.shuffleArray(this.palette);
  }
}
</script>

<style lang="css" scoped>
@media screen and (max-width:768px) {
  .form-big-inputs, .form-small-inputs {
    flex-direction: column;
    align-items: center;
  }
  .form-big-inputs > *, .form-small-inputs > * {
    width: 90% !important;
  }
  .profile-details {
    flex-direction: column;
    align-items: center;
  }
  .profile-details > div {
    margin-top: 1rem;
  }
}
p {
  color: white;
}
input, select {
  font-size: 1.5em;
  width: 100%;
}
.form-big-inputs, .form-small-inputs {
  display: flex;
  justify-content: space-between;
}
.form-big-inputs > * {
  width: 40%;
  padding: 1rem;
  flex-grow: 1;
}
.form-small-inputs > * {
  width: 30%;
  flex-grow: 1;
  padding: 1rem;
}
.color-picker {
  height: 125px;
  background: #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vc-slider {
  width: 90%;
}
.profile {
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 3rem;
  margin-bottom: 5rem;
}
.profile > span {
  align-self: center;
  font-size: 2em;
  margin-bottom: 1rem;
}
.profile-details {
  display: flex;
  justify-content: space-around;
}
.profile-details > div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.5em;
}
.submit-button {
  position: fixed;
  bottom: 10vh;
  right: 10vw;
  text-align: center;
  color: black;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  transition: 0.5s;
}
</style>
