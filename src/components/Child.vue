<template lang="html">
  <div class="child">
    <button @click="generateEvent">Сгенерировать</button>
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    value: Number // параметры которые мы хотим задать из родителя
  },
  methods: {
    generateEvent: function() {
      this.$emit('child-event', 'Какое-то значение чего-то')
      // первый параметр - название события, второе - то, что мы хотим передать от ребенка к родителю
    }
  }
}
</script>

<style lang="scss" scoped>
.child {
  width: 50%;
  background: rgb(108, 184, 127);
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
