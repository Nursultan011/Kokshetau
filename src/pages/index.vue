<template>
  <Loader v-if="isLoading"></Loader>
  <div v-else>
    <main-block />
    <about-block :about="main.about" />
    <news-block :news='main.news' />
    <enterprises :subsidiary="main.subsidiaries" />
    <last-block />
  </div>
</template>

<script>
import MainBlock from "@/components/partials/Home/MainBlock.vue";
import AboutBlock from "@/components/partials/Home/AboutBlock.vue";
import NewsBlock from "@/components/partials/Home/NewsBlock.vue";
import Enterprises from "@/components/partials/Home/Enterprises.vue";
import LastBlock from "@/components/partials/Home/LastBlock.vue";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import Loader from "@/components/global/Loader.vue";
export default {
  components: { MainBlock, AboutBlock, NewsBlock, Enterprises, LastBlock, Loader },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const main = computed(() => store.state.main.main.data);

    onMounted(async () => {
      await store.dispatch("main/getMain").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      main,
      isLoading,
    };
  },
};
</script>

<style></style>
