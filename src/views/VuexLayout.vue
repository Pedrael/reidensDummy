<template lang="html">
  <div class="layout">
    <div class="wrap">
      <h2 v-for="field in vuexObject">{{field}}</h2>
    </div>
    <div class="wrap">
      <input type="text" v-model="bufferedObject.name">
      <input type="text" v-model="bufferedObject.state">
      <button type="button" @click="mutationCall">change data</button>
    </div>
    <div class="wrap">
      <input type="text" v-model="bufferedObject.name">
      <input type="text" v-model="bufferedObject.state">
      <button type="button" @click="actionCall">change data slowly</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuexLayout',
  data() {
    return {
      bufferedObject: {
        name: '',
        state: ''
      }
    }
  },
  /* короче, в чем прикол: к хранилищу мы обращаемся через $store переменную,
  потому что мы ее запихнули во внутрь VUE объекта (см main.js), и следовательно,
  мы можем вызывать его отовсюду в рамках проекта
  */
  computed: {
    vuexObject() {
      return this.$store.getters.getVuexData // получаем через геттер данные
    }
  },
  methods: {
    actionCall: function() {
      // так вызывается экшн из vuex хранилища
      this.$store.dispatch('changeDataSlowly', this.bufferedObject).then((resolve) => {
        console.group('Что возвращает промис во vuex action')
        console.log(resolve)
        console.groupEnd()
      })
    },
    mutationCall: function() {
      // так вызывается мутация из vuex хранилища
      this.$store.commit('changeData', this.bufferedObject)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: rgb(202, 139, 241);
}
</style>
