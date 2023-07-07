<template>
  <section class="slider-section">
    <div class="slider" ref="sliderContainer" @scroll="handleScrollEvent">
      <div
        class="slider_items"
        v-for="slider in sliderData"
        :style="handleScroll"
        :key="slider.id"
        ref="sliderItem"
        @click="() => handleSliderClick(slider)"
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
  props: ["sliderArray", "name"],
  data() {
    return {
      slideToShow: 5,
      rightSlideCount: 0,
      leftSlideCount: 0,
      leftSliderClick: false,
      currentIndex: 0,
      scrollX: 0,

      //
      sliderData: [],
      isTemplatesClick: false,
    };
  },
  created() {
    this.rightSlideCount = this.sliderArray.length % this.slideToShow;
    this.sliderArray.map((slider) => console.log(slider));
    this.sliderData = this.sliderArray;
    console.log(this.sliderData);
  },
  computed: {
    handleScroll() {
      return `transform: translateX(${this.scrollX}%);
`;
    },
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
      // let cardToShow = this.sliderArray.slice(
      //   this.currentIndex,
      //   this.slideToShow + this.currentIndex
      // );
      // return cardToShow;

      // console.log(cardToShow);
      return this.sliderArray;
    },
  },
  methods: {
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
          this.leftSliderClick = true;
          this.rightSlideCount--;
          this.leftSlideCount++;
          this.currentIndex += 1;
          this.scrollX -= 112;
        }
      } else if (action === "left") {
        if (this.leftSlideCount > 0) {
          this.rightSlideCount++;
          this.leftSlideCount--;
          this.currentIndex--;
          this.scrollX += 112;
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
      // console.log("sliderObj", sliderObj);
      // console.log("DATA", data);
      // this.$emit("handleCard", data.name, this.name);
      // console.log("handleCard", data.name, this.name);
    },
    handleKeyEvent(e) {
      window.alert(e.target);
    },
    handleScrollEvent() {
      // to acess the slider container
      const sliderContainer = this.$refs.sliderContainer;
      // to get scroll position
      const scrollPosition = sliderContainer.scrollLeft;
      // total width of sliderContainer
      const totalWidth = sliderContainer.scrollWidth;
      // width of slider card
      const containerWidth = sliderContainer.offsetWidth;

      // to check how much card scroll in percentage
      const scrollPercentage =
        (scrollPosition / (totalWidth - containerWidth)) * 100;

      // to calculate card width
      const cardWidth = 100 / this.slideToShow;

      const scrolledSlides = Math.floor(scrollPercentage / cardWidth) / 2;

      this.leftSlideCount = scrolledSlides;
      this.leftSliderClick = true;
      //scrolledSlides means how much slides are scroll
      this.rightSlideCount = Math.floor(
        this.sliderArray.length - this.slideToShow - scrolledSlides
      );
    },

    sliderSrc(data) {
      console.log("DATA", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-section {
  width: 100%;
  position: relative;
  margin: 0 auto;
}
.slider {
  width: 100%;
  padding: 1rem 0;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  gap: 3rem;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  transition: all 0.8s ease-in-out;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &_items {
    flex: 0 0 18%;
    position: relative;
    transition: all 0.8s ease-in-out;
    scroll-snap-align: end;

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
          line-height: normal;
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
