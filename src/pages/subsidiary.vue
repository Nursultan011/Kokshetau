<template>
  <loader v-if="isLoading" />
  <div v-else>
    {{ subsidiary }}
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