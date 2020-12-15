<template>
  <div id="app">
    <MenuBar />
    <ItemList />
    <MemoEditor v-if="$store.state.isShow" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from "./components/MenuBar.vue";
import ItemList from "./components/ItemList.vue";
import MemoEditor from "./components/MemoEditor.vue";

@Component({
  components: {
    MenuBar,
    ItemList,
    MemoEditor
  },
})
export default class App extends Vue {
  // 假数据
  // created():void {
  //   window.localStorage.setItem("memoData", JSON.stringify([{"id":1, "categoryId":1, "title":"vddhjjbcsseetyuioo", "content":"4uhffiikhggffiooofdds", "createTime":"1593401458"}]));
  // }
}
</script>

<style>
</style>
