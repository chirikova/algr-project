<template>
  <div class="slider">
    <vue-slider
      v-model="value"
      :min="this.min"
      :max="this.max"
      :rail-style="{ backgroundColor: '#d8d8d8' }"
      :process-style="{ backgroundColor: '#70d24e' }"
      :dot-style="{
        backgroundColor: '#70d24e',
        border: '4px solid white',
        width: '24px',
        height: '24px',
        boxShadow: '0px 5px 10px rgba(86, 86, 86, 0.05)',
      }"
    ></vue-slider>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: 'Slider',
  props: ['min', 'max', 'curMin', 'curMax'],
  components: {
    VueSlider,
  },
  data() {
    return {
      value: [parseInt(this.curMin), parseInt(this.curMax)],
    }
  },
  watch: {
    value: function() {
      this.$emit('changed', this.value)
    },
  },
  created() {},
}
</script>
