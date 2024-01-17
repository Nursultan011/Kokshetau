<template>
  <main-block />
  <about-block />
  <news-block />
  <enterprises />
</template>

<script>
import MainBlock from "@/components/partials/Home/MainBlock.vue";
import AboutBlock from "@/components/partials/Home/AboutBlock.vue";
import NewsBlock from "@/components/partials/Home/NewsBlock.vue";
import Enterprises from "@/components/partials/Home/Enterprises.vue";
export default {
  components: { MainBlock, AboutBlock, NewsBlock, Enterprises },
};
</script>

<style></style>
