<template>
  <div>

  <b-nav tabs fill>
    <b-nav-item active>検索結果一覧</b-nav-item>
    <b-nav-item to="/search/keep">Keep一覧</b-nav-item>
  </b-nav>
    <div>
    <br>
    <h2>検索結果一覧</h2>
    <br>
    <b-button v-b-modal.modal-1>条件の変更</b-button>
    <b-modal size="xl" id="modal-1" title="条件の変更" hide-footer title-center >
      <Conditions />
    </b-modal>

    <br><br>
    <SearchPropertyView id="properties-list" :propertyNum="i" :property="properties[i]" v-for="i of idList" :key="i" />
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
import SearchPropertyView from './SearchPropertyView'
import Conditions from './conditions/Conditions'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Search',
  components: {
    SearchPropertyView,
    Conditions
  },
  data () {
    return {
      perPage: 3,
      currentPage: 1
    }
  },
  computed: {
    ...mapState('searchStore',
      {properties: 'properties'}
    ),
    ...mapState('searchStore',
      {conditions: 'conditions'}
    ),
    ...mapGetters('searchStore',
      {keepProperties: 'keepProperties'}
    ),
    ...mapGetters('searchStore',
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
    ...mapMutations('searchStore',
      {incrementVueCount: 'incrementVueCount'}
    ),
    ...mapMutations('searchStore',
      {resetAll: 'resetAll'}
    ),
    ...mapMutations('searchStore',
      {changeConditions: 'changeConditions'}
    ),
    ...mapActions('searchStore',
      {searchProperties: 'searchProperties'}
    )
  }
}
</script>

<style scoped>

li:hover {
  opacity: 0.4;
}

</style>
