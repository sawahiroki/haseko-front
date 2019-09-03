export const recommendStore = {
  namespaced: true,
  state: {
    vueCount: 0,
    nextQuestionId: 0,
    segmentQuestions: [
      {
        segmentQuestionId: 0,
        questionSentence: 'あなたについてお伺いします。'
      }
    ],
    questions: [
      {
        questionId: 0,
        questionSentence: '実質の広さよりも、開放感の方が重要ですか？',
        answerList: [
          ['はい', false],
          ['どちらかといえば「はい」', false],
          ['どちらともいえない', false],
          ['どちらかといえば「いいえ」', false],
          ['いいえ', false]
        ]
      },
      {
        questionId: 1,
        questionSentence: '帰宅が深夜になることが多い',
        answerList: [
          ['はい', false],
          ['どちらかといえば「はい」', false],
          ['どちらともいえない', false],
          ['どちらかといえば「いいえ」', false],
          ['いいえ', false]
        ]
      },
      {
        questionId: 2,
        questionSentence: '休日の日中は外にいるよりも、家にいることが多い',
        answerList: [
          ['はい', false],
          ['どちらかといえば「はい」', false],
          ['どちらともいえない', false],
          ['どちらかといえば「いいえ」', false],
          ['いいえ', false]
        ]
      },
      {
        questionId: 3,
        questionSentence: '知人を招いてホームパーティーしたい',
        answerList: [
          ['はい', false],
          ['どちらかといえば「はい」', false],
          ['どちらともいえない', false],
          ['どちらかといえば「いいえ」', false],
          ['いいえ', false]
        ]
      }
    ],
    answers: [
      {
        question_id: 0,
        answer: 0
      },
      {
        question_id: 1,
        answer: -1
      },
      {
        question_id: 2,
        answer: 2
      },
      {
        question_id: 3,
        answer: 1
      }
    ],
    tags: {
      tag1: -2,
      tag2: 2,
      tag3: 1
    },
    properties: [
      {
        propertyId: 'HRA18401',
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
        keep: false
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
        keep: false
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
        keep: false
      },
      {
        propertyId: 'HRA18411',
        imgSrc: 'https://img.miraie-net.com/?v=wKpznCoSVk81LIYax3FD2pIEEG5ZHoxP6ktX5RNlVMHpDyStIZGJ5e7uWgkLBzEM87p-eRvCL2LHJ_lQdxvmt45bHSOGsWph0c0DZyKxx3LYWeWwwPPg1HjqgiXEaVlt',
        propertyType: '賃貸',
        title: '賃貸物件B',
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
    question (state) {
      for (let question of state.questions) {
        if (question.questionId === state.nextQuestionId) {
          return question
        }
      }
    },
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
    selectAnswer (state, { questionId, answer }) {
      for (let [num, answer] of state.answers.entries()) {
        if (answer.questionId === questionId) {
          if (answer === 'はい') {
            state.answers[num]['answer'] = 2
          } else if (answer === 'どちらかといえば「はい」') {
            state.answers[num]['answer'] = 1
          } else if (answer === 'どちらともいえない') {
            state.answers[num]['answer'] = 0
          } else if (answer === 'どちらかといえば「いいえ」') {
            state.answers[num]['answer'] = -1
          } else {
            state.answers[num]['answer'] = -2
          }
          break
        }
      }
    },
    decideNextQuestion (state) {
      state.nextQuestionId = 1
    },
    addKeep (state, { propertyId }) {
      for (let [num, property] of state.properties.entries()) {
        if (property.propertyId === propertyId) {
          state.properties[num].keep = true
          break
        }
      }
    },
    deleteKeep (state, { propertyId }) {
      for (let [num, property] of state.properties.entries()) {
        if (property.propertyId === propertyId) {
          state.properties[num].keep = false
          break
        }
      }
    },
    incrementVueCount (state, { perPage }) {
    /*  1ページあたり何件かによってページ遷移するたびに見た物件数をインクリメントする  */
      state.vueCount += perPage
    },
    resetAll (state) {
      state.vueCount = 0
      state.properties = []
      state.tags = {}
      state.questions = []
      state.answers = []
    }
  },
  actions: {
    getQuestionsAndAnswers () { }
  }
}
