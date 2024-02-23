<template>
  <loader v-if="isLoading" />
  <div v-else>
    <first-block :home="about.home" :performance="about.performance" style="background: white" />
    <advantages :advantages="about.advantages" />
    <art-block :info="about.info" />
    <licenses-block :licenses="about.licenses" />
    <maps :map="about.map" />
    <enterprises :subsidiary="about.subsidiaries" />
  </div>
</template>

<script>
import FirstBlock from "@/components/partials/About/FirstBlock.vue";
import Advantages from "@/components/partials/About/Advantages.vue";
import ArtBlock from "@/components/partials/About/ArtBlock.vue";
import Maps from "@/components/partials/About/Maps.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from 'vuex';
import Loader from '@/components/global/Loader.vue';
import LicensesBlock from '@/components/partials/About/LicensesBlock.vue';
import Enterprises from '@/components/partials/Home/Enterprises.vue';
import { useI18n } from "vue-i18n";

export default {
  components: { FirstBlock, Advantages, ArtBlock, Maps, Loader, LicensesBlock, Enterprises },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const { locale } = useI18n({ useScope: "global" });

    const about = computed(() => store.state.main.about.data);

    onMounted(async () => {
      await store.dispatch("main/getAbout").then((res) => {
        isLoading.value = false;
      });
    });

    watch(locale, async (val) => {
      isLoading.value = true;

      await store.dispatch("main/getAbout").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      isLoading,
      about,
    };
  },
};
</script>

<style></style>
