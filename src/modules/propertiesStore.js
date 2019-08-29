export const propertiesStore = {
  namespaced: true,
  state: {
    properties: [
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
        favorite: true
      },
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
    favoriteProperties: []
  },
  getters: {
    getAllProperties: state => {
      return state.properties
    },
    getFavoriteProperties: state => {
      return state.favoriteProperties
    }
  },
  mutations: {
    pushFavorite (state, payload) {
      let tmpBool = state.properties[payload.id].favorite
      state.properties[payload.id].favorite = !tmpBool
    }
  },
  actions: {
    addAsync ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('add', payload.amount)
          resolve()
        }, 1000)
      })
    },
    subAsync ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('sub', payload.amount)
          resolve()
        }, 1000)
      })
    }
  }
}
