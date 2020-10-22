<template>
  <section class="location" id="location">
    <div class="location__inner">
      <div class="location__title">
        Местоположение
      </div>
      <div class="location__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod
        </p>
      </div>
      <div class="location__map">
        <yandex-map
          :coords="coords"
          zoom="16"
          style="width: 100%; height: 410px;"
          :controls="['zoomControl', 'geolocationControl']"
          map-type="map"
        >
          <ymap-marker
            marker-id="placemark"
            marker-type="placemark"
            :coords="coords"
            hint-content="Метка"
            :icon="markerIcon"
          ></ymap-marker>
        </yandex-map>
      </div>
      <div class="location__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import icon from '@/assets/images/ymarker.png'

export default {
  components: { yandexMap, ymapMarker },
  data: function() {
    return {
      coords: [64.529153, 40.566955],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: icon,
        imageSize: [37, 37],
        content: 'кастомный тултип',
        contentOffset: [-60, -116],
        contentLayout:
          '<div style="width: 150px; height:90px; background: white; box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.32); border-radius: 5px;color: #111;padding:10px; ">$[properties.iconContent]</div>',
      },
    }
  },
}
</script>
