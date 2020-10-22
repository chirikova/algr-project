<template>
  <div class="logo">
    <router-link to="/">
      <img :src="logo" :alt="title" />
    </router-link>
  </div>
</template>

<script>
import logo from '@/assets/images/logo.svg'
export default {
  name: 'Logo',
  data() {
    return {
      title: 'Altergroup',
      logo: logo,
    }
  },
}
</script>
