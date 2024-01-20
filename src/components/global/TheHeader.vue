<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link to="/" class="logo">
          <img src="@/assets/images/logo.svg" alt="" />
        </router-link>
        <nav>
          <ul>
            <li v-for="(item, i) in menu" :key="i">
              <span @click="redirect(item.link)">{{ item.name }}</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const menu = ref([
      {
        name: "О компании",
        link: "/about",
      },
      {
        name: "Услуги",
        link: "/services",
      },
      {
        name: "Для потребителя",
        link: "/",
        dropdown: true,
      },
      {
        name: "Новости",
        link: "/news",
      },
      {
        name: "Закупки",
        link: "/about",
      },
      {
        name: "Вакансии",
        link: "/vacancy",
      },
      {
        name: "Контакты",
        link: "/contacts",
      },
    ]);

    const redirect = (event) => {
      if (event) {
        router.push({ path: event });
      }
    };

    return {
      router,
      menu,
      redirect,
    };
  },
};
</script>

<style></style>
