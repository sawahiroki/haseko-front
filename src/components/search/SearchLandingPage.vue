<template>
  <div class="conditions">
  <b-form @submit="onSubmit()" >
    <!-- 値段 -->
    <div class="priceSelector">
      <b-container fluid>
      <b-row class="text-center">
      <b-col cols="2"><h5>価格</h5></b-col>
      <b-col cols="4"><b-form-select v-model="minPrice" :options="minPriceOptions" required></b-form-select></b-col>
      <b-col cols="1"><h4>〜</h4></b-col>
      <b-col cols="4"><b-form-select v-model="maxPrice" :options="maxPriceOptions" required></b-form-select></b-col>
      </b-row>
      </b-container>
    </div>

    <br>
    <!-- 駅徒歩何分 -->
    <div class="farFromStationSelector">
      <b-container fluid>
      <b-row class="row1">
      <b-col cols="2"><h5>徒歩</h5></b-col>
      <b-col cols="2"><b-form-radio v-model="farFromStation" name="far-from-station-radios" value=false>未設定</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="farFromStation" name="far-from-station-radios" value="1分以内">1分以内</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="farFromStation" name="far-from-station-radios" value="3分以内">3分以内</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="farFromStation" name="far-from-station-radios" value="5分以内">5分以内</b-form-radio></b-col>
      </b-row>
      <b-row class="row2">
      <b-col cols="2"></b-col>
      <b-col cols="2"><b-form-radio v-model="farFromStation" name="far-from-station-radios" value="10分以内">10分以内</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="farFromStation" name="far-from-station-radios" value="15分以内">15分以内</b-form-radio></b-col>
      <b-col cols="2"><b-form-radio v-model="farFromStation" name="far-from-station-radios" value="20分以内">20分以内</b-form-radio></b-col>
      <b-col cols="2"></b-col>
      </b-row>
      </b-container>
    </div>
    <br>

    <!-- 間取り -->
    <div class="planOfHouseSelector">
      <b-container fluid>
      <b-row class="row1">
        <b-col cols="2"><h5 >間取り</h5></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value=false>未設定</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="ワンルーム">ワンルーム</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="1K">1K</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="1DK">1DK</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="2K">2K</b-form-radio></b-col>
      </b-row>
      <b-row class="row2">
        <b-col cols="2"></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="2DK">2DK</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="2LDK">2LDK</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="3K">3K</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="3DK">3DK</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="3LDK">3LDK</b-form-radio></b-col>
      </b-row>
      <b-row class="row3">
        <b-col cols="2"></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="4K">4K</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="4DK">4DK</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="4LDK">4LDK</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="planOfHouse" name="floor-plan-radios" value="4LDK以上">4LDK以上</b-form-radio></b-col>
        <b-col cols="2"></b-col>
      </b-row>
      </b-container>
    </div>
    <br>

    <!-- 占有面積 -->
    <div class="occupiedAreaSelector">
      <b-container fluid>
      <b-row class="text-center">
      <b-col cols="2"><h5>占有面積</h5></b-col>
      <b-col cols="4"><b-form-select v-model="minOccupiedArea" :options="minOccupiedOptions" required></b-form-select></b-col>
      <b-col cols="1"><h4>〜</h4></b-col>
      <b-col cols="4"><b-form-select v-model="maxOccupiedArea" :options="maxOccupiedOptions" required></b-form-select></b-col>
      </b-row>
      </b-container>
    </div>
    <br>

    <!-- 築年数 -->
    <div class="builtYearMonthSelector">
      <b-container fluid>
      <b-row class="row1">
        <b-col cols="2"><h5>築年月</h5></b-col>
        <b-col cols="2"><b-form-radio v-model="builtYearMonth" name="built-year-month-radios" value="false">未設定</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="builtYearMonth" name="built-year-month-radios" value="新築">新築</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="builtYearMonth" name="built-year-month-radios" value="1年以内">1年以内</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="builtYearMonth" name="built-year-month-radios" value="2年以内">2年以内</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="builtYearMonth" name="built-year-month-radios" value="3年以内">3年以内</b-form-radio></b-col>
      </b-row>
      <b-row class="row2">
        <b-col cols="2"></b-col>
        <b-col cols="2"><b-form-radio v-model="builtYearMonth" name="built-year-month-radios" value="4年以内">4年以内</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="builtYearMonth" name="built-year-month-radios" value="5年以内">5年以内</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="builtYearMonth" name="built-year-month-radios" value="10年以内">10年以内</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="builtYearMonth" name="built-year-month-radios" value="15年以内">15年以内</b-form-radio></b-col>
        <b-col cols="2"><b-form-radio v-model="builtYearMonth" name="built-year-month-radios" value="20年以内">20年以内</b-form-radio></b-col>
      </b-row>
      </b-container>
    </div>
    <br>

    <!-- フリーワード -->
    <div class="freeWordSelector">
      <b-container fluid>
      <b-row class="text-center">
      <b-col cols="2"><h5>フリーワード</h5></b-col>
      <b-col cols="8"><b-form-input v-model="freeword" placeholder="freeword"></b-form-input></b-col>
      </b-row>
      </b-container>
    </div>
    <br>

    <!-- 検索ボタン -->
    <b-container fluid>
      <b-row class="text-center">
      <b-col cols="5"></b-col>
      <b-col cols="2"><b-button type="submit" variant="primary" to="/search/properties">検索する</b-button></b-col>
      </b-row>
    </b-container>
  </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Conditions',
  data () {
    return {
      minPriceOptions: [
        { value: null, text: '下限なし', disabled: true },
        { value: 0, text: '0' },
        { value: 10, text: '10' },
        { value: 100, text: '100' },
        { value: 1000, text: '1000' }
      ],
      maxPriceOptions: [
        { value: null, text: '上限なし' },
        { value: 100, text: '100' },
        { value: 1000, text: '1000' },
        { value: 10000, text: '10000' },
        { value: 100000, text: '100000' }
      ],
      minOccupiedOptions: [
        { value: null, text: '下限なし', disabled: true },
        { value: 0, text: '0' },
        { value: 10, text: '10' },
        { value: 100, text: '100' },
        { value: 1000, text: '1000' }
      ],
      maxOccupiedOptions: [
        { value: null, text: '上限なし' },
        { value: 100, text: '100' },
        { value: 1000, text: '1000' },
        { value: 10000, text: '10000' },
        { value: 100000, text: '100000' }
      ]
    }
  },
  computed: {
    ...mapState('searchStore',
      {conditions: 'conditions'}
    ),
    minPrice: {
      get: function () {
        return this.conditions.minPrice
      },
      set: function (minPrice) {
        this.conditions.minPrice = minPrice
      }
    },
    maxPrice: {
      get: function () {
        return this.conditions.maxPrice
      },
      set: function (maxPrice) {
        this.conditions.maxPrice = maxPrice
      }
    },
    farFromStation: {
      get: function () {
        return this.conditions.farFromStation
      },
      set: function (farFromStation) {
        this.conditions.farFromStation = farFromStation
      }
    },
    planOfHouse: {
      get: function () {
        return this.conditions.planOfHouse
      },
      set: function (planOfHouse) {
        this.conditions.planOfHouse = planOfHouse
      }
    },
    minOccupiedArea: {
      get: function () {
        return this.conditions.minOccupiedArea
      },
      set: function (minOccupiedArea) {
        this.conditions.minOccupiedArea = minOccupiedArea
      }
    },
    maxOccupiedArea: {
      get: function () {
        return this.conditions.maxOccupiedArea
      },
      set: function (maxOccupiedArea) {
        this.conditions.maxOccupiedArea = maxOccupiedArea
      }
    },
    builtYearMonth: {
      get: function () {
        return this.conditions.builtYearMonth
      },
      set: function (builtYearMonth) {
        this.conditions.builtYearMonth = builtYearMonth
      }
    },
    freeword: {
      get: function () {
        return this.conditions.freeword
      },
      set: function (freeword) {
        this.conditions.freeword = freeword
      }
    }
  },
  methods: {
    ...mapMutations('searchStore',
      {setConditions: 'setConditions'}
    ),
    ...mapMutations('searchStore',
      {resetSavedCurrentPage: 'resetSavedCurrentPage'}
    ),
    onSubmit () {
      this.setConditions(this.conditions)
      this.resetSavedCurrentPage()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
