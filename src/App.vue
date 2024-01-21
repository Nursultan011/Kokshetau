<template>
  <the-header />
  <router-view />
  <the-footer />
</template>

<script>
import TheFooter from "./components/global/TheFooter.vue";
import TheHeader from "./components/global/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
