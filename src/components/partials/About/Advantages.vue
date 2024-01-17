<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__inner">
        <div class="center">
          <p class="title">Наши Преимущества</p>
        </div>
        <div class="cards advantages__cards">
          <div class="card" v-for="(item, i) in advantages" :key="i">
            <div class="icon">
              {{ item.icon }}
            </div>
            <p class="title">
              {{ item.title }}
            </p>
            <p class="description">
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
export default {
  setup() {
    const advantages = ref([
      {
        icon: "",
        title: "Техническая Экспертиза",
        description:
          "Обладая опытом и навыками, мы занимаемся обслуживанием электрических сетей напряжением 0,4-110 кВ, обеспечивая стабильность и надежность энергоснабжения.",
      },
      {
        icon: "",
        title: "Полный Цикл Услуг",
        description:
          "От покупки, транспортировки и распределения электроэнергии до предоставления услуг по ремонту средств электроизмерения и подстанций – мы охватываем полный цикл энергетических решений.",
      },
      {
        icon: "",
        title: "Профессионализм и Гарантии",
        description:
          "Владея лицензиями и обладая более чем двадцатилетним опытом, мы гарантируем высший стандарт качества и безопасности.",
      },
    ]);

    return {
      advantages,
    };
  },
};
</script>

<style></style>
