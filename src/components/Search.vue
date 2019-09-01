<template>
  <div>
    <h2>物件一覧</h2>
    <br>
    <b-button v-b-modal.modal-1>条件を絞り込む</b-button>
    <b-modal size="xl" id="modal-1" title="条件を絞り込む" title-center >
      <Conditions />
    </b-modal>

    <!-- <PropertyView id="properties-list" :item="items[i]" v-for="i of idList" :key="i" /> -->
    <PropertyView id="properties-list" :propertyId="i" :property="properties[i]" v-for="i of idList" :key="i" />
    <br>
    <!-- <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="properties-list"
      align="center"
    ></b-pagination> -->
  </div>
</template>

<script>
import PropertyView from '../PropertyView'
import Conditions from '../Conditions'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Search',
  components: {
    PropertyView,
    Conditions
  },
  data () {
    return {
      perPage: 3,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters(
      {properties: 'searchStore/properties'},
      {conditions: 'searchStore/conditions'},
      {keepProperties: 'searchStore/keepProperties'},
      {keepCount: 'searchStore/keepCount'}
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
    ...mapMutations(
      {addKeep: 'searchStore/addKeep'},
      {deleteKeep: 'searchStore/deleteKeep'},
      {incrementVueCount: 'searchStore/incrementVueCount'},
      {resetAll: 'searchStore/resetAll'},
      {changeConditions: 'searchStore/changeConditions'}
    ),
    ...mapActions(
      {searchProperties: 'searchStore/searchProperties'}
    )
  }
}
</script>

<style scoped>

ol {
  margin-left: auto;
  width: 480px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left:5px;
  margin-right:5px;
  font-size: 16px;
  background-color: gray;
  border-radius: 14px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}

</style>
