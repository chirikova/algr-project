<template>
  <perfect-scrollbar>
    <div class="form">
      <div class="form__container">
        <div class="form__title">Lorem ipsum<br />dolor</div>
        <form action="/" method="post">
          <div class="form__prop phone">
            <label for="phone">ВАШ ТЕЛЕФОН</label>
            <masked-input
              type="text"
              name="phone"
              id="phone"
              v-model="phone"
              mask="\+7 (111) 1111-111"
              placeholder="+7 (___) ____-___"
            />
          </div>
          <div class="form__prop policy">
            <input type="checkbox" name="policy" id="policy" v-model="policy" />
            <label for="policy"></label>
            <span class="form__prop__descr">Я принимаю условия</span>
          </div>

          <div class="form__controls">
            <button type="submit" :disabled="buttonDisabled">
              Отправить
            </button>
          </div>
          <div class="form__descr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod
          </div>
        </form>
      </div>
    </div></perfect-scrollbar
  >
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import MaskedInput from 'vue-masked-input'

export default {
  name: 'Form',
  data() {
    return {
      errors: {},
      phone: '',
      policy: '',
    }
  },
  components: {
    PerfectScrollbar,
    MaskedInput,
  },
  computed: {
    buttonDisabled: function() {
      return !this.policy || this.phone === ''
    },
  },
}
</script>
