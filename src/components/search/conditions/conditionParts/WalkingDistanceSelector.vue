<template>
  <div>
    <b-container fluid>
    <b-row class="row1">
    <b-col cols="2"><h5>徒歩</h5></b-col>
    <b-col cols="2"><b-form-radio v-model="selected" name="walking-distance-radios" value=false>未設定</b-form-radio></b-col>
    <b-col cols="2"><b-form-radio v-model="selected" name="walking-distance-radios" value="1分以内">1分以内</b-form-radio></b-col>
    <b-col cols="2"><b-form-radio v-model="selected" name="walking-distance-radios" value="3分以内">3分以内</b-form-radio></b-col>
    <b-col cols="2"><b-form-radio v-model="selected" name="walking-distance-radios" value="5分以内">5分以内</b-form-radio></b-col>
    </b-row>
    <b-row class="row2">
    <b-col cols="2"></b-col>
    <b-col cols="2"><b-form-radio v-model="selected" name="walking-distance-radios" value="10分以内">10分以内</b-form-radio></b-col>
    <b-col cols="2"><b-form-radio v-model="selected" name="walking-distance-radios" value="15分以内">15分以内</b-form-radio></b-col>
    <b-col cols="2"><b-form-radio v-model="selected" name="walking-distance-radios" value="20分以内">20分以内</b-form-radio></b-col>
    <b-col cols="2"></b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PriceSelector',
  props: { },
  data () {
    return {
      selected: false
    }
  }
}
</script>
