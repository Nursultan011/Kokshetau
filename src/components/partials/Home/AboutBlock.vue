<template>
  <section class="about-block">
    <div class="container">
      <div class="about-block__inner">
        <div class="center">
          <h2
            class="title"
            v-if="
              $props.about &&
              $props.about.content &&
              $props.about.content.title
            "
          >
            {{ $props.about.content.title }}
          </h2>
          <p
            class="description"
            v-if="
              $props.about &&
              $props.about.content &&
              $props.about.content.description
            "
          >
            {{ $props.about.content.description }}
          </p>
          <router-link style="text-decoration: none;" to="/about" class="button" v-if="route.path !== '/about'">
            {{$t('more')}}
          </router-link>
        </div>
        <div
          class="cards about-block__cards"
          v-if="$props.about && $props.about.performance"
        >
          <div class="card" v-for="(item, i) in $props.about.performance" :key="i">
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
  props: ["about"],
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
