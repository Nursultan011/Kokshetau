<template>
  <the-header />
  <router-view />
</template>

<script>
import TheHeader from "./components/global/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>
