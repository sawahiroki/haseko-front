<template>
  <div>

  <b-nav tabs fill>
    <b-nav-item active>検索結果一覧</b-nav-item>
    <b-nav-item to="/recommend/keep">Keep一覧</b-nav-item>
  </b-nav>
    <div>
    <br>
    <h2>検索結果一覧</h2>
    <br>
    <br><br>
    <RecommendPropertyView id="properties-list" :propertyNum="i" :property="properties[i]" v-for="i of idList" :key="i" />
    <br>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="properties-list"
      align="center"
      @change="changePage()"
    ></b-pagination>
    </div>
  </div>
</template>

<script>
import RecommendPropertyView from './RecommendPropertyView'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Recommend',
  components: {
    RecommendPropertyView
  },
  data () {
    return {
      perPage: 3,
      currentPage: 1
    }
  },
  computed: {
    ...mapState('recommendStore',
      {savedCurrentPage: 'savedCurrentPage'}
    ),
    ...mapState('recommendStore',
      {properties: 'properties'}
    ),
    ...mapGetters('recommendStore',
      {keepProperties: 'keepProperties'}
    ),
    ...mapGetters('recommendStore',
      {keepCount: 'keepCount'}
    ),
    rows () {
      return this.properties.length
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
  },
  methods: {
    ...mapMutations('recommendStore',
      {addVueCount: 'addVueCount'}
    ),
    ...mapMutations('recommendStore',
      {saveCurrentPage: 'saveCurrentPage'}
    ),
    ...mapMutations('recommendStore',
      {resetAll: 'resetAll'}
    ),
    ...mapMutations('recommendStore',
      {changeConditions: 'changeConditions'}
    ),
    ...mapActions('recommendStore',
      {searchProperties: 'searchProperties'}
    ),
    changePage () {
      this.addVueCount({perPage: this.perPage})
    }
  },
  created () {
    this.currentPage = this.savedCurrentPage
  },
  beforeDestroy () {
    this.saveCurrentPage({currentPage: this.currentPage})
  }
}
</script>

<style scoped>

li:hover {
  opacity: 0.4;
}

</style>
