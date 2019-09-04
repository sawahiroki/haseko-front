<template>
  <div class="keepAdmin">
    <h2>Keep物件一覧(管理)</h2>
    <h5 class="address">通常検索：{{ searchVueCount }}件</h5>
    <h5 class="propertyGenre">レコメンド：{{ recommendVueCount }}件</h5>
    <h5 class="farFromStation">レコメンド条件変更後：{{ recommendModifiedVueCount }}件</h5>
    <AdminPropertyView id="properties-list" :propertyNum="i" :property="properties[i]" v-for="i of idList" :key="i" />
  </div>
</template>

<script>
import AdminPropertyView from './AdminPropertyView'
import { mapState, mapGetters } from 'vuex'

export default {

  name: 'KeepAdmin',
  components: {
    AdminPropertyView
  },
  computed: {
    ...mapGetters('searchStore',
      {searchKeepProperties: 'keepProperties'}
    ),
    ...mapGetters('recommendStore',
      {recommendKeepProperties: 'keepProperties'}
    ),
    ...mapGetters('recommendModifiedStore',
      {recommendModifiedKeepProperties: 'keepProperties'}
    ),
    ...mapState('searchStore',
      {searchVueCount: 'vueCount'}
    ),
    ...mapState('recommendStore',
      {recommendVueCount: 'vueCount'}
    ),
    ...mapState('recommendModifiedStore',
      {recommendModifiedVueCount: 'vueCount'}
    ),
    properties () {
      let properties = []
      for (let property of this.searchKeepProperties) {
        property.domainSearch = true
        properties.push(property)
      }
      for (let property of this.recommendKeepProperties) {
        let doubleCountFlg = 0
        for (let _property of properties) {
          if (_property.propertyId === property.propertyId) {
            _property.domainRecommend = true
            doubleCountFlg += 1
            break
          }
        }
        if (doubleCountFlg === 0) {
          property.domainRecommend = true
          properties.push(property)
        }
      }
      for (let property of this.recommendModifiedKeepProperties) {
        let doubleCountFlg = 0
        for (let _property of properties) {
          if (_property.propertyId === property.propertyId) {
            _property.domainRecommendModified = true
            doubleCountFlg += 1
            break
          }
        }
        if (doubleCountFlg === 0) {
          property.domainRecommendModified = true
          properties.push(property)
        }
      }
      return properties
    },
    idList () {
      let list = []
      for (var i = 0; i < this.properties.length; i++) {
        list.push(i)
      }
      return list
    }
  }
}
</script>

<style scoped>
</style>
