<template>
  <div>
    <h1>質問</h1>
    <QuestionView :question="questions[0]"/>
  </div>
</template>

<script>
import QuestionView from './QuestionView'

export default {
  name: 'Questions',
  components: {
    QuestionView
  },
  data () {
    return {
      segmentQuestion: [
        {
          segmentQuestionId: 0,
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
      ]
    }
  },
  computed: {
  }
}
</script>
