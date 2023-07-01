<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
}

.sidebar-svg {
  stroke: antiquewhite;
  width: 2.8rem;
  height: 2.8rem;
}

.mb-1 {
  margin-bottom: 1rem;
}
</style>
