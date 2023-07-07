<template>
  <div class="section">
    <MoodboardProjectCard />
  </div>
</template>

<script>
import MoodboardProjectCard from "@/components/MoodboardProjectCard.vue";
export default {
  components: {
    MoodboardProjectCard,
  },
};
</script>

<style scoped>
.section {
  height: 90vh;
  width: 100vw;
  display: grid;
  place-items: center;
}
</style>
