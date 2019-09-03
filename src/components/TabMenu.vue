<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'questions', path: '/questions' },
        { title: 'tags', path: '/tags' },
        { title: 'keepAll', path: '/keep/all' },
        { title: 'keepAdmin', path: '/keep/admin' },
        { title: 'search', path: '/search/properties' },
        { title: 'recommend', path: '/recommend/properties' },
        { title: 'recommendModified', path: '/recommend/modified/properties' }
      ]
    }
  }
}
</script>

<style scoped>

ol {
  margin-left: auto;
  width: 600px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 40px;
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
  line-height: 40px;
}

</style>
