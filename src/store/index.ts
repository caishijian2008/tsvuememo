import Vuex from 'vuex'
import Vue from 'vue'
import ActionHelper from './ActionHelper';

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    isShow: false,
    aHelper: new ActionHelper(),
    transMemo: null, // 传递数据的桥梁
    filterCateId: -1 // 按分类筛选
  },
  mutations: {
    showEditMemo(state: any, editMemo: any) {
      state.transMemo = editMemo;
      state.isShow = true;
    }
  }
});

export default store;