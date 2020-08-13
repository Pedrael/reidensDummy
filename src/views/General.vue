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

  </div>
</template>

<script>
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
      isActive: false // если true, то в change class example будет еще activeClass
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
