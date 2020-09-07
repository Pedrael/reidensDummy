<template>
  <div id="app">
    <div id="nav"> |
      <router-link to="/">Home</router-link> |+|
      <router-link to="/parent">Parent-Child Relations</router-link> |+|
      <router-link to="/general">General vue shit</router-link> |+|
      <router-link to="/vuex">Vuex</router-link> |+|
      <router-link to="/vuex/1">Vuex2</router-link> |
      <!-- там можно делать ссылки на маршруты внутри хтмл -->
    </div>
    <router-view/>
    <!-- роутер-вью - это объект в котором отображается компонент согласно маршруту -->
    <!-- то есть, внутри апп.вью по маршруту / рисуется компонент хоум.вью и т.п. -->
    <!-- а еще при переходе на другой маршрут значения переменных в компоненте текущего маршрута сбрасываются -->
  </div>
</template>

<style lang="scss">
* {
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  padding: 0;
}
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: rgb(237, 237, 237);
  color: black;
  flex-wrap: wrap;
}
#nav {
  position: absolute;
  width: 100%;
  background: rgb(117, 0, 49);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  a {
    color: white;
  }
}
</style>
