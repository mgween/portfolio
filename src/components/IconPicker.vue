<template lang="html">
  <div class="icon-picker">
    <font-awesome-icon
    v-for="(icon, index) in iconList"
    @click="selectIcon(icon)"
    :key="icon"
    :icon="icon"
    :style="{ background: [...palette, ...palette, ...palette][index] }"
    :class="{ 'selected-icon': icon === selectedIcon }"
    class="icon" />
  </div>
</template>

<script>
export default {
  name: 'IconPicker',
  data() {
    return {
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
