<template>
  <loader v-if="isLoading" />
  <section class="news-id" v-else>
    <div class="container">
      <div class="news-id__inner">
        <div class="breadcrumbs">
          <router-link to="/">{{$t('home')}}</router-link>
          <router-link to="/news">
            {{$t('news')}}
          </router-link>
          <span>
            {{ news.title }}
          </span>
        </div>
        <h1 class="title" v-if="news && news.title">{{news.title}}</h1>
        <span class="date" v-if="news && news.publication_date">{{ news.publication_date }}</span>
        <div class="content" v-if="news && news.content" v-html="news.content">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from 'vuex';
import { getImg } from "@/helpers/imageUrl";
import Loader from "@/components/global/Loader.vue";

export default {
  components: {
    Loader
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const isLoading = ref(true);

    const news = computed(() => store.state.main.news_id.data);

    onMounted(async () => {
      await store.dispatch("main/getNewsById", route.params.id).then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      router,
      news,
      route,
      isLoading,
      getImg
    };
  },
};
</script>


<style></style>
