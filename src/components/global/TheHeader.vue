<template>
  <header v-if="!isLoading" class="header" :class="{'header-mobile' : isMenuOpen}">
    <div class="container-fluid">
      <div class="header__inner">
        <router-link to="/" class="logo">
          <img src="@/assets/images/logo.svg" alt="" />
        </router-link>
        <nav :class="{'nav-mobile' : isMenuOpen }">
          <ul>
            <li v-for="(item, i) in menu" :key="i" :class="{'active': route.path == item.link || route.path.includes('subsidiary') && item.dropdown}">
              <span v-if="!item.dropdown" @click="redirect(item.link)">{{ t(item.name) }}</span>
              <span v-else @click="activeDropdown = !activeDropdown" :class="{'active' : activeDropdown === true}">
                {{ t(item.name) }}
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M5.5 7.5L10.5 12.5L15.5 7.5" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>

              <div v-if="item.dropdown === true && subMenu && activeDropdown" class="dropdown">
                <span :class="{'active': route.path == item.link + drp.id}" @click="redirect(item.link + drp.id)" v-for="(drp, n) in subMenu" :key="n">
                  {{ drp.title }}
                </span>
              </div>
            </li>
          </ul>
        </nav>
        <div class="header__flex">
          <!-- <div class="emblem">
            <img src="../../assets/images/gerb.svg" alt="">
          </div> -->
          <div class="header__language">
            <div
              class="language"
              @mouseover="openDropdownLang"
              @mouseleave="closeDropdownLang"
            >
              <div class="language-wrap">
                <span>{{ locale }}</span>
                <svg
                  :class="{'active-arrow' : isDropdownOpenLang}"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#555555"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <ul class="language-list" v-show="isDropdownOpenLang">
                <li
                  v-for="lang in availableLanguages"
                  :key="lang"
                  @click="changeLanguage(lang)"
                  :class="{ 'active-lang': lang == locale }"
                >
                  {{ lang }}
                </li>
              </ul>
            </div>
          </div>
          <div class="burger-menu" @click="isMenuOpen = !isMenuOpen">
            <svg
              v-if="isMenuOpen === false"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="#344054"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import {
  SUPPORT_LOCALES as supportLocales,
  setI18nLanguage,
} from "@/helpers/i18n";
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const isMenuOpen = ref(false);
    const isDropdownOpenLang = ref(false);
    const availableLanguages = ["en", "ru", "kz"];
    const isLoading = ref(true);
    const activeDropdown = ref(false);

    const { t, locale } = useI18n({ useScope: "global" });

    const subMenu = computed(() => store.state.main.main.data.subsidiaries);

    const menu = ref([
      {
        name: "about",
        link: "/about",
      },
      {
        name: "services",
        link: "/services",
      },
      {
        name: "subsidiary",
        link: "/consumer/",
      },
      {
        name: "subsidiaries",
        link: "/subsidiary/",
        dropdown: true,
      },
      {
        name: "news",
        link: "/news",
      },
      {
        name: "procurement",
        link: "/procurement",
      },
      {
        name: "vacancies",
        link: "/vacancy",
      },
      {
        name: "contacts",
        link: "/contacts",
      },
    ]);

    const redirect = (event) => {
      if (event) {
        router.push({ path: event });
      }

      activeDropdown.value = false;
      isMenuOpen.value = false;
    };

    const openDropdownLang = () => {
      isDropdownOpenLang.value = true;
    };

    const closeDropdownLang = () => {
      isDropdownOpenLang.value = false;
    };

    const changeLanguage = (lang) => {
      setI18nLanguage(lang);
      isDropdownOpenLang.value = false;
    };

    onMounted(async () => {
      await store.dispatch("main/getMain").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      menu,
      router,
      route,
      redirect,
      isMenuOpen,
      openDropdownLang,
      closeDropdownLang,
      availableLanguages,
      isDropdownOpenLang,
      changeLanguage,
      locale,
      isLoading,
      subMenu,
      activeDropdown,
      t,
    };
  },
};
</script>

<style></style>
