<template>
  <div>
    <b-card>
      <b-media>
        <b-img slot="aside" :src=property.imgSrc fluid width='300px'></b-img>
        <!-- タイトル -->
        <b-media>
        <h1 slot="aside" class="type">{{ property.propertyType }}</h1>
        <h1 class="title"> {{property.title}}</h1>
        </b-media>
        <!-- 値段 -->
        <h3 class="price">
            {{ property.price }}<font size="4px" color="#000000">万円</font>
            <font size="6px" color="#000000">/</font>
            {{ property.planOfHouse }}
            <font size="6px" color="#000000">/</font>
            {{ property.occupiedInsideArea }}<font size="4px" color="#000000">m2</font>
        </h3>
        <!-- その他の情報 -->
        <h5 class="address">{{ property.address }}</h5>
        <h5 class="propertyGenre">{{ property.propertyGenre }}</h5>
        <h5 class="farFromStation">{{ property.farFromStation }}</h5>
        <h5 class="totalUnits">{{ property.totalUnits }}</h5>
        <h5 class="level">{{ property.level }}</h5>
        <h5 class="orientation">{{ property.orientation }}</h5>
        <h5 class="builtYearMonth">{{ property.builtYearMonth }}</h5>

        <!-- タグ -->
        <!-- <b-media>
        <div v-for="(tag, index) in property.tags" v-bind:key="index">
          <div v-if="index = 5">
            <h5 class="tag" >{{ tag }}</h5>
          </div>
          <div v-else>
            <h5 class="tag" slot="aside">{{ tag }}</h5>
          </div>
        </div>
        </b-media> -->
        <b-media>
          <h5 class="tag" slot="aside" >{{ property.tags[0] }}</h5>
          <h5 class="tag" slot="aside" >{{ property.tags[1] }}</h5>
          <h5 class="tag" slot="aside" >{{ property.tags[2] }}</h5>
          <h5 class="tag" slot="aside" >{{ property.tags[3] }}</h5>
          <h5 class="tag" slot="aside" >{{ property.tags[4] }}</h5>
        </b-media>
      </b-media>
      <h5 class="propertyId">物件番号：{{ property.propertyId }}</h5>
      <h5 class="propertyNum">No. {{ propertyNum + 1 }}</h5>
      <b-media>
        <h5 class="domainSpace2" slot="aside"></h5>
        <h5 class="domain" slot="aside" v-if="property.domainSearch" >通常検索</h5>
        <h5 class="domainSpace" slot="aside" key="search" v-else></h5>
        <h5 class="domain" slot="aside" v-if="property.domainRecommend" >レコメンド</h5>
        <h5 class="domainSpace" slot="aside" key="recommend" v-else></h5>
        <h5 class="domain" slot="aside" v-if="property.domainRecommendModified" >レコメンド変更</h5>
        <h5 class="domainSpace" slot="aside" v-else></h5>
      </b-media>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'SearchPropertyView',
  props: {
    property: Object,
    propertyNum: Number,
    recommendFlg: Boolean
  },
  methods: {
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
}
.type {
  width: 160px;
  height: 34px;
  font-size: 20px;
  padding: 5px 10px;
  color: white;
  background-color: gray;
  font-family: "Arial";
}
.title {
  color: black;
  font-size: 24px;
  text-align: start;
}
.price {
  color: red;
  font-size: 30px;
  text-align: start;
  margin-left: 0px;
  margin-right: 5px;
}
.tag {
  width: 140px;
  height: 30px;
  font-size: 15px;
  padding: 7.5px;
  color: black;
  background-color: lightgray;
  font-family: "Arial";
  border-radius: 5px;
  margin-right : 10px;
  margin-left : 10px;
}
.address {
  font-size: 20px;
  position: relative;
  text-align: start;
}
.propertyGenre {
  font-size: 20px;
  position: relative;
  text-align: start;
}
.farFromStation {
  font-size: 20px;
  left: 200pt;
  top: -30px;
  position: relative;
  text-align: start;
}
.totalUnits {
  font-size: 20px;
  top: -30px;
  position: relative;
  text-align: start;
}
.level {
  font-size: 20px;
  left: 200pt;
  top: -60px;
  position: relative;
  text-align: start;
}
.orientation {
  font-size: 20px;
  top: -60px;
  position: relative;
  text-align: start;
}
.builtYearMonth {
  font-size: 20px;
  left: 200pt;
  top: -90px;
  position: relative;
  text-align: start;
}
.propertyId {
  font-size: 20px;
  left: 200pt;
  top: 30px;
  position: relative;
  text-align: start;
}
.propertyNum {
  font-size: 20px;
  left: 600pt;
  position: relative;
  text-align: start;
}
.favoriteButton {
  left: 800pt;
  top: -40px;
  position: relative;
  text-align: start;
}
.domain {
  width: 250px;
  height: 40px;
  font-size: 20px;
  padding: 7.5px;
  color: black;
  background-color: lightgray;
  font-family: "Arial";
  border-radius: 5px;
  margin-right : 10px;
  margin-left : 10px;
}
.domainSpace {
  width: 250px;
  height: 40px;
  font-size: 20px;
  padding: 7.5px;
  color: black;
  background-color: white;
  font-family: "Arial";
  border-radius: 5px;
  margin-right : 10px;
  margin-left : 10px;
}
.domainSpace2 {
  width: 150px;
  height: 40px;
  font-size: 20px;
  padding: 7.5px;
  color: black;
  background-color: white;
  font-family: "Arial";
  border-radius: 5px;
  margin-right : 10px;
  margin-left : 10px;
}
</style>>
