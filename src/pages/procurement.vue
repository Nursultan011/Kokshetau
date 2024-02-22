<template>
  <Loader v-if="isLoading" />
  <section v-else class="services">
    <div class="container">
      <div class="services__inner">
        <div class="services__header" v-if="tenders">
          <div class="content">
            <p class="title">
            {{ $t('procurement') }}
            </p>
          </div>
        </div>
        <div class="cards tenders__cards services__cards" v-if="tenders">
          <a target="_blank" :href="item.url ? item.url : '#'" class="card card-border" v-for="(item, i) in tenders" :key="i">
            <p class="name" v-if="item.name">
              {{ item.name }}
            </p>
            <div v-if="item.description">{{ item.description }}</div>
            <ul>
              <li>
                <span>Условия оплаты:</span> {{ item.payment_terms }}
              </li>
              <li>
                <span>Условия поставки:</span> {{ item.procedure_place }}
              </li>
            </ul>
            <a :href="item.url ? item.url : '#'" class="button-txt">{{ $t('more') }}</a>
          </a>
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

    const tenders = computed(() => store.state.main.tenders.data);

    onMounted(async () => {
      await store.dispatch("main/getTenders").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      isLoading,
      tenders,
    };
  },
};
</script>

<style></style>
