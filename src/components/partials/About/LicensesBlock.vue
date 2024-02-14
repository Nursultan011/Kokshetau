<template>
  <section class="licenses-block">
    <div class="container">
      <div class="licenses-block__inner">
        <div class="content" v-if="$props.licenses && $props.licenses.title">
          <p class="title" v-if="$props.licenses.title.title">
            {{$props.licenses.title.title}}
          </p>
          <p class="description" v-if="$props.licenses.title.description">
            {{$props.licenses.title.description}}
          </p>
        </div>
        <div class="licenses-block__cards" v-if="$props.licenses && $props.licenses.content">
          <div class="licenses-block__card" v-for="(item, i) in $props.licenses.content" :key="i">
            <img src="../../../assets/images/pdf.svg" alt="">
            <p class="title">
              {{item.title}}
            </p>
            <p class="description">
             {{ item.description }}
            </p>
            <a :href="getIcon(item.file_uri)" target="_blank" class="button-text">Посмотреть</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getIcon } from "@/helpers/imageUrl";

export default {
  props: ['licenses'],
  setup(props) {

    return {
      getIcon
    };
  },
};
</script>

<style></style>
