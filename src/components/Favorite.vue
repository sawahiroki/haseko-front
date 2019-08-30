<template>
  <div class="favorite">
    <h2>物件一覧</h2>
    <br>
    <!-- <b-button v-b-modal.modal-1>条件を絞り込む</b-button>
    <b-modal size="xl" id="modal-1" title="条件を絞り込む" title-center >
      <Conditions />
    </b-modal> -->
    <div id="properties-list" v-for="id of favoriteIdListPerPage" :key="id">
        <PropertyView :propertyId="id" :property="properties[id]" />
    </div>

    <br>
    <b-pagination
      v-model="currentPage"
      :total-rows="favoriteItemNum"
      :per-page="perPage"
      aria-controls="properties-list"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import PropertyView from './PropertyView'
import Conditions from './Conditions'

export default {
  name: 'Properties',
  components: {
    PropertyView,
    Conditions
  },
  data () {
    return {
      perPage: 2,
      currentPage: 1,
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
          favorite: false
        }
      ]
    }
  },
  computed: {
    allItemNum () {
      return this.properties.length
    },
    favoriteIdList () {
      let favoriteIdList = []
      for (let i = 0; i < this.allItemNum; i++) {
        if (this.properties[i].favorite) {
          favoriteIdList.push(i)
        }
      }
      return favoriteIdList
    },
    favoriteItemNum () {
      return this.favoriteIdList.length
    },
    favoriteItemMaxId () {
      return this.favoriteIdList[this.favoriteItemNum - 1]
    },
    favoriteIdListPerPage () {
      let favoriteIdListPerPage = []
      for (var i = 0; i < this.perPage; i++) {
        if (this.favoriteIdList[(this.currentPage - 1) * this.perPage + i] <= this.favoriteItemMaxId) {
          favoriteIdListPerPage.push(this.favoriteIdList[(this.currentPage - 1) * this.perPage + i])
        }
      }
      return favoriteIdListPerPage
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
