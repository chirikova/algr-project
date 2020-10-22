<template>
  <div class="page">
    <div class="wrapper">
      <page-header />
      <page-main />
      <page-footer />
    </div>
  </div>
</template>

<script>
import { PageHeader, PageMain, PageFooter } from './components'

export default {
  name: 'Layout',
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
}
</script>
