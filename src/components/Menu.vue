<template>
<div>
<b-navbar type="dark" variant="dark">
  <b-navbar-nav right>
    <b-nav-item-dropdown text="Menu">
    <b-dropdown-item to="/search">通常検索</b-dropdown-item>
    <b-dropdown-item to="/questions">レコメンド</b-dropdown-item>
    <b-dropdown-item to="/recommend/modified">レコメンド修正</b-dropdown-item>
    <b-dropdown-item to="/keep/all">Keep物件一覧(採点用)</b-dropdown-item>
    <h5>--------------------------------</h5>
    <b-dropdown-item to="/keep/admin">Keep物件一覧(管理用)</b-dropdown-item>
    <b-dropdown-item v-b-modal.initialize>初期化
        <b-modal id="initialize" title="初期化" hide-footer>
        <p class="my-4">本当に初期化しますか</p>
        <b-button variant="danger" @click="resetAll()" to="/">初期化する</b-button>
  </b-modal>
    </b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</b-navbar>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Menu',
  computed: { },
  methods: {
    ...mapMutations('searchStore',
      {searchResetAll: 'resetAll'}
    ),
    ...mapMutations('recommendStore',
      {recommendResetAll: 'resetAll'}
    ),
    ...mapMutations('recommendModifiedStore',
      {recommendModifiedResetAll: 'resetAll'}
    ),
    resetAll () {
      this.searchResetAll()
      this.recommendResetAll()
      this.recommendModifiedResetAll()
    }
  }
}
</script>

<style scoped>
</style>
