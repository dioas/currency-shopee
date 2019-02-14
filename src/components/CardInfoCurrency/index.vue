<template>
  <div v-if="getListCurrency" >
    <v-card v-for="(list, i) in getListCurrency" :key="i" class="wrapper-card mt-3" >
      <v-layout  row wrap>
        <v-flex md10 xs10 class="main-wrapper">
          <div class="main-currency">
            {{list.name}}
          </div>
          <div class="name-currency">1 USD = {{list.name}} {{list.value}}</div>
          <div class="each-currency">{{list.value * parentValue}}</div>
        </v-flex>
        <v-flex md2 xs2>
          <v-btn
          @click="removeData(i)"
          >
            X
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'getListCurrency',
      'parentValue'
    ])
  },
  methods: {
    ...mapActions([
      'removeIndex'
    ]),
    removeData (i) {
      this.removeIndex(i)
    }
  }
}
</script>
