<template>
  <section class="about-block">
    <div class="container">
      <div class="about-block__inner">
        <div class="center">
          <h2
            class="title"
            v-if="
              $props.home &&
              $props.home.title
            "
          >
            {{ $props.home.title }}
          </h2>
          <p
            class="description"
            v-if="
              $props.home &&
              $props.home.description
            "
          >
            {{ $props.home.description }}
          </p>
        </div>
        <div
          class="cards about-block__cards"
          v-if="$props.performance"
        >
          <div class="card" v-for="(item, i) in $props.performance" :key="i">
            <p>
              {{ item.title }}
            </p>
            <span>
              {{ item.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { getIcon } from "@/helpers/imageUrl";

export default {
  props: ["home", "performance"],
  setup(props) {
    const route = useRoute();

    return {
      route,
      getIcon
    };
  },
};
</script>

<style></style>
