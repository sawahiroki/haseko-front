<template>
  <div>
    <b-container fluid>
    <b-row class="text-center">
    <b-col cols="2"><h5>価格</h5></b-col>
    <b-col cols="4"><b-form-select v-model="min_selected" :options="min_options" required></b-form-select></b-col>
    <b-col cols="1"><h4>〜</h4></b-col>
    <b-col cols="4"><b-form-select v-model="max_selected" :options="max_options" required></b-form-select></b-col>
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
      min_selected: null,
      max_selected: null,
      min_options: [
        { value: null, text: '下限なし', disabled: true },
        { value: 0, text: '0' },
        { value: 10, text: '10' },
        { value: 100, text: '100' },
        { value: 1000, text: '1000' }
      ],
      max_options: [
        { value: null, text: '上限なし' },
        { value: 100, text: '100' },
        { value: 1000, text: '1000' },
        { value: 10000, text: '10000' },
        { value: 100000, text: '100000' }
      ]
    }
  }
}
</script>
