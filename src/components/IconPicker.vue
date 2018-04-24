<template lang="html">
  <div class="icon-picker">
    <font-awesome-icon
    v-for="(icon, index) in iconList"
    :key="icon.iconName"
    :icon="icon"
    @click="selectIcon(icon.iconName)"
    :style="{ background: [...palette, ...palette, ...palette][index] }"
    :class="{ 'selected-icon': icon.iconName === selectedIcon }"
    class="icon" />
  </div>
</template>

<script>
import faBolt from '@fortawesome/fontawesome-free-solid/faBolt';
import faCogs from '@fortawesome/fontawesome-free-solid/faCogs';
import faDove from '@fortawesome/fontawesome-free-solid/faDove';
import faEye from '@fortawesome/fontawesome-free-solid/faEye';
import faFlask from '@fortawesome/fontawesome-free-solid/faFlask';
import faGem from '@fortawesome/fontawesome-free-solid/faGem';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faLeaf from '@fortawesome/fontawesome-free-solid/faLeaf';
import faMoon from '@fortawesome/fontawesome-free-solid/faMoon';
import faMusic from '@fortawesome/fontawesome-free-solid/faMusic';
import faPaw from '@fortawesome/fontawesome-free-solid/faPaw';
import faSnowflake from '@fortawesome/fontawesome-free-solid/faSnowflake';
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench';

export default {
  name: 'IconPicker',
  data() {
    return {
      iconList: [
        faBolt,
        faCogs,
        faDove,
        faEye,
        faFlask,
        faGem,
        faHeart,
        faLeaf,
        faMoon,
        faMusic,
        faPaw,
        faSnowflake,
        faWrench
      ]
    }
  },
  methods: {
    selectIcon(icon) {
      this.$emit('select-icon', icon);
    }
  },
  props: [ 'selected-icon' ],
  created() {
    this.shuffleArray(this.iconList);
    if (this.$props.selectedIcon) {
      this.iconList.unshift(
        this.iconList.splice(
          this.iconList.map(item => item.iconName).indexOf(this.$props.selectedIcon),
          1
        )[0]
      );
    };
    this.shuffleArray(this.palette);
  }
}
</script>

<style lang="css">
.icon-picker {
  height: 125px;
  background: #c9c9c9;
  overflow-x: scroll;
  display: flex;
  align-items: center;
}
.icon {
  width: 50px !important;
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
  transition: 1s
}
</style>
