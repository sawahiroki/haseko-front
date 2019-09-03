<template>
  <div>

  <b-nav tabs fill>
    <b-nav-item to="/recommend/properties">結果一覧</b-nav-item>
    <b-nav-item active>Keep一覧</b-nav-item>
  </b-nav>
    <div>
    <br>
    <h2>Keep一覧</h2>
    <br>

    <br><br>
    <RecommendPropertyView id="properties-list" :propertyNum="i" :property="keepProperties[i]" v-for="i of idList" :key="i" />
    <br>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="properties-list"
      align="center"
    ></b-pagination>
    </div>
  </div>
</template>

<script>
import RecommendPropertyView from './RecommendPropertyView'
import { mapGetters } from 'vuex'

export default {
  name: 'RecommendKeep',
  components: {
    RecommendPropertyView
  },
  data () {
    return {
      perPage: 5,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters('recommendStore',
      {keepProperties: 'keepProperties'}
    ),
    ...mapGetters('recommendStore',
      {keepCount: 'keepCount'}
    ),
    rows () {
      return this.keepProperties.length
    },
    idList () {
      let list = []
      for (var i = 0; i < this.perPage; i++) {
        if ((this.currentPage - 1) * this.perPage + i < this.rows) {
          list.push((this.currentPage - 1) * this.perPage + i)
        }
      }
      return list
    }
  }
}
</script>

<style scoped>

li:hover {
  opacity: 0.4;
}
</style>
