<template>
  <div class="item">
    <div class="item__container">
      <div class="item__header">
        <div class="item__info--level">{{ apt.level }} этаж</div>
        <div class="item__info--rooms-square">
          {{ apt.rooms }}-комнатная - {{ apt.square }}
        </div>
      </div>
      <div class="item__img-container">
        <div class="item__info--num">№{{ apt.building_id }}</div>
        <div class="item__info--img">
          <img :src="img" />
        </div>
      </div>
      <div class="item__footer">
        <div class="item__info--price-total">{{ priceTotal }} р.</div>
        <div class="item__info--price-per-square-meter">
          {{ pricePerSquareMeter }} р. за м<sup>2</sup>
        </div>
        <div class="item__controls">
          <a href="#" class="button">Подробнее</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/images/apt.png'

export default {
  name: 'Apt',
  props: ['apt'],
  data: function() {
    return {
      img: img,
    }
  },
  computed: {
    pricePerSquareMeter() {
      return Math.ceil(
        parseFloat(this.apt.price_real) / parseFloat(this.apt.square)
      )
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    },
    priceTotal() {
      return Math.ceil(parseFloat(this.apt.price_real))
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    },
  },
}
</script>
