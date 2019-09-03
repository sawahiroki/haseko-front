<template>
  <div>
  <br>
    <h2>質問</h2>
    <div v-if="!segmentAnsweredFlg">
      <SegmentQuestionView :question="segmentQuestion"/>
    </div>
    <div v-else-if="!questionsAnsweredFlg">
      <QuestionView :question="question"/>
    </div>
    <div v-else>
      <br>
      <br>
      <br>
      <b-button class="resultButton" to="recommend/properties">結果を見る</b-button>
    </div>
  </div>
</template>

<script>
import SegmentQuestionView from './SegmentQuestionView'
import QuestionView from './QuestionView'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Questions',
  components: {
    SegmentQuestionView,
    QuestionView
  },
  computed: {
    ...mapGetters('recommendStore',
      {question: 'question'}
    ),
    ...mapState('recommendStore',
      {segmentQuestion: 'segmentQuestion'}
    ),
    ...mapState('recommendStore',
      {segmentAnsweredFlg: 'segmentAnsweredFlg'}
    ),
    ...mapState('recommendStore',
      {questionsAnsweredFlg: 'questionsAnsweredFlg'}
    )
  }
}
</script>
<style scoped>
.resultButton {
  margin-right : 10px;
  margin-left : 10px;
  top: 30px;
  position: relative;
  text-align: start;
}
</style>
