<template>
  <the-header />
  <div id="content-page">
    <router-view />
  </div>
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
