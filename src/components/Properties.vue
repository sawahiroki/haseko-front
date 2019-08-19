<template>
  <div>
    <h1>物件リスト</h1>

  </div>
</template>

<script>
export default {
  name: 'Properties',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'properties', path: '/properties' },
        { title: 'conditions', path: '/conditions' },
        { title: 'outputs', path: '/outputs' }
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
