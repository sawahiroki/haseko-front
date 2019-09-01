<template>
  <div>
    <b-container fluid>
    <b-row class="row1">
      <b-col cols="2"><h5>築年月</h5></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="built-year-month-radios" value="''">未設定</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="built-year-month-radios" value="新築">新築</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="built-year-month-radios" value="1年以内">1年以内</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="built-year-month-radios" value="2年以内">2年以内</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="built-year-month-radios" value="3年以内">3年以内</b-form-radio></b-col>
    </b-row>
    <b-row class="row2">
      <b-col cols="2"></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="built-year-month-radios" value="4年以内">4年以内</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="built-year-month-radios" value="5年以内">5年以内</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="built-year-month-radios" value="10年以内">10年以内</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="built-year-month-radios" value="15年以内">15年以内</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="built-year-month-radios" value="20年以内">20年以内</b-form-radio></b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'FloorPlanSelector',
  props: { },
  data () {
    return {
      selected: ''
    }
  },
  computed: {
    ...mapState('searchStore',
      {builtYearMonth: 'conditions.builtYearMonth'}
    )
  },
  methods: {
    ...mapMutations('searchStore',
      {setBuiltYearMonth: 'setBuiltYearMonth'}
    )
  }
}
</script>
