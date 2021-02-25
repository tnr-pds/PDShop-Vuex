import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    suit1:0,
    suit2:0,
    suit3:0,
    suit4:0,
    suit5:0,
    suit6:0,
    price:0,
    // todos: [
    //   { id: 1, text: 'A', done: true },
    //   { id: 2, text: 'B', done: false },
    //   { id: 3, text: 'C', done: true }
    // ]
  },
  getters: {
    //  1. คำนวนสมการ
    // doubleCounter: state => {
    //   return state.counter +=  2 * 3 * 5
    // },
    //  2. กรองข้อมูลเฉพาะงานที่เสร็จแล้ว done=true
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // },
    //  3.  นับจำนวนงานที่เสร็จแล้ว (ต่อจากข้อ 2)
    // doneTodosCount: (state, getters) => {
    //   return getters.doneTodos.length
    // },
    //  ค้นหา object งานจากค่า id
    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // },

    showCount:state=>state.counter,
    suitCount1:state=>state.suit1,
    suitCount2:state=>state.suit2,
    suitCount3:state=>state.suit3,
    suitCount4:state=>state.suit4,
    suitCount5:state=>state.suit5,
    suitCount6:state=>state.suit6,
    showPrice:state=>state.price,
  },
  mutations: {
    increment1: (state) => {
      state.counter += 1
      state.suit1 += 1
      state.price += 59
    },
    increment2: (state) => {
      state.counter += 1
      state.suit2 += 1
      state.price += 99
    },
    increment3: (state) => {
      state.counter += 1
      state.suit3 += 1
      state.price += 49
    },
    increment4: (state) => {
      state.counter += 1
      state.suit4 += 1
      state.price += 95
    },
    increment5: (state) => {
      state.counter += 1
      state.suit5 += 1
      state.price += 31
    },
    increment6: (state) => {
      state.counter += 1
      state.suit6 += 1
      state.price += 82
    },
  },
  actions: {
  },
  modules: {
  }
})