<template>
  <div id="app" class="app">
    <div class="app_header">
      <TheHeader />
    </div>
    <div class="app_sidebar">
      <SideBar />
    </div>
    <div class="app_routerview">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import SideBar from "./components/SideBar.vue";
export default {
  components: {
    TheHeader,
    SideBar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  font-family: Montserrat, sans-serif;
  overflow-x: hidden !important;
  font-style: normal;
  line-height: normal;
}

#app {
  width: 100vw;
}
/*APP STYLE */

.app {
  width: 100%;
  min-height: 100vh;
  max-height: auto;

  display: grid;
  grid-template-columns: 6.5vw 93.5vw;
  grid-template-rows: 6rem auto;
  &_header {
    grid-row: 1/2;
    grid-column: 1/3;
  }
  &_sidebar {
    grid-row: 2/3;
    grid-column: 1/2;
  }
  &_routerview {
    grid-row: 2/3;
    grid-column: 2/3;
  }
}

/*COMMON CLASSES */

.flex-bet-center {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grid-center {
  display: grid;
  place-items: center;
}
.sidebar-svg {
  width: 2.8rem;
  height: 2.8rem;
}

.arrow-btn {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: whitesmoke;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.403);
  z-index: 999;

  display: grid;
  place-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(251, 250, 250, 0.885);
    box-shadow: 0 0 2.2px rgba(0, 0, 0, 0.529);
  }
}

.arrow-svg {
  height: 1.4rem;
  width: 2rem;
  z-index: 999;
  stroke-width: 3;
  stroke: #232121;
}

.style-btn {
  flex: 0 0 1;
  background-color: #fff;
  font-size: 1.3rem;
  border: 1px solid rgba(233, 190, 179, 0.5);
  padding: 0.6rem 1rem;
  border-radius: 0.6rem;
  cursor: pointer;
  font-weight: 500;
}

.header-2 {
  font-size: 1.8rem;
  padding: 1rem;
  color: #222021;
  font-family: Montserrat;
  line-height: normal;
  & > span {
    padding: 0.4rem 0.6rem;
    color: #232121;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

.mb-4 {
  margin-bottom: 4rem;
}

.main-btn {
  border: none;
  background-color: #e9beb3;
  padding: 1.3rem 1.6rem;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: normal;
  color: #232121;
  cursor: pointer;
  font-family: Montserrat;
}

.arrow-up {
  height: 1rem;
  width: 1rem;
  fill: #141b35;
}

.top-layel {
  z-index: 9999 !important;
}
.mid-layel {
  z-index: 999 !important;
}
.lower-layel {
  z-index: 99 !important;
}

.p-1 {
  padding-bottom: 1rem;
}
.mt-2 {
  margin-top: 1.2rem;
}
/*COMMON CLASSES */
.place-center {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.blurDiv {
  height: 100vh;
  width: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: red;
  // z-index: 1;
}
</style>
