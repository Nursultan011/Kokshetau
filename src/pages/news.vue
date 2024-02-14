<template>
  <Loader v-if="isLoading"></Loader>
  <section v-else class="news">
    <div class="container">
      <div class="news__inner">
        <p class="title">{{$t('news')}}</p>
        <div class="cards news__cards">
          <div
            class="card"
            v-for="(item, i) in news"
            :key="i"
            @click="redirect(item.id)"
          >
            <div class="img">
              <img v-if="item.img_uri" :src="getImg(item.img_uri)" alt="" />
            </div>
            <p class="suptitle" v-if="item.created_at">{{ item.created_at }}</p>
            <div class="flex" v-if="item.title">
              <p class="title">{{ item.title }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="description" v-html="item.content">
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
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
    const isLoading = ref(true);

    const news = computed(() => store.state.main.news.data.news);

    const redirect = (id) => {
      if (id) router.push({ path: "/news/" + id });
    };

    onMounted(async () => {
      await store.dispatch("main/getNews").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      router,
      news,
      redirect,
      isLoading,
      getImg
    };
  },
};
</script>

<style></style>
