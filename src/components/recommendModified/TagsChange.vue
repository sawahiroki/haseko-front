<template>
  <div class="tagsChange">
    <h2>条件変更</h2>
    <b-container fluid>
    <b-row v-for="(tag, index) of tags" :key="index">
    <b-col cols="2"><h5>{{ tag.caption }}</h5></b-col>
    <b-col cols="4"><b-form-input id="index" v-model="tag.value" type="range" min="1" max="5"></b-form-input></b-col>
    <b-col cols="2"><h5>Value: {{ tag.value }}</h5></b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols="3"></b-col>
      <b-col cols="3"><b-button class="resultButton" @click="pushButton()">変更する</b-button></b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('recommendModifiedStore',
      {tags: 'tags'}
    )
  },
  methods: {
    ...mapMutations('recommendModifiedStore',
      {setTags: 'setTags'}
    ),
    pushButton () {
      this.setTags({tags: this.tags})
    }
  }
}
</script>
