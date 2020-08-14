import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// vuex store подключается также как и router, в main.js, который в src
export default new Vuex.Store({

state: { // сюда пишем данные, которые мы хотим хранить
  vuexData: { name: 'Vuex', state: true }
},
// обрати внимание на первый параметр в мутациях и экшнах, он нужен всегда и не указывается, когда мы вызываем
// экшны и мутации (в скобочках всм)
mutations: { // сюда пишем методы изменения данных
  changeData(state, object) {
    Object.assign(state.vuexData, object) // Object.assign копирует объекты (а еще со вложенными объектами во vue надо ебаться)
  }
},
actions: { // сюда пишем действия (могут вызывать мутации и быть асинхронными)
  // скорее всего, тут удобнее всего синхронизировать внешнюю БД и vuex переменные из-за асинхронности
  changeDataSlowly(context, object) {
    return new Promise((resolve) => {
      setTimeout(() => {
        context.commit('changeData', object) // мутация
        resolve('Изменение случилось!')
      }, 1000)
    })
  }
},
getters: { // сюда пишем методы, возвращающие данные
  getVuexData: (state) => { return state.vuexData }
}

})
