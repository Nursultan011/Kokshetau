<template>
  <section class="news-slider main-news">
    <div class="container">
      <div class="news-slider__inner">
        <div class="news-slider__header">
          <p class="title">{{$t('company_news')}}</p>
          <button @click="redirect('/news')" class="button">{{$t('view_all')}}</button>
        </div>
        <Splide
          :options="{
            type: 'loop',
            interval: 3000,
            speed: 700,
            Infinity: false,
            pagination: false,
            arrows: true,
            autoWidth: true,
            focus: 0,
            omitEnd: true,
            breakpoints: {
              580: {
                perPage: 1,
                swipe: true,
              },
            },
          }"
        >
          <SplideSlide
            class="news__cards"
            v-for="(item, index) in $props.news"
            :key="index"
          >
            <div class="card" :key="i" @click="redirect('news/' + item.id)">
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
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "vue";
import { getImg } from "@/helpers/imageUrl";
import { useRouter } from 'vue-router';

export default {
  props: ['news'],
  setup(props) {
    const router = useRouter();

    const redirect = (event) => {
      router.push(event)
    }

    return {
      router,
      redirect,
      getImg,
    };
  },
};
</script>

<style></style>
