<template>
  <div class="tagsChange">
    <br>
    <h2>タグの修正</h2>
    <b-form @submit="pushButton()" >
    <b-container fluid>
    <b-row v-for="(tag, index) of tags" :key="index">
    <b-col cols="2"><h5>{{ tag.caption }}</h5></b-col>
    <b-col cols="4"><b-form-input id="index" v-model="tag.value" type="range" min="1" max="5"></b-form-input></b-col>
    <b-col cols="2"><h5>Value: {{ tag.value }}</h5></b-col>
    </b-row>
    <br>
    </b-container>
    <b-container fluid>
      <b-row class="text-center">
      <b-col cols="5"></b-col>
      <b-col cols="2"><b-button type="submit" variant="primary" to="/recommend/modified/properties">変更する</b-button></b-col>
      </b-row>
    </b-container>
  </b-form>
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
    ...mapMutations('recommendModifiedStore',
      {resetSavedCurrentPage: 'resetSavedCurrentPage'}
    ),
    pushButton () {
      this.setTags({tags: this.tags})
      this.resetSavedCurrentPage()
    }
  }
}
</script>
