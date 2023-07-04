<template>
  <section class="slider-section">
    <div class="slider" ref="sliderContainer">
      <div
        class="slider_items"
        v-for="(slider, index) in showCard"
        :key="slider.name"
        ref="sliderItem"
      >
        <div class="slider_items-images">
          <img :src="slider.src" alt="img" class="slider_items-images-img" />
          <div class="slider_items-images-viewstyle" v-if="index === 0">
            <button class="slider_items-images-viewstyle-btn">
              View Style
            </button>
          </div>
        </div>
        <div class="slider_items-info">
          <p class="slider_items-info-tittle">{{ slider.name }}</p>
          <p class="slider_items-info-items">{{ slider.item }} items</p>
        </div>
      </div>
    </div>
    <div
      class="slider_left-btn arrow-btn"
      @click="() => handleSlider(`left`)"
      v-if="checkLeft"
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
      @click="() => handleSlider(`right`)"
      v-if="checkRight"
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
export default {
  props: ["sliderArray"],
  data() {
    return {
      slideToShow: 5,
      rightSlideCount: 0,
      leftSlideCount: 0,
      leftSliderClick: false,
      currentIndex: 0,
    };
  },
  created() {
    this.rightSlideCount = this.sliderArray.length % this.slideToShow;
  },
  computed: {
    checkLeft() {
      if (this.leftSlideCount > 0 && this.leftSliderClick) {
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
    showCard() {
      let cardToShow = this.sliderArray.slice(
        this.currentIndex,
        this.slideToShow + this.currentIndex
      );
      return cardToShow;
    },
  },
  methods: {
    handleSlider(action) {
      if (action === "right") {
        if (this.rightSlideCount > 0) {
          this.leftSliderClick = true;
          this.rightSlideCount--;
          this.leftSlideCount++;
          this.currentIndex += 1;
        }
      } else if (action === "left") {
        if (this.leftSlideCount > 0) {
          this.rightSlideCount++;
          this.leftSlideCount--;
          this.currentIndex--;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-section {
  width: 97%;
  position: relative;
  margin: 0 auto;
}
.slider {
  width: 100%;
  padding: 1rem 0;
  margin: 0 auto;
  overflow: hidden;
  transition: all 1s ease-in-out;
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 3rem;

  &_items {
    flex: 0 0 18%;
    position: relative;
    transition: all 1s ease-in-out;

    &-images {
      width: 100%;
      height: 15rem;
      border-radius: 1rem;
      background-color: rgba(0, 0, 0, 0.595);
      overflow: hidden;

      position: relative;

      &-img {
        width: 100%;
        height: 100%;
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
        background-color: rgba(245, 245, 245, 0.456);

        &-btn {
          padding: 0.8rem 1.6rem;
          font-size: 1.6rem;
          border: none;
          border-radius: 50rem;

          &:hover {
            cursor: pointer;
            background-color: rgb(211, 210, 210);
          }
        }
      }
    }
    &-info {
      display: flex;
      justify-content: space-between;
      padding: 0.6rem 0;

      &-tittle,
      &-items {
        font-size: 1.6rem;
        font-weight: 700;
      }
      &-items {
        font-weight: 500;
      }
    }
  }
  &_left-btn {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -100%);
    z-index: 999;
  }
  &_right-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -100%);
    z-index: 999;
  }
}
</style>
