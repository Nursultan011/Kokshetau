<template>
  <section class="maps" v-if="$props.map">
    <div class="container">
      <div class="maps__inner">
        <div class="center">
          <p class="title" v-if="$props.map && $props.map.title">{{$props.map.title}}</p>
          <p class="description" v-if="$props.map && $props.map.description">
            {{$props.map.description}}
          </p>
        </div>
        <div v-if="$props.map && $props.map.map_content" v-html="$props.map.map_content">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['map']
};
</script>

<style></style>
