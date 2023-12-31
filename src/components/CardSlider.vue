<template>
  <section class="slider-section" @keydown="handleKeyPress" tabindex="1">
    <!-- FOR MOODBOARD CARDS -->
    <div
      class="slider place-center moodboard-container"
      :ref="`sliderContainer`"
      v-if="name === `moodBoard`"
    >
      <div
        class="slider_items"
        v-for="(slider, index) in sliderData"
        :style="handleScroll"
        :key="slider._id"
      >
        <MoodboardProjectCard
          :data="slider"
          :index="index"
          @click="() => handleSliderClick(slider)"
        />
      </div>
    </div>

    <!-- FOR CARDS -->
    <div
      class="slider place-center overFlowHidden"
      :ref="`${name}-sliderContainer`"
      v-if="name !== 'moodBoard'"
    >
      <div
        class="slider_items"
        v-for="slider in sliderData"
        :key="slider.id + `${Math.random()}`"
        @click="() => handleSliderClick(slider)"
        :style="handleScroll"
      >
        <div class="slider_items-images">
          <img
            :src="slider.thumbnail"
            alt="img"
            class="slider_items-images-img"
          />
          <div class="slider_items-images-viewstyle" v-if="!isTemplatesClick">
            <button class="slider_items-images-viewstyle-btn">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="arrow-up"
              >
                <path
                  d="M6.68067 2.76916L0.942667 8.50716L0 7.5645L5.73733 1.8265H0.680667V0.493164H8.014V7.8265H6.68067V2.76916Z"
                  fill="#141B35"
                />
              </svg>
              <span>{{ setText() }}</span>
            </button>
          </div>
        </div>
        <div class="slider_items-info">
          <p class="slider_items-info-tittle">{{ slider._id }}</p>
          <p class="slider_items-info-items">{{ slider.count }} items</p>
        </div>
      </div>
    </div>

    <!-- END -->
    <div
      class="slider_left-btn arrow-btn"
      @click="handleSlider(`left`)"
      v-if="checkLeft"
      :class="{ 'mt-2': name === 'moodBoard' }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="arrow-svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
    <div
      class="slider_right-btn arrow-btn"
      :class="{ 'mt-2': name === 'moodBoard' }"
      @click="handleSlider(`right`)"
      v-if="checkRight && sliderData.length > slideToShow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="arrow-svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import MoodboardProjectCard from "./MoodboardProjectCard.vue";
export default {
  props: ["sliderArray", "name"],
  mounted() {},
  data() {
    return {
      slideToShow: 5,
      rightSlideCount: 0,
      leftSlideCount: 0,
      isLeftBtnShow: false,
      currentIndex: 0,
      scrollX: 0,

      //SLIDER DATA
      sliderData: [],
      isTemplatesClick: false,
      cardWidth: 276,
    };
  },
  components: {
    MoodboardProjectCard,
  },
  created() {
    this.rightSlideCount = this.sliderArray.length - this.slideToShow;
    this.sliderData = this.sliderArray;
  },
  computed: {
    handleScroll() {
      return `
            transform: translateX(${this.scrollX}px);
            transition: all 0.6s ease-in-out !important;
      `;
    },
    transition() {
      return `transition: all 0.6s ease-in-out !important;`;
    },
    checkLeft() {
      if (this.leftSlideCount > 0 && this.isLeftBtnShow) {
        return true;
      }
      return false;
    },
    checkRight() {
      if (this.rightSlideCount > 0) {
        return true;
      }
      return false;
    },
  },
  methods: {
    handleKeyPress(e) {
      if (e.key === "ArrowLeft") {
        this.handleSlider("left");
      } else if (e.key === "ArrowRight") {
        this.handleSlider("right");
      }
    },
    setText() {
      if (this.name === "styleSlider") {
        return `View Style`;
      } else if (this.name === "roomSlider") {
        return `Use This Template`;
      }
    },

    handleSlider(action) {
      if (action === "right") {
        if (this.rightSlideCount > 0) {
          this.isLeftBtnShow = true;
          this.rightSlideCount--;
          this.leftSlideCount++;
          this.currentIndex += 1;
          this.scrollX -= this.cardWidth;
        }
      } else if (action === "left") {
        if (this.leftSlideCount > 0) {
          this.rightSlideCount++;
          this.leftSlideCount--;
          this.currentIndex--;
          this.scrollX += this.cardWidth;
        }
      }
    },
    handleSliderClick(data) {
      let sliderTemplatesArray = data.templates.map((slider) => {
        return {
          _id: slider.title,
          src: slider.image,
          count: slider.countOfCommands,
          id: slider.accountId + Math.random(),
        };
      });
      this.sliderData = sliderTemplatesArray;
      this.isTemplatesClick = true;
    },

    childFunction(data) {
      let cardsToShow = this.$store.state.inspirationArray.find(
        (card) => card._id === data
      );

      this.sliderData = cardsToShow.templates.map((data) => {
        return {
          thumbnail: data.image,
          _id: data.title,
          count: data.countOfCommands,
          id: data._id,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-section {
  width: 100%;
  position: relative;
  margin: 0 auto;
  &:focus {
    outline: none;
  }
}

.slider {
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  margin: 0 auto;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1.72rem;
  height: max-content;

  &_items {
    flex: 0 0 19%;
    position: relative;

    &-images {
      width: 100%;
      height: 15rem;
      border-radius: 1rem;
      background-color: rgba(0, 0, 0, 0.595);
      overflow: hidden;
      border: 2px solid #e8e8e8;
      position: relative;
      overflow: hidden;

      &-img {
        width: 100%;
        height: 100%;

        &:hover {
          opacity: 0.4;
        }
      }
      &-viewstyle {
        width: 100%;
        height: 15rem;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;

        display: grid;
        place-items: center;
        background-color: rgba(245, 245, 245, 0.567);
        opacity: 0;
        &:hover {
          opacity: 1;
        }

        &-btn {
          padding: 1rem;
          font-size: 1.6rem;
          border: none;
          border-radius: 100rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #fff;
          text-align: center;
          font-size: 1.2rem;

          font-weight: 500;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    &-info {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0 0 0;

      &-tittle,
      &-items {
        font-size: 1.6rem;
        line-height: normal;
        font-weight: 700;
        font-style: normal;
        font-family: Montserrat;
        color: #0e0e0e;
      }
      &-items {
        font-weight: 400;
      }
    }
  }
  &_left-btn {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -100%);
  }
  &_right-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -100%);
  }
}

.overFlowHidden {
  overflow: hidden !important;
}
</style>
