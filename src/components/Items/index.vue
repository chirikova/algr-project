<template>
  <section class="items" id="items">
    <div class="items__inner">
      <div class="items__title">Lorem ipsum dolor sit</div>
      <div
        :class="['items__filters', { 'mobile-visible': filterMobileVisible }]"
      >
        <div class="items__filters__inner">
          <div class="items__filter rooms">
            <div class="items__filter__title">Комнаты</div>
            <div class="props">
              <div class="prop" v-for="val in rooms" v-bind:key="val">
                <input
                  type="checkbox"
                  :value="val"
                  :id="'rooms' + val"
                  v-model="filterParams.rooms"
                />
                <label :for="'rooms' + val">{{ val }}</label>
              </div>
            </div>
          </div>
          <div class="items__filter level">
            <div class="items__filter__title">Этаж</div>
            <div class="props">
              <div class="prop">
                <input
                  type="text"
                  name="levelMin"
                  v-model="filterParams.level[0]"
                />
              </div>
              <div class="prop">
                <input
                  type="text"
                  name="levelMax"
                  v-model="filterParams.level[1]"
                />
              </div>
            </div>
            <div class="items__filter__slider">
              <slider
                v-bind:min="1"
                v-bind:max="99"
                v-bind:curMin="filterParams.level[0]"
                v-bind:curMax="filterParams.level[1]"
                ref="slider1Data"
                @changed="slider1Changed"
              />
            </div>
          </div>
          <div class="items__filter square">
            <div class="items__filter__title">ПЛОЩАДЬ, м<sup>2</sup></div>
            <div class="props">
              <div class="prop">
                <input
                  type="text"
                  name="squareMin"
                  v-model="filterParams.square[0]"
                />
              </div>
              <div class="prop">
                <input
                  type="text"
                  name="squareMax"
                  v-model="filterParams.square[1]"
                />
              </div>
            </div>
            <div class="items__filter__slider">
              <slider
                v-bind:min="10"
                v-bind:max="250"
                v-bind:curMin="filterParams.square[0]"
                v-bind:curMax="filterParams.square[1]"
                ref="slider2Data"
                @changed="slider2Changed"
              />
            </div>
          </div>
          <div class="items__filter price">
            <div class="items__filter__title">СТОИМОСТЬ, млн. р.</div>
            <div class="props">
              <div class="prop">
                <input
                  type="text"
                  name="priceMin"
                  v-model="filterParams.price[0]"
                />
              </div>
              <div class="prop">
                <input
                  type="text"
                  name="priceMax"
                  v-model="filterParams.price[1]"
                />
              </div>
            </div>
            <div class="items__filter__slider">
              <slider
                v-bind:min="2"
                v-bind:max="99"
                v-bind:curMin="filterParams.price[0]"
                v-bind:curMax="filterParams.price[1]"
                ref="slider3Data"
                @changed="slider3Changed"
              />
            </div>
          </div>
          <div class="items__filters__controls">
            <button @click="filterItems" class="apply">Применить</button>
            <button @click="resetParams" class="reset">Сбросить фильтр</button>
          </div>
        </div>
      </div>
      <div class="items__list">
        <apt
          v-for="(data, index) in filteredItems"
          v-bind:key="index"
          v-bind:apt="data"
        />
      </div>
    </div>
    <div class="show-on-mobile">
      <button @click="toggleMobileFilter">{{ btnMobileFilterTitle }}</button>
    </div>
  </section>
</template>

<script>
import Apt from './Apt'
import ItemsData from '@/assets/sample-data.json'
import Slider from './Slider'

export default {
  name: 'ItemsList',
  components: {
    Apt,
    Slider,
  },
  data: function() {
    return {
      items: ItemsData,
      filteredItems: ItemsData,
      initFilterParams: {
        rooms: ['XS'],
        square: [1, 80],
        level: [1, 80],
        price: [1, 80],
      },
      filterParams: {
        rooms: ['XS'],
        square: [1, 80],
        level: [1, 80],
        price: [1, 80],
      },
      filterMobileVisible: false,
    }
  },
  computed: {
    rooms: function() {
      return [
        ...new Set(
          ItemsData.map((elem) => {
            return elem.short
          })
        ),
      ]
    },
    btnMobileFilterTitle: function() {
      return this.filterMobileVisible ? 'Закрыть' : 'Подобрать квартиру'
    },
  },
  methods: {
    filterItems: function() {
      var params = this.filterParams

      this.filteredItems = this.items.filter(function(item) {
        return (
          params.rooms.includes(item.short) &&
          item.square >= params.square[0] &&
          item.square <= params.square[1] &&
          item.level >= params.level[0] &&
          item.level <= params.level[1] &&
          item.price_real >= params.price[0] * 1000000 &&
          item.price_real <= params.price[1] * 1000000
        )
      })
      this.filterMobileVisible = false
    },
    resetParams: function() {
      this.filterParams = { ...this.initFilterParams }
      this.filteredItems = { ...this.items }
    },
    slider1Changed: function() {
      this.filterParams.level = [
        this.$refs.slider1Data.value[0],
        this.$refs.slider1Data.value[1],
      ]
    },
    slider2Changed: function() {
      this.filterParams.square = [
        this.$refs.slider2Data.value[0],
        this.$refs.slider2Data.value[1],
      ]
    },
    slider3Changed: function() {
      this.filterParams.price = [
        this.$refs.slider3Data.value[0],
        this.$refs.slider3Data.value[1],
      ]
    },
    toggleMobileFilter: function() {
      this.filterMobileVisible = !this.filterMobileVisible
    },
  },
}
</script>
