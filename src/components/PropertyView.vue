<template>
  <div>
    <ol id="properties-list">
      <li>{{ item.propertyId }}</li>
      <li>{{ item.propertyType }}</li>
      <li>{{ item.title }}</li>
      <li>{{ item.price }}</li>
      <li>{{ item.planOfHouse }}</li>
      <li v-for="(comment, index) in item.comment" v-bind:key="index">{{ comment }}</li>
      <li v-for="(point, index) in item.point" v-bind:key="index">{{ point }}</li>
      <li v-for="(comment, index) in item.comment" v-bind:key="index">{{ comment }}</li>
      <br/>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'PropertyView',
  props: {
    item: Object
  }
}
</script>
