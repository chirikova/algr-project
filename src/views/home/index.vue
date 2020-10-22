<template>
  <perfect-scrollbar>
    <section class="home">
      <article>
        <promo />
        <items refs="itemsContainer" />
        <location />
      </article>
      <div class="scroll-to items-scroll">
        <a class="scroll-to__inner" href="#items">
          Подбор
        </a>
      </div>
      <div class="scroll-to location-scroll">
        <a class="scroll-to__inner" href="#location">
          Местоположение
        </a>
      </div>
    </section>
  </perfect-scrollbar>
</template>

<script>
import Promo from '@/components/Promo'
import Items from '@/components/Items'
import Location from '@/components/Location'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

export default {
  name: 'Home',
  components: {
    Promo,
    Items,
    Location,
    PerfectScrollbar,
  },
}
</script>
