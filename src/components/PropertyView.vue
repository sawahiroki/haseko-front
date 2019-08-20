<template>
  <div>
    <b-card>
      <b-media>
        <b-img slot="aside" :src=item.imgSrc fluid width='300px'></b-img>
        <!-- タイトル -->
        <h1 :style=typeStyleObject>{{ item.propertyType }}</h1>
        <h1 :style=titleStyleObject> {{item.title}}</h1>
        <!-- 値段 -->
        <h3 :style=priceStyleObject>
            {{ item.price }}<font size="4px" color="#000000">万円</font>
            <font size="6px" color="#000000">/</font>
            {{ item.planOfHouse }}
        </h3>
        <!-- コメント -->
        <ul>
        <li :style=commentStyleObject v-for="(comment, index) in item.comment" v-bind:key="index">{{ comment }}</li>
        </ul>
      </b-media>
      <br>
      <b-media>
      <!-- ポイント -->
      <p slot="aside" :style=pointStyleObject>POINT</p>
        <ul>
        <li :style=commentStyleObject v-for="(point, index) in item.point" v-bind:key="index">{{ point }}</li>
        </ul>
      </b-media>
      <b-media>
        <h1 slot="aside" :style=footerStyleObject>占有面積</h1>
        <h1 slot="aside" :style=footerStyleObject2>{{ item.occupiedArea }}</h1>
        <h1 slot="aside" :style=footerStyleObject>築年数</h1>
        <h1 slot="aside" :style=footerStyleObject2>{{ item.builtYearMonth }}</h1>
        <b-button size="sm" href="#">お気に入り</b-button>
      </b-media>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PropertyView',
  props: {
    item: Object
  },
  data () {
    return {
      typeStyleObject: {
        width: '160px',
        height: '34px',
        fontSize: '20px',
        padding: '5px 10px',
        color: 'white',
        backgroundColor: 'gray',
        fontFamily: '"Arial"'
      },
      titleStyleObject: {
        color: 'black',
        fontSize: '24px',
        textAlign: 'start'
      },
      priceStyleObject: {
        color: 'red',
        fontSize: '30px',
        textAlign: 'start',
        marginLeft: '0px',
        marginRight: '5px'
      },
      commentStyleObject: {
        textAlign: 'start',
        fontFamily: '"Arial"'
      },
      pointStyleObject: {
        width: '100px',
        height: '34px',
        fontSize: '24px',
        color: 'white',
        backgroundColor: 'orange',
        fontFamily: '"Arial"'
      },
      footerStyleObject: {
        width: '160px',
        height: '34px',
        fontSize: '20px',
        padding: '5px 10px',
        color: 'white',
        backgroundColor: 'gray',
        fontFamily: '"Arial"'
      },
      footerStyleObject2: {
        width: '200px',
        height: '34px',
        fontSize: '20px',
        padding: '5px 10px',
        color: 'black',
        backgroundColor: 'lightgray',
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
