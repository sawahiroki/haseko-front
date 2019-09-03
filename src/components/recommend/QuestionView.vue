<template>
  <div>
    <b-card>
      <h3>{{ question.questionSentence }}</h3>
      <br>
      <b-container fluid>
      <b-button-group size="sm">
      <div v-for="(ans, idx) in answers" :key="idx" >
        <b-button class="button" v-if="ans.state" variant="primary" v-on:click="onClick(idx)">{{ ans.caption }}</b-button>
        <b-button class="button" v-else variant="outline-primary" v-on:click="onClick(idx)">{{ ans.caption }}</b-button>
      </div>
      </b-button-group>

      <br>
      <br>
      <b-button @click="submit()">回答する</b-button>
      <!-- <br>
      <b-button-group size="sm">
      <b-button
        v-for="(ans, idx) in answers"
        :key="idx"
        :pressed.sync="ans.state"
        variant="outline-primary"
      >
        {{ ans.caption }}
      </b-button>
      </b-button-group> -->
      </b-container>
    </b-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'QuestionView',
  props: {
    question: Object
  },
  methods: {
    ...mapMutations('recommendStore',
      {selectAnswer: 'selectAnswer'}
    ),
    ...mapMutations('recommendStore',
      {decideNextQuestion: 'decideNextQuestion'}
    ),
    onClick (idx) {
      for (let i = 0; i < this.answers.length; i++) {
        if (idx !== i) {
          this.answers[i].state = false
        } else {
          this.answers[i].state = true
        }
      }
    },
    resetAnswers () {
      for (let i = 0; i < this.answers.length; i++) {
        this.answers[i].state = false
      }
    },
    submit () {
      for (let [ansNum, answer] of this.answers.entries()) {
        if (answer.state) {
          /* はい:2、どちらかといえば「はい」:1、どちらでも無い:0、どちらかといえば「いいえ」:-1、いいえ:-2 を返す  */
          let ansValue = 2 - ansNum
          this.selectAnswer({questionId: this.question.questionId, answer: ansValue})
          this.decideNextQuestion()
          this.resetAnswers()
          break
        }
      }
    },
    questionCountIncrement () {
      this.questionCount++
      return this.questionCount
    }
  },
  data () {
    return {
      questionCount: 0,
      answers: [
        { caption: 'はい', state: false },
        { caption: 'どちらかといえば「はい」', state: false },
        { caption: 'どちらともいえない', state: false },
        { caption: 'どちらかといえば「いいえ」', state: false },
        { caption: 'いいえ', state: false }
      ]
    }
  }
}
</script>

<style scoped>
.button {
  margin-right : 10px;
  margin-left : 10px;
}
</style>>
