<template>
  <loader v-if="isLoading" />
  <div v-else>
    <section class="sub">
      <div class="container">
        <div class="sub__inner">
          <h1 class="title">
            Для потребителя
          </h1>
          <div class="sub__content">
            <div class="sub__nav">
              <ul>
                <li v-for="(category, index) in Object.values(subsidiary)">
                  {{ category.title.title }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Loader from '@/components/global/Loader.vue';
import { useRoute } from 'vue-router';

export default {
  components: { Loader },
  setup() {
    const route = useRoute();
    const store = useStore();
    const isLoading = ref(true);

    const subsidiary = computed(() => store.state.main.subsidiary.data);

    onMounted(async () => {
      await store.dispatch("main/getSubsidiaryId", route.params.id).then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      isLoading,
      subsidiary,
    };
  },
};
</script>

<style>

</style>