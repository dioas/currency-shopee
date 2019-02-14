
<template>
  <v-container grid-list-md>
    <v-layout row wrap class="wrapper-body">
      <v-layout row wrap class="head-currency">
        <v-flex md12 xs12>
          USD - United State Dollars
        </v-flex>
        <v-flex md6 xs6>
          <b>USD</b>
        </v-flex>
        <v-flex md6 xs6 text-xs-right>
          <input class="border-input" type="number" v-model="parentData" v-on:keyup="makeCurrency" >
        </v-flex>
      </v-layout>
      <v-divider ></v-divider>
      <v-flex md12 xs12>
        <v-content style="text-align:center;">
          <CardInfoCurrency/>
          <AddButton/>
        </v-content>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AddButton from '@/components/AddButton'
import CardInfoCurrency from '@/components/CardInfoCurrency'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'home',
  props: {
    msg: String
  },
  data: () => {
    return {
      parentData: 100
    }
  },
  components: {
    AddButton, CardInfoCurrency
  },
  computed: {
    ...mapState([
      'dataCurrency'
    ])
  },
  mounted () {
    this.getAllCurrency()
  },
  methods: {
    ...mapActions([
      'getAllCurrency',
      'setParentNumber'
    ]),
    makeCurrency () {
      this.setParentNumber(this.parentData)
    }
  }
}
</script>

<style lang="less" scope>
.wrapper-body {
  border:solid 1px #ddd;
  .head-currency {
    width: 100%;
    border-bottom:solid 1px #ddd;
    padding: 15px !important;
    margin: 0 !important;
  }
}
.border-input {
  border:solid 1px #ddd;
  padding: 10px;
}
</style>
