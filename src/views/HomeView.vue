<template>
  <main class="home-container">
    <!-- SIDE BAR -->
    <div class="side-bar">
      <SideBar />
    </div>
    <!--MAIN CONTAINER -->
    <div class="slider-container">
      <div class="slider-container-main">
        <!-- TEMPLATES -->
        <div>
          <div class="templates">
            <div class="templates_info">
              <h2 class="templates_info-heading">
                Get your project off toa great start with our expertly curated
                templates!
              </h2>
              <p class="templates_info-para">
                start with hand picked moodboard templates for your project
              </p>
              <button class="main-btn">Try Templates</button>
            </div>
          </div>
        </div>
        <!-- MOODBOARD TEMPLATES -->
        <div v-if="this.$store.state.moodboardArray.length === 0">
          <h3 class="header-2 moodboard-heading">MoodBoards</h3>
          <div class="moodboard">
            <div class="moodboard_imgs">
              <img
                src="../assets/images/moodBoard.svg"
                alt="moodboad image"
                class="moodboard_imgs-img"
              />
            </div>
            <div class="moodboard_info">
              <h3 class="moodboard_info-heading">
                You haven't created moodboard yet.
              </h3>
              <p class="moodboard_info-para">Make your first moodboard now!</p>
              <button class="main-btn">Create New MoodBoard</button>
            </div>
          </div>
        </div>
        <div v-else class="moodboard-container">
          <div class="style_container-btn">
            <h3 class="header-2">MoodBoards</h3>
            <p class="see-all">See all</p>
          </div>
          <div class="cardSlider-container">
            <CardSlider
              :sliderArray="this.$store.state.moodboardArray"
              name="moodBoard"
            />
          </div>
          <!-- <div class="moodboard-container-test"></div> -->
        </div>

        <!-- STYLE CONTAINER -->
        <div>
          <div class="style_container-btn p-1">
            <h3 class="style_container-btn-tittle header-2">Style</h3>
            <div class="style_container-btn-container">
              <button
                v-for="button in this.$store.state.inspirationArray"
                :key="button._id + Math.random()"
                class="style-btn"
                @click="handleButtonClick(button._id)"
              >
                {{ button._id }}
              </button>
            </div>
            <p class="style_container-btn-seeAll see-all">See all</p>
          </div>
          <div class="cardSlider-container">
            <CardSlider
              :sliderArray="this.$store.state.inspirationArray"
              name="styleSlider"
              ref="styleSliderChild"
            />
          </div>
        </div>
        <!-- ROOM TEMPLATES -->
        <div>
          <div class="room-container">
            <h3 class="header-2">Room Moodboard Templates <span>60+</span></h3>
            <p class="see-all">See all</p>
          </div>
          <div class="cardSlider-container">
            <CardSlider
              :sliderArray="this.$store.state.roomArray"
              name="roomSlider"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import CardSlider from "@/components/CardSlider.vue";

export default {
  created() {},
  data() {
    return {
      // buttonClickText: "",
    };
  },
  components: {
    SideBar,
    CardSlider,
  },

  methods: {
    handleButtonClick(data) {
      this.$refs.styleSliderChild.childFunction(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.cardSlider-container {
  width: 100%;
}
.home-container {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: 6.5vw 93.5vw;
}
.side-bar {
  grid-column: 1/2;
}
.slider-container {
  grid-column: 2/3;
  padding-top: 6.5rem;
  min-height: 100vh;
  background-color: #fff;
  padding: 8.5rem 4.8rem 2.8rem 2.6rem;

  &-main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

/*Moodboard style */
.moodboard-heading {
  margin-bottom: 1rem;
}
.moodboard {
  width: 100%;
  padding: 3rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  border: 2px solid #e8e8e8;
  background: #fdfdfd;
  border-radius: 0.4rem;
  &_info {
    &-heading {
      font-size: 2.2rem;
      font-weight: 700;
      line-height: normal;
      color: #222021;
    }
    &-para {
      font-size: 1.4rem;
      margin: 0.8rem 0;
      font-weight: 400;
    }
  }
}
/*TEMPLATES STYLE */
.templates {
  width: 100%;
  margin-bottom: 1rem;
  border: 1.5px solid #e8e8e8;
  border-radius: 0.4rem;
  background-image: url("../assets/images/Banner-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  &_info {
    width: 45%;
    padding: 3.5rem;
    &-heading {
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: #0e0e0e;
    }
    &-para {
      font-size: 1.6rem;
      color: #222021;
      padding: 1.4rem 0;
      font-weight: 400;
    }
  }
}
/*STYLE BUTTON STYLE */
.style_container-btn {
  width: 100%;
  height: auto;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.6rem;

  &-container {
    flex: 0 0 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-family: Montserrat;
    font-weight: 700;
    gap: 0.8rem;
  }

  &-tittle,
  &-seeAll {
    flex: 0 0 5%;
  }
}

.button-con {
  display: flex;
  gap: 0.6rem;
}

.header-2 > span {
  font-size: 1.6rem;
  background-color: #e9beb3;
  border-radius: 0.6rem;
  padding: 0.6rem 1.2rem;
}

.see-all {
  color: #222021;
  margin: 0 3rem 0 auto;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
}

.room-container {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
