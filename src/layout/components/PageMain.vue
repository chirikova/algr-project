<template>
  <section class="content">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'PageMain',
  computed: {
    key() {
      return this.$route.path
    },
  },
}
</script>
