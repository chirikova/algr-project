<template>
  <div @click="toggleClick" :class="[{ 'is-active': isActive }, 'hamburger']">
    <div class="hamburger__icon">
      <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="10" height="2" rx="1" fill="white" />
        <rect y="5" width="10" height="2" rx="1" fill="white" />
        <rect y="10" width="10" height="2" rx="1" fill="white" />
      </svg>
    </div>
    <div class="hamburger__title">Меню</div>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  data: function() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleClick() {
      this.isActive = !this.isActive
      this.$emit('toggleClick')
    },
  },
}
</script>
