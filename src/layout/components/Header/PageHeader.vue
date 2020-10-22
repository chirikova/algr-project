<template>
  <header class="header">
    <div class="header__row">
      <hamburger :is-active="navbarExpanded" @toggleClick="toggleNavbar" />
      <logo />
      <router-link to="/form/" class="button to-form">
        <span>Форма</span>
      </router-link>
    </div>
    <div class="header__row">
      <transition name="fade-transform" mode="out-in">
        <navbar :is-active="navbarExpanded" v-show="navbarExpanded"
      /></transition>
    </div>
  </header>
</template>

<script>
import Hamburger from './Hamburger'
import Logo from './Logo'
import Navbar from './Navbar'

export default {
  name: 'PageHeader',
  components: {
    Hamburger,
    Logo,
    Navbar,
  },
  data: function() {
    return {
      navbarExpanded: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarExpanded = !this.navbarExpanded
    },
  },
}
</script>
