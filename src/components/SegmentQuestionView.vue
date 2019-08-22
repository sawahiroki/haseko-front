<template>
  <div>
    <b-card>
      <h3>{{ question.questionSentence }}</h3>
        <b-container fluid>
            <b-row>
            <b-col cols="2"><h5>年齢</h5></b-col>
            <b-col cols="2"><b-form-select v-model="ageSelected" :options="ageOptions" required></b-form-select></b-col>
            </b-row>
            <br>
            <b-row>
            <b-col cols="2"><h5>性別</h5></b-col>
            <b-col cols="1"><b-form-radio v-model="sexSelected" name="sex-radios" value="男性">男性</b-form-radio></b-col>
            <b-col cols="1"><b-form-radio v-model="sexSelected" name="sex-radios" value="女性">女性</b-form-radio></b-col>
            <b-col cols="2"><b-form-radio v-model="sexSelected" name="sex-radios" value="どちらでもない">どちらでもない</b-form-radio></b-col>
            </b-row>
            <b-row>
            <b-col cols="2"><h5>家族構成</h5></b-col>
            <b-col cols="1"><b-form-radio v-model="familySelected" name="family-radios" value="男性">独身</b-form-radio></b-col>
            <b-col cols="1"><b-form-radio v-model="familySelected" name="family-radios" value="女性">夫婦</b-form-radio></b-col>
            <b-col cols="2"><b-form-radio v-model="familySelected" name="family-radios" value="どちらでもない">夫婦子供</b-form-radio></b-col>
            </b-row>
        </b-container>
      <br>
      <b-button>次へ</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'SegmentQuestionView',
  props: {
    question: Object
  },
  methods: { },
  data () {
    return {
      questionCount: 0,
      ageSelected: null,
      ageOptions: [
        { value: '10代', text: '10代' },
        { value: '20代', text: '20代' },
        { value: '30代', text: '30代' },
        { value: '40代', text: '40代' },
        { value: '50代', text: '50代' },
        { value: '60代以上', text: '60代以上' }
      ],
      sexSelected: false,
      familySelected: false
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
