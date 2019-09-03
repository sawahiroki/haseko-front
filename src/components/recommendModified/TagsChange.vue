<template>
  <div class="tagsChange">
    <h2>条件変更</h2>
    <b-container fluid>
    <b-row v-for="(tag, index) of tags" :key="index">
    <b-col cols="2"><h5>{{ tag.caption }}</h5></b-col>
    <b-col cols="4"><b-form-input id="index" v-model="tag.value" type="range" min="1" max="5"></b-form-input></b-col>
    <b-col cols="2"><h5>Value: {{ tag.value }}</h5></b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: [
        { caption: '角部屋', value: 3 },
        { caption: '広さ', value: 3 },
        { caption: '階立て', value: 3 },
        { caption: '立地', value: 3 },
        { caption: '駅地下', value: 3 },
        { caption: 'キッチン', value: 3 }
      ]
    }
  }
}
</script>
