<template>
  <div>
    <b-container fluid>
    <b-row class="row1">
      <b-col cols="2"><h5 >間取り</h5></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value=false>未設定</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="ワンルーム">ワンルーム</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="1K">1K</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="1DK">1DK</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="2K">2K</b-form-radio></b-col>
    </b-row>
    <b-row class="row2">
      <b-col cols="2"></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="2DK">2DK</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="2LDK">2LDK</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="3K">3K</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="3DK">3DK</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="3LDK">3LDK</b-form-radio></b-col>
    </b-row>
    <b-row class="row3">
      <b-col cols="2"></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="4K">4K</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="4DK">4DK</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="4LDK">4LDK</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="selected" name="floor-plan-radios" value="4LDK以上">4LDK以上</b-form-radio></b-col>
      <b-col cols="2"></b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'FloorPlanSelector',
  props: { },
  data () {
    return {
      selected: false
    }
  }
}
</script>
