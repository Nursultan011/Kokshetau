<template>
  <Loader v-if="isLoading"></Loader>
  <div v-else>
    <main-block :main="main.first_block" />
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
import { computed, onMounted, ref, watch } from "vue";
import Loader from "@/components/global/Loader.vue";
import { useI18n } from "vue-i18n";

export default {
  components: { MainBlock, AboutBlock, NewsBlock, Enterprises, LastBlock, Loader },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const { locale } = useI18n({ useScope: "global" });

    const main = computed(() => store.state.main.main.data);

    onMounted(async () => {
      await store.dispatch("main/getMain").then((res) => {
        isLoading.value = false;
      });
    });

    watch(locale, async (val) => {
      isLoading.value = true;

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
