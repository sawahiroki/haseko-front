<template>
  <div>
    <b-container fluid>
    <b-row class="text-center">
    <b-col cols="2"><h5>フリーワード</h5></b-col>
    <b-col cols="8"><b-form-input v-model="text" placeholder="フリーワード"></b-form-input></b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
