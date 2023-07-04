<template>
  <main class="home-container">
    <SideBar />
    <div class="slider-container">
      <div class="style_container">
        <div class="style_container-btn">
          <h3 class="header-2">Style</h3>
          <button v-for="button in styleButton" :key="button" class="style-btn">
            {{ button }}
          </button>
        </div>
        <CardSlider :sliderArray="styleCardArray" />
      </div>
    </div>
  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import CardSlider from "@/components/CardSlider.vue";

export default {
  components: {
    SideBar,
    CardSlider,
  },
  data() {
    return {
      styleCardArray: [
        {
          name: "Minimilist",
          item: 10,
          src: `https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
        },
        {
          name: "Exlectic",
          item: 10,
          src: `https://plus.unsplash.com/premium_photo-1664699099351-4364a337288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
        },
        {
          name: "Japandi",
          item: 10,
          src: `https://images.unsplash.com/photo-1685790474502-fa665337538c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
        },
        {
          name: "Bohemian",
          item: 10,
          src: `https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
        },
        {
          name: "Mid-Century",
          item: 10,
          src: `https://images.unsplash.com/photo-1685475512320-eede8aea2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
        },
        {
          name: "Rustic",
          item: 10,
          src: `https://images.unsplash.com/photo-1547057560-0180a6521dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
        },
        {
          name: "Transitional",
          item: 10,
          src: `https://images.unsplash.com/photo-1686943812586-65d1d30ab40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
        },
      ],
      styleButton: [
        "Minimilist",
        "Eclectic",
        "Japandi",
        "Bohemian",
        "Mid-Century",
        "Rustic",
        "Transitional",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: auto;

  display: grid;
  grid-template-columns: 7vw 93vw;
}
.slider-container {
  grid-column: 2/3;
  padding-top: 7rem;
  min-height: 100vh;
  border: 2px solid black;
  background-color: whitesmoke;
}
/*STYLE BUTTON STYLE */
.style_container-btn {
  width: 50%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.button-con {
  display: flex;
  gap: 0.6rem;
}
</style>
