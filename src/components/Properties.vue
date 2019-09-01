<template>
  <div>
    <h2>物件一覧</h2>
    <br>

    <!-- <PropertyView id="properties-list" :item="items[i]" v-for="i of idList" :key="i" /> -->
    <PropertyView id="properties-list" :propertyId="i" :property="properties[i]" v-for="i of idList" :key="i" />
    <br>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="properties-list"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import PropertyView from './PropertyView'
import { mapGetters } from 'vuex'

export default {
  name: 'Properties',
  components: {
    PropertyView
  },
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        {
          propertyId: 0,
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCFA9ONW498v3SFqV7f9dxS55BxS9pkvZJL7YuQbjajNT43jz',
          propertyType: '中古マンション',
          title: 'モア・クレスト荒川公園シエール館',
          price: 4480,
          planOfHouse: '4LDK',
          comment: {
            l1: 'JR常磐線「三河島駅」徒歩7分'
          },
          point: [
            '１４階建８階部分・南東角部屋',
            '4LDK・81.95m^2・24時間365・・・'
          ],
          occupiedArea: '81.95m^2',
          builtYearMonth: '1999年9月',
          favorite: false
        },
        {
          propertyId: 1,
          imgSrc: 'https://d1f5hsy4d47upe.cloudfront.net/28/2899126b4f391a47ae6888ab0db8f217_t.jpeg',
          propertyType: '戸建て',
          title: '東京都江東区千石3丁目',
          price: 4480,
          planOfHouse: '4LDK',
          comment: [
            'JR常磐線「三河島駅」徒歩7分'
          ],
          point: [
            '１４階建８階部分・南東角部屋'
          ],
          occupiedArea: '81.95m^2',
          builtYearMonth: '1999年9月',
          favorite: false
        },
        {
          propertyId: 1,
          imgSrc: 'https://d1f5hsy4d47upe.cloudfront.net/28/2899126b4f391a47ae6888ab0db8f217_t.jpeg',
          propertyType: '戸建て',
          title: '東京都江東区千石3丁目',
          price: 4480,
          planOfHouse: '4LDK',
          comment: [
            'JR常磐線「三河島駅」徒歩7分'
          ],
          point: [
            '１４階建８階部分・南東角部屋'
          ],
          occupiedArea: '81.95m^2',
          builtYearMonth: '1999年9月',
          favorite: true
        }
      ],
      properties: [
        {
          propertyId: 'HRA18402',
          imgSrc: 'https://img.miraie-net.com/?v=wKpznCoSVk81LIYax3FD2pIEEG5ZHoxP6ktX5RNlVMHpDyStIZGJ5e7uWgkLBzEM87p-eRvCL2LHJ_lQdxvmt45bHSOGsWph0c0DZyKxx3LYWeWwwPPg1HjqgiXEaVlt',
          propertyType: '新着分譲',
          title: 'モア・クレスト荒川公園シエール館',
          price: 4480,
          planOfHouse: '4LDK',
          occupiedInsideArea: 65.66,
          address: '東京都新宿区大久保３丁目２－７',
          propertyGenre: 'マンション',
          farFromStation: '駅徒歩7分',
          totalUnits: '総戸数370戸',
          level: '5階 / 12階建て',
          orientation: '南東向き',
          builtYearMonth: '1999年9月',
          tags: [
            'タグ',
            '花火が見える',
            'システムキッチン',
            '駅近い',
            'タグ',
            'タグタグ',
            'タグタグタグ',
            'タグ',
            'タグ1',
            'タグ2',
            'タグ3',
            'タグ4'
          ],
          favorite: true
        },
        {
          propertyId: 'HRA18402',
          imgSrc: 'https://img.miraie-net.com/?v=wKpznCoSVk81LIYax3FD2pIEEG5ZHoxP6ktX5RNlVMHpDyStIZGJ5e7uWgkLBzEM87p-eRvCL2LHJ_lQdxvmt45bHSOGsWph0c0DZyKxx3LYWeWwwPPg1HjqgiXEaVlt',
          propertyType: '新着分譲',
          title: 'モア・クレスト荒川公園シエール館',
          price: 4480,
          planOfHouse: '4LDK',
          occupiedInsideArea: 65.66,
          address: '東京都新宿区大久保３丁目２－７',
          propertyGenre: 'マンション',
          farFromStation: '駅徒歩7分',
          totalUnits: '370',
          level: '5階 / 12階建て',
          orientation: '南東向き',
          builtYearMonth: '1999年9月',
          tags: [
            'タグ',
            '花火が見える',
            'システムキッチン',
            '駅近い',
            'タグ',
            'タグタグ',
            'タグタグタグ',
            'タグ',
            'タグ1',
            'タグ2',
            'タグ3',
            'タグ4'
          ],
          favorite: true
        },
        {
          propertyId: 'HRA18402',
          imgSrc: 'https://img.miraie-net.com/?v=wKpznCoSVk81LIYax3FD2pIEEG5ZHoxP6ktX5RNlVMHpDyStIZGJ5e7uWgkLBzEM87p-eRvCL2LHJ_lQdxvmt45bHSOGsWph0c0DZyKxx3LYWeWwwPPg1HjqgiXEaVlt',
          propertyType: '新着分譲',
          title: 'モア・クレスト荒川公園シエール館',
          price: 4480,
          planOfHouse: '4LDK',
          occupiedInsideArea: 65.66,
          address: '東京都新宿区大久保３丁目２－７',
          propertyGenre: 'マンション',
          farFromStation: '駅徒歩7分',
          totalUnits: '370',
          level: '5階 / 12階建て',
          orientation: '南東向き',
          builtYearMonth: '1999年9月',
          tags: [
            'タグ',
            '花火が見える',
            'システムキッチン',
            '駅近い',
            'タグ',
            'タグタグ',
            'タグタグタグ',
            'タグ',
            'タグ1',
            'タグ2',
            'タグ3',
            'タグ4'
          ],
          favorite: true
        }
      ]
    }
  },
  computed: {
    ...mapGetters([ ]),
    rows () {
      return this.items.length
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
