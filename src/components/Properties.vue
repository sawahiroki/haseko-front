<template>
  <div>
    <h1>物件リスト</h1>
    <ul id="properties-list">
      <!--<PropertyView v-bind:item="items[0]" v-bind:key="items.propertyId" />-->
      <PropertyView v-bind:item="item" v-for="item in items" v-bind:key="item.propertyId" />
    </ul>
  </div>
</template>

<script>
import PropertyView from './PropertyView'

export default {
  name: 'Properties',
  components: {
    PropertyView
  },
  data () {
    return {
      items: [
        {
          propertyId: 0,
          propertyType: '中古マンション',
          title: 'モア・クレスト荒川公園シエール館',
          price: 4480,
          planOfHouse: '4LDK',
          comment: {
            l1: 'JR常磐線「三河島駅」徒歩7分'
          },
          point: [
            '１４階建８階部分・南東角部屋',
            '4LDK・81.95m^2・24時間365・・・'
          ],
          occupiedArea: '81.95m^2',
          builtYearMonth: '1999年9月',
          keep: false
        },
        {
          propertyId: 1,
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
          keep: false
        }
      ]
    }
  }
}
</script>

<style scoped>

ol {
  margin-left: auto;
  width: 480px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left:5px;
  margin-right:5px;
  font-size: 16px;
  background-color: gray;
  border-radius: 14px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

</style>
