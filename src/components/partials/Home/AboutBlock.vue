<template>
  <section class="about-block">
    <div class="container">
      <div class="about-block__inner">
        <div class="center">
          <h2 class="title">
            ТОО 'Кокшетау Энерго' – Ваш партнер в надежности и эффективности
          </h2>
          <p class="description">
            Приветствуем вас в мире энергетики с ТОО 'Кокшетау Энерго' – вашим
            надежным партнером в обеспечении эффективной работы электросетей
          </p>
          <button class="button" v-if="route.path !== '/about'">
            Подробнее
          </button>
        </div>
        <div class="cards about-block__cards">
          <div class="card" v-for="(item, i) in cards" :key="i">
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
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const cards = ref([
      {
        title: "500+",
        description: "обеспечиваем электричеством",
      },
      {
        title: "2833",
        description: "подстанции",
      },
      {
        title: "16+ тыс",
        description: "километров ЛЭП",
      },
    ]);

    return {
      route,
      cards,
    };
  },
};
</script>

<style></style>
