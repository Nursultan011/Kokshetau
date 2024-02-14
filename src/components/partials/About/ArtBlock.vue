<template>
  <section class="art" v-if="$props.info">
    <div class="container">
      <div class="art__inner">
        <div class="art__block" v-for="(item, i) in $props.info" :key="i">
          <div class="content">
            <p class="title">{{ item.title }}</p>
            <div class="description" v-html="item.description"></div>
          </div>
          <img v-if="item.img_uri" :src="getImg(item.img_uri)" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { getImg } from "@/helpers/imageUrl";

export default {
  props: ['info'],
  setup() {
    return {
      getImg
    };
  },
};
</script>

<style></style>
