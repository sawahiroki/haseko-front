<template>
  <div>
    <h2>質問</h2>
    <SegmentQuestionView :question="segmentQuestions[0]"/>
    <QuestionView :question="questions[0]"/>
  </div>
</template>

<script>
import SegmentQuestionView from './SegmentQuestionView'
import QuestionView from './QuestionView'

export default {
  name: 'Questions',
  components: {
    SegmentQuestionView,
    QuestionView
  },
  data () {
    return {
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
      ]
    }
  },
  computed: {
  }
}
</script>
