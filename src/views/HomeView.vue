<template>
  <main class="home-container">
    <SideBar />
  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
.home-container {
  // margin-top: 2rem;
}
</style>
