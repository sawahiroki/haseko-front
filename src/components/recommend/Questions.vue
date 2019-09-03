<template>
  <div>
    <h2>質問</h2>
    <SegmentQuestionView :question="segmentQuestions[0]"/>
    <QuestionView :question="question"/>
  </div>
</template>

<script>
import SegmentQuestionView from './SegmentQuestionView'
import QuestionView from './QuestionView'
import { mapState, mapGetters, mapMutations } from 'vuex'

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
      {segmentQuestions: 'segmentQuestions'}
    )
  },
  methods: {
    ...mapMutations('recommendStore',
      {selectAnswer: 'selectAnswer'}
    )
  }
}
</script>
