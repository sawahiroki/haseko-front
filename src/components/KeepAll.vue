<template>
  <div class="keepAdmin">
    <h2>Keep物件一覧(採点用)</h2>
    <PropertyView id="properties-list" :propertyNum="i" :property="properties[i]" v-for="i of idList" :key="i" />
  </div>
</template>

<script>
import PropertyView from './PropertyView'
import { mapGetters } from 'vuex'

export default {

  name: 'KeepAdmin',
  components: {
    PropertyView
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
    properties () {
      let properties = []
      for (let property of this.searchKeepProperties) {
        properties.push(property)
      }
      for (let property of this.recommendKeepProperties) {
        let doubleCountFlg = 0
        for (let _property of properties) {
          if (_property.propertyId === property.propertyId) {
            doubleCountFlg += 1
            break
          }
        }
        if (doubleCountFlg === 0) {
          properties.push(property)
        }
      }
      for (let property of this.recommendModifiedKeepProperties) {
        let doubleCountFlg = 0
        for (let _property of properties) {
          if (_property.propertyId === property.propertyId) {
            doubleCountFlg += 1
            break
          }
        }
        if (doubleCountFlg === 0) {
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
