<template>
  <div :class="['scroll-to', elClass]" :click="scrollCalled">
    <div class="scroll-to__inner">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollTo',
  props: ['text', 'elClass'],
  method: {
    scrollCalled() {
      this.$emit('scrollCalled')
    },
  },
}
</script>
