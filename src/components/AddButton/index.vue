<template>
  <div>
    <v-btn
      color="blue-grey"
      class="white--text"
      v-on:click='isOpen = !isOpen'
      v-if="isOpen === false"
      >
      <v-icon right dark>add</v-icon>
      Add More Currency
    </v-btn>
    <div v-show="isOpen">
      <input class="input-isi" v-model="currencyInput" placeholder="Input Currency">
      <v-btn
        color="blue-grey"
        class="white--text"
        @click="addCurrency"
        >
        Submit
        </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
var _ = require('lodash')
export default {
  data: () => {
    return {
      currencyInput: '',
      isOpen: false
    }
  },
  computed: {
    ...mapState([
      'totalCurrency',
      'dataCurrency'
    ])
  },
  methods: {
    ...mapActions([
      'getNewArray'
    ]),
    addCurrency () {
      this.isOpen = false
      if (this.currencyInput !== '' && _.has(this.dataCurrency, this.currencyInput.toUpperCase())) {
        var tempData = _.pick(this.dataCurrency, this.currencyInput.toUpperCase())
        const data = {
          name: this.currencyInput.toUpperCase(),
          value: tempData[this.currencyInput.toUpperCase()]
        }
        this.getNewArray(data)
        this.currencyInput = ''
      } else {
        alert('Please Input Corect Currency')
        this.currencyInput = ''
      }
    }
  }
}
</script>

<style lang="less" scope>
.input-isi {
  border: solid 1px #ddd;
  height: 40px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;
}
</style>
