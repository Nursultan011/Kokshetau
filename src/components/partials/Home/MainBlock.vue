<template>
  <main class="main">
    <div class="container">
      <div class="main__inner">
        <div class="content">
          <h1 v-html="$props && $props.main && $props.main.title">
          </h1>
          <p class="description" v-if="$props && $props.main && $props.main.description">
            {{ $props.main.description }}
          </p>
        </div>
        <img v-if="$props && $props.main && $props.main.img_uri" :src="getImg($props.main.img_uri)" alt="" />
      </div>
    </div>
  </main>
</template>

<script>
import { getImg } from "@/helpers/imageUrl";
export default {
  props: ['main'],
  setup() {
    return {
      getImg
    };
  },
};
</script>

<style></style>
