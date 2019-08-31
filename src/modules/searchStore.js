export const searchStore = {
  namespaced: true,
  state: {
    vueCount: 0,
    conditions: {
      minPrice: 0,
      maxPrice: 0,
      farFromStation: '',
      planOfHouse: [],
      minOccupiedArea: 0,
      maxOccupiedArea: 0,
      builtYearMonth: '',
      freeword: ''
    },
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
        keep: true
      },
      {
        propertyId: 'HRA18402',
        imgSrc: 'https://img.miraie-net.com/?v=wKpznCoSVk81LIYax3FD2pIEEG5ZHoxP6ktX5RNlVMHpDyStIZGJ5e7uWgkLBzEM87p-eRvCL2LHJ_lQdxvmt45bHSOGsWph0c0DZyKxx3LYWeWwwPPg1HjqgiXEaVlt',
        propertyType: '中古分譲',
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
        keep: true
      },
      {
        propertyId: 'HRA18410',
        imgSrc: 'https://img.miraie-net.com/?v=wKpznCoSVk81LIYax3FD2pIEEG5ZHoxP6ktX5RNlVMHpDyStIZGJ5e7uWgkLBzEM87p-eRvCL2LHJ_lQdxvmt45bHSOGsWph0c0DZyKxx3LYWeWwwPPg1HjqgiXEaVlt',
        propertyType: '賃貸',
        title: '賃貸物件A',
        price: 11.5,
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
        keep: true
      },
      {
        propertyId: 'HRA18410',
        imgSrc: 'https://img.miraie-net.com/?v=wKpznCoSVk81LIYax3FD2pIEEG5ZHoxP6ktX5RNlVMHpDyStIZGJ5e7uWgkLBzEM87p-eRvCL2LHJ_lQdxvmt45bHSOGsWph0c0DZyKxx3LYWeWwwPPg1HjqgiXEaVlt',
        propertyType: '賃貸',
        title: '賃貸物件A',
        price: 6.5,
        planOfHouse: '1LDK',
        occupiedInsideArea: 25.66,
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
        keep: true
      }
    ]
  },
  getters: {
    keepProperties (state) {
      let keepProperties = []
      for (let property of state.properties) {
        if (property.keep) {
          keepProperties.push(property)
        }
      }
      return keepProperties
    },
    keepCount (state) {
      let keepCount = 0
      for (let property of state.properties) {
        if (property.keep) {
          keepCount += 1
        }
      }
      return keepCount
    }
  },
  mutations: {
    addKeep (state, { num }) {
      state.properties[num].keep = true
    },
    deleteKeep (state, { num }) {
      state.properties[num].keep = false
    },
    incrementVueCount (state, { perPage }) {
      /*  1ページあたり何件かによってページ遷移するたびに見た物件数をインクリメントする  */
      state.vueCount += perPage
    },
    resetAll (state) {
      state.vueCount = 0
      state.properties = []
    },
    changeConditions (state, payload) {
      for (let condition in payload.conditions) {
        state.conditions[condition] = payload.conditions[condition]
      }
    }
  },
  actions: {
    searchProperties () { }
  }
}
