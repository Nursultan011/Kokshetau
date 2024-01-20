<template>
  <section class="enterprises">
    <div class="container">
      <div class="enterprises__inner">
        <p class="title">Дочерние предприятия</p>
        <div class="enterprises__cards">
          <div
            class="enterprises__card"
            v-for="(item, i) in enterprises"
            :key="i"
          >
            <div class="icon">
              <img src="@/assets/images/enterprisesIcon.svg" alt="" />
            </div>
            <p class="title" v-if="item.title">
              {{ item.title }}
            </p>
            <router-link class="button-txt" to="/">Подробнее</router-link>
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
    const enterprises = ref([
      {
        logo: "",
        title: "ТОО 'КОКШЕТАУ ЭНЕРГО ЦЕНТР'",
        location: "Акмолинская область г.Кокшетау м-н Центральный 5",
        phone: "8(716-2) 42-22-30, 42-29-36",
        mobile_phone: "8(716-2) 42-39-39",
        services_title: "Обслуживает на территории Акмолинской области:",
        services__list: [
          "г. Кокшетау",
          "Зерендинский район",
          "Энбекшильдерский район",
          "Щучинский район",
          "г.Щучинск",
        ],
      },
      {
        logo: "",
        title: "ТОО 'СОЛТҮСТІК ЭНЕРГО ОРТАЛЫҚ'",
        location: "Северо-Казахстанская область г.Тайынша ул.Южная 1",
        phone: "8(715-36) 2-11-77",
        mobile_phone: "8(715-36) 2-15-49, 2-19-64",
        services_title:
          "Обслуживает на территории Северо-Казахстанской области:",
        services__list: [
          "г. Кокшетау",
          "Зерендинский район",
          "Энбекшильдерский район",
          "Щучинский район",
          "г.Щучинск",
        ],
      },
    ]);

    return {
      enterprises,
    };
  },
};
</script>

<style></style>
