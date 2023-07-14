<template>
  <div class="project">
    <div class="project_container">
      <div
        class="cards_container"
        :class="{ firstCard: index === 0 }"
        v-for="(slider, index) in projectArray"
        :key="slider._id"
      >
        <MoodboardProjectCard :data="slider" :index="index" name="project" />
      </div>
    </div>
  </div>
</template>

<script>
import MoodboardProjectCard from "@/components/MoodboardProjectCard.vue";
export default {
  components: {
    MoodboardProjectCard,
  },
  created() {
    this.projectArray = this.$store.state.moodboardArray;
  },
  data() {
    return {
      projectArray: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.project {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: 6.5vw 93.5vw;

  &_container {
    width: 100%;
    grid-column: 2/3;
    padding-top: 6.5rem;
    min-height: 100vh;
    background-color: #fff;
    padding: 8.5rem 4.8rem 2.8rem 2.6rem;

    display: flex;

    gap: 1.7rem;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}

.cards_container {
  flex: 0 0 18%;
  margin: 0 auto;
}
.firstCard {
  // flex: 0 0 37.7%;
}
</style>
