<template>
  <div>

  <b-nav tabs fill>
    <b-nav-item active>結果一覧</b-nav-item>
    <b-nav-item to="/recommend/modified/keep">Keep一覧</b-nav-item>
  </b-nav>
    <div>
    <br>
    <h2>結果一覧</h2>
    <br>
    <b-button v-b-modal.modal-1>条件の変更</b-button>
    <b-modal size="xl" id="modal-1" title="条件の変更" hide-footer title-center >
      <TagsChange />
    </b-modal>
    <br><br>
    <RecommendModifiedPropertyView id="properties-list" :propertyNum="i" :property="properties[i]" v-for="i of idList" :key="i" />
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
import RecommendModifiedPropertyView from './RecommendModifiedPropertyView'
import TagsChange from './TagsChange'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Recommend',
  components: {
    RecommendModifiedPropertyView,
    TagsChange
  },
  data () {
    return {
      perPage: 3,
      currentPage: 1
    }
  },
  computed: {
    ...mapState('recommendModifiedStore',
      {savedCurrentPage: 'savedCurrentPage'}
    ),
    ...mapState('recommendModifiedStore',
      {properties: 'properties'}
    ),
    ...mapGetters('recommendModifiedStore',
      {keepProperties: 'keepProperties'}
    ),
    ...mapGetters('recommendModifiedStore',
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
    ...mapMutations('recommendModifiedStore',
      {addVueCount: 'addVueCount'}
    ),
    ...mapMutations('recommendModifiedStore',
      {saveCurrentPage: 'saveCurrentPage'}
    ),
    ...mapMutations('recommendModifiedStore',
      {resetAll: 'resetAll'}
    ),
    ...mapMutations('recommendModifiedStore',
      {changeConditions: 'changeConditions'}
    ),
    ...mapActions('recommendModifiedStore',
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
