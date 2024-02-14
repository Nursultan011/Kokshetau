<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__inner">
        <div
          class="center"
          v-if="
            $props.advantages &&
            $props.advantages.title &&
            $props.advantages.title.title
          "
        >
          <p class="title">{{ $props.advantages.title.title }}</p>
        </div>
        <div
          class="cards advantages__cards"
          v-if="$props.advantages && $props.advantages.content"
        >
          <div
            class="card"
            v-for="(item, i) in $props.advantages.content"
            :key="i"
          >
            <div class="icon" v-if="item.ico_uri">
              <img :src="getIcon(item.ico_uri)" alt="" />
            </div>
            <p class="title" v-if="item.title">
              {{ item.title }}
            </p>
            <p class="description" v-if="item.description">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { getIcon } from "@/helpers/imageUrl";
export default {
  props: ["advantages"],
  setup() {

    return {
      getIcon
    };
  },
};
</script>

<style></style>
