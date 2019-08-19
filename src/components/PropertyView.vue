<template>
  <div>
    <h1>物件</h1>
    <ol id="properties-list">
      <li>{{ item.propertyId }}</li>
      <li>{{ item.propertyType }}</li>
      <li>{{ item.title }}</li>
      <li>{{ item.price }}</li>
      <li>{{ item.planOfHouse }}</li>
      <li v-for="(comment, index) in item.comment" v-bind:key="index">{{ comment }}</li>
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
