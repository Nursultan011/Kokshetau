<template>
  <div>
    <about-block style="background: white" />
    <advantages />
    <art-block />
    <maps />
  </div>
</template>

<script>
import AboutBlock from "@/components/partials/Home/AboutBlock.vue";
import Advantages from "@/components/partials/About/Advantages.vue";
import ArtBlock from "@/components/partials/About/ArtBlock.vue";
import Maps from "@/components/partials/About/Maps.vue";
export default {
  components: { AboutBlock, Advantages, ArtBlock, Maps },
};
</script>

<style></style>
