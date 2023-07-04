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

.arrow-btn {
  height: 3.3rem;
  width: 3.3rem;
  border-radius: 50%;
  background-color: whitesmoke;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.403);
  z-index: 999;

  display: grid;
  place-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(251, 250, 250, 0.885);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.529);
  }
}

.arrow-svg {
  height: 80%;
  width: 80%;
  z-index: 999;
  stroke-width: 2;
}

.style-btn {
  flex: 0 0 1;
  background-color: #fff;
  font-size: 1.3rem;
  border: 2px solid antiquewhite;
  padding: 0.6rem 1.2rem;
  border-radius: 0.6rem;
  cursor: pointer;
}

.header-2 {
  font-size: 2.4rem;
  padding: 1rem;
}

@keyframes slideAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.slider-transition {
  animation: slideAnimation 1s ease-in-out;
}

.mb-1 {
  margin-bottom: 1rem;
}
</style>
