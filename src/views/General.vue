<template lang="html">
  <div class="layout">

    <div class="item1 item">
      <h2>v-for example</h2>
      <p v-for="(item, index) in forVariable">{{item.name}} | {{item.age}} | {{index}}</p>
    </div>

    <div class="item2 item">
      <h2>computed example</h2>
      <p v-for="(item, index) in computedArray">{{item}} | {{index}}</p>
    </div>

    <div class="item3 item">
      <h2>v-model example</h2>
      <input type="text" name="" value="" v-model="model">
      <p>{{model}}</p>
      <p>{{watch}}</p>
    </div>

    <div class="item1 item" v-bind:class="{ activeClass: isActive}">
      <h2>change class example</h2>
      <button @click="isActive = !isActive">Click me!</button>
      <p v-if="isActive">ты пидор</p> <!-- условная отрисовка -->
    </div>

    <div class="item2 item">
      <h2>axios usage example</h2>
      <img :src="axiosData" alt="random fox image">
    </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'General',
  data() {
    return {
      forVariable: [
        { name: 'Nigga', age: '15' },
        { name: 'Nigger', age: '27' },
        { name: 'Niggest', age: '666' }
      ],
      model: 'Input me', // поле, за которым следим
      watch: '', // сюда пишем предыдущее перед изменением поля model
      isActive: false, // если true, то в change class example будет еще activeClass
      axiosData: undefined // сюда axios будет возвращать данные
    }
  },
  computed: {
    computedArray: function() { // посчитали поле, используя поле из даты
      return this.forVariable.map((item) => { return item.age * 10 })
    }
  },
  watch: {
    model: function(newString, oldString) {
      // метод, который выполняется при изменении поля model
      this.watch = oldString // значение перед изменением
      // newString такой же как model
      localStorage.model = newString // запись в локал сторэдж каждый раз, как меняется model

    }
  },
  mounted() { // см цикл жизни вью объекта
    axios
      .get('https://randomfox.ca/floof/') // axios возвращает Promise с данными (тут это json object)
      .then((resolve) => {
        this.axiosData = resolve.data.image
        console.group('Что возвращает аксиос')
        console.log('аксиос возвращает json объект, который надо распарсить:')
        console.log(resolve)
        console.groupEnd()
      }) // в котором мы реализуем then или ловим ошибки через catch
      .catch((reject) => {
        this.axiosData = ''
        console.log('axios error', reject)
      })

      /*
      еще у аксиоса есть метод post, но показать я его не могу, тошо для этого нужен наш сервер
      этот метод нужен чтобы запихивать данные с фронта на бэк
      еще обрати внимание на json объект, там есть поле status, оно есть всегда и важное тем,
      что сервер через него говорит с нами (шутка про 404 сюда же)
      */

      if (localStorage.model) {
        this.model = localStorage.model // запись в переменную из local storage
      }
  }
}
</script>

<style lang="scss" scoped>
.item {
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 120px;

  img {
    width: 300px;
    height: auto;
  }
}
.item1 {
  background: rgb(249, 158, 111);
}
.item2 {
  background: rgb(247, 90, 128);
}
.item3 {
  background: rgb(139, 133, 245);
}
.activeClass {
  background: linear-gradient(90deg, rgba(255,23,23,1) 0%, rgba(255,151,20,1) 15%, rgba(255,248,16,1) 33%, rgba(12,255,44,1) 49%, rgba(7,255,252,1) 66%, rgba(28,3,255,1) 83%, rgba(252,0,255,1) 100%);
}
</style>
