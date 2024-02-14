<template>
  <Loader v-if="isLoading" />
  <section v-else class="services">
    <div class="container">
      <div class="services__inner">
        <div class="services__header" v-if="services && services.content">
          <div class="content">
            <p class="title">
            {{ $t('procurement') }}
            </p>
            <p class="description" v-if="services.content.description">
              {{ services.content.description }}
            </p>
          </div>
          <button class="button" style="white-space: nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ $t('download_file') }}
          </button>
        </div>
        <div class="cards services__cards" v-if="services && services.values">
          <div class="card card-border" v-for="(item, i) in services.values" :key="i">
            <p v-if="item.title">
              {{ item.title }}
            </p>
            <div v-if="item.description" v-html="item.description"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Loader from "@/components/global/Loader.vue";

export default {
  components: { Loader },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const services = computed(() => store.state.main.services);

    onMounted(async () => {
      await store.dispatch("main/getServices").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      isLoading,
      services,
    };
  },
};
</script>

<style></style>
