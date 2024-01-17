<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__inner">
        <div class="contacts__header">
          <p class="title">Контакты</p>
          <input class="search" type="search" placeholder="Поиск" />
        </div>
        <div class="cards contacts__cards">
          <div class="card card-border" v-for="(item, i) in contacts" :key="i">
            <p class="title">
              {{ item.title }}
            </p>
            <ul>
              <li v-if="item.location">
                <img src="@/assets/images/location.svg" alt="" />
                <span>{{ item.location }}</span>
              </li>
              <li v-if="item.name">
                <img src="@/assets/images/user.svg" alt="" />
                <span>{{ item.name }}</span>
              </li>
              <li v-if="item.email">
                <img src="@/assets/images/mail.svg" alt="" />
                <span>{{ item.email }}</span>
              </li>
              <li v-if="item.phone">
                <img src="@/assets/images/phone.svg" alt="" />
                <span>{{ item.phone }}</span>
              </li>
            </ul>
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
    const contacts = ref([
      {
        title: 'ТОО "Кокшетау Энерго"',
        location: "г.Кокшетау, мкр.Центральный, 5",
        name: "Аралбаев Досымхан Алишевич",
        email: "tookenergo@mail.ru",
        phone: "8-716-2-422936",
      },
      {
        title: "Кокшетауские городские ЭС",
        location: "г.Кокшетау, ул.Кенесары89а",
        name: "Усембаев Данияр Абусагитович",
        email: "gorset2014@mail.ru",
        phone: "8-716-2-26-48-12",
      },
      {
        title: 'ТОО "Кокшетау Энерго"',
        location: "г.Щучинск, ул.Энергетиков 21",
        name: "Аралбаев Досымхан Алишевич",
        email: "vostok_mes@mail.ru",
        phone: "8-716-36-55032",
      },
      {
        title: 'ТОО "Кокшетау Энерго"',
        location: "г.Кокшетау, мкр.Центральный, 5",
        name: "Аралбаев Досымхан Алишевич",
        email: "tookenergo@mail.ru",
        phone: "8-716-2-422936",
      },
      {
        title: "Кокшетауские городские ЭС",
        location: "г.Кокшетау, ул.Кенесары89а",
        name: "Усембаев Данияр Абусагитович",
        email: "gorset2014@mail.ru",
        phone: "8-716-2-26-48-12",
      },
      {
        title: 'ТОО "Кокшетау Энерго"',
        location: "г.Щучинск, ул.Энергетиков 21",
        name: "Аралбаев Досымхан Алишевич",
        email: "vostok_mes@mail.ru",
        phone: "8-716-36-55032",
      },
      {
        title: 'ТОО "Кокшетау Энерго"',
        location: "г.Щучинск, ул.Энергетиков 21",
        name: "Аралбаев Досымхан Алишевич",
        email: "vostok_mes@mail.ru",
        phone: "8-716-36-55032",
      },
    ]);

    return {
      contacts,
    };
  },
};
</script>

<style></style>
