<template>
  <main-block />
  <about-block />
  <news-block />
  <enterprises />
  <last-block />
</template>

<script>
import MainBlock from "@/components/partials/Home/MainBlock.vue";
import AboutBlock from "@/components/partials/Home/AboutBlock.vue";
import NewsBlock from "@/components/partials/Home/NewsBlock.vue";
import Enterprises from "@/components/partials/Home/Enterprises.vue";
import LastBlock from "@/components/partials/Home/LastBlock.vue";
export default {
  components: { MainBlock, AboutBlock, NewsBlock, Enterprises, LastBlock },
};
</script>

<style></style>
