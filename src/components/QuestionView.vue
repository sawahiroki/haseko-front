<template>
  <div>
    <b-card>
      <h3>{{ question.questionSentence }}</h3>
      <br>
      <b-container fluid>
      <b-button-group size="sm">
      <div v-for="(ans, idx) in answers" :key="idx" >
        <b-button v-if="ans.state" variant="primary" v-on:click="onClick(idx)">{{ ans.caption }}</b-button>
        <b-button v-else variant="outline-primary" v-on:click="onClick(idx)">{{ ans.caption }}</b-button>
      </div>
      </b-button-group>

      <br>
      <br>
      <b-button>回答する</b-button>
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
export default {
  name: 'QuestionView',
  props: {
    question: Object
  },
  methods: {
    onClick (idx) {
      for (let i = 0; i < this.answers.length; i++) {
        if (idx !== i) {
          this.answers[i].state = false
        } else {
          this.answers[i].state = true
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
      ],
      typeStyleObject: {
        width: '160px',
        height: '34px',
        fontSize: '20px',
        padding: '5px 10px',
        color: 'white',
        backgroundColor: 'gray',
        fontFamily: '"Arial"'
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
}
</style>>
