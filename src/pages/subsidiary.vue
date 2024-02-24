<template>
  <loader v-if="isLoading" />
  <div v-else>
    <section class="sub">
      <div class="container">
        <div class="sub__inner">
          <h1 class="title">
            Для потребителя
          </h1>
          <div class="sub__wrap">
            <div class="sub__nav">
              <ul>
                <li :class="{ 'active' : category.title.title == activeTab.title.title }" v-for="(category, index) in Object.values(subsidiary)" @click="select(category)">
                  {{ category.title.title }}
                </li>
              </ul>
            </div>
            <div class="sub__content">
              <h2
                class="title"
                v-if="activeTab && activeTab.title && activeTab.title.title">
                {{ activeTab.title.title }}
              </h2>
              <div class="wrap" v-for="item in activeTab.content" :key="item.id">
                <p class="h2" v-if="item.title">{{ item.title }}</p>
                <a :href="parseFile(item.file_uri, 'link')" target="_blank" class="pdf" v-if="item.file_uri">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(item.file_uri, 'name') }}
                  </span>
                </a>
                <div class="html" v-html="item.description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import Loader from '@/components/global/Loader.vue';
import { useRoute } from 'vue-router';
import { parseFile } from "@/helpers/imageUrl";

export default {
  components: { Loader },
  setup() {
    const route = useRoute();
    const store = useStore();
    const isLoading = ref(true);

    const subsidiary = computed(() => store.state.main.subsidiary.data);

    const activeTab = ref({});

    onMounted(async () => {
      await store.dispatch("main/getSubsidiaryId", route.params.id).then((res) => {
        isLoading.value = false;
        if (subsidiary.value && Object.values(subsidiary.value).length > 0) {
          activeTab.value = Object.values(subsidiary.value)[0];
        }
      });
    });

    const select = (data) => {
      activeTab.value = data;
    }

    return {
      store,
      isLoading,
      subsidiary,
      select,
      activeTab,
      parseFile
    };
  },
};
</script>

<style>

</style>