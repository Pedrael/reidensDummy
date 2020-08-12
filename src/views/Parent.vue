<template lang="html">
<div class="layout">
  <Child :value="counter" v-on:child-event="increment" />
  <!-- по возникновению события child-event
        (который в компоненте Child) вызываем метод increment -->
  <!-- :value="counter" задание пропа (см props в Child.vue) -->
</div>
</template>

<script>

import Child from '@/components/Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function(data) {
      // в параметр data передается значение из события (см generateEvent в Child.vue)
      this.counter++
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
