// handleScrollEvent() {
//       // to acess the slider container
//       const sliderContainer = this.$refs.sliderContainer;
//       // to get scroll position
//       const scrollPosition = sliderContainer.scrollLeft;
//       // total width of sliderContainer
//       const totalWidth = sliderContainer.scrollWidth;
//       // width of slider card
//       const containerWidth = sliderContainer.offsetWidth;

//       // to check how much card scroll in percentage
//       const scrollPercentage =
//         (scrollPosition / (totalWidth - containerWidth)) * 100;

//       // to calculate card width
//       const cardWidth = 100 / this.slideToShow;

//       const scrolledSlides = Math.floor(scrollPercentage / cardWidth) / 2;

//       this.leftSlideCount = scrolledSlides;
//       this.leftSliderClick = true;
//       //scrolledSlides means how much slides are scroll
//       this.rightSlideCount = Math.floor(
//         this.sliderArray.length - this.slideToShow - scrolledSlides
//       );
//     },
