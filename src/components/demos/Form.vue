<template lang="html">
  <div>
    <p>This is an example of a form that might be used to create a user profile. Please be aware that this data will be saved to be used in another demo.</p>

    <form v-if="stage === 'form'">

      <div class="form-small-inputs">
        <div>
          <h2>Nickname</h2>
          <input v-model="profile.nickname"
          :style="{ background: `linear-gradient(to right, #c9c9c9 50%, ${palette[2]} 50%)` }">
        </div>
        <div>
          <h2>Birthday</h2>
          <input v-model="profile.birthday" type="date"
          :style="{ background: `linear-gradient(to right, #c9c9c9 50%, ${palette[3]} 50%)` }">
        </div>
        <div>
          <h2>Favorite Drink</h2>
          <select v-model="profile.drink" :style="{ background: `linear-gradient(to right, #c9c9c9 50%, ${palette[4]} 50%)` }">
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
        <div>
          <h2>Color</h2>
          <div class="color-picker">
            <slider-picker v-model="profile.color" />
          </div>
        </div>
        <div>
          <h2>Icon</h2>
          <div class="icon-picker">
            <font-awesome-icon
            v-for="(icon, index) in iconList"
            @click="selectIcon(icon)"
            :key="icon"
            :icon="icon"
            :style="{ background: [...palette, ...palette, ...palette][index] }"
            :class="{ 'selected-icon': icon === profile.icon }"
            class="icon" />
          </div>
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

    <button v-if="validatorArray.length === 0"
    @click="changeStage"
    form="profileForm"
    type="submit"
    class="submit-button icon-button"
    :style="{ background: palette[5] }">
      <font-awesome-icon v-if="stage === 'form'" icon="arrow-right" size="2x" />
      <font-awesome-icon v-if="stage === 'results'" icon="arrow-left" size="2x" />
    </button>

  </div>
</template>

<script>
import { Slider } from 'vue-color';

export default {
  name: 'Form',
  components: {
    'slider-picker': Slider
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
          hex: '#79d28f'
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
    selectIcon(icon) {
      this.profile.icon = icon;
    },
    changeStage() {
      if (this.stage === 'form') {
        this.stage = 'results';
      } else {
        this.stage = 'form';
      };
    }
  },
  created() {
    this.shuffleArray(this.palette);
    this.shuffleArray(this.iconList);
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
  width: 47%;
}
.form-small-inputs > * {
  width: 30%;
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
.icon-picker {
  height: 125px;
  background: #c9c9c9;
  overflow-x: scroll;
  display: flex;
  align-items: center;
}
.icon {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 0 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}
.selected-icon {
  background: black !important;
  color: white;
  transform: rotate(360deg);
  transition: 1s;
}
.profile {
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 3rem;
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
