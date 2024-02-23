<template>
  <loader v-if="isLoading" />
  <section v-else class="contacts">
    <div class="container">
      <div class="contacts__inner">
        <div class="contacts__header" v-if="contacts && contacts.content">
          <p class="title" v-if="contacts.content.title">
            {{ contacts.content.title }}
          </p>
          <!-- <input class="search" type="search" placeholder="Поиск" /> -->
        </div>
        <div class="cards contacts__cards" v-if="contacts && contacts.value">
          <div
            class="card card-border"
            v-for="(item, i) in contacts.value"
            :key="i"
          >
            <p class="title">
              {{ item.title }}
            </p>
            <ul>
              <li v-if="item.address">
                <img src="@/assets/images/location.svg" alt="" />
                <span>{{ item.address }}</span>
              </li>
              <li v-if="item.contact_name">
                <img src="@/assets/images/user.svg" alt="" />
                <span>{{ item.contact_name }}</span>
              </li>
              <li v-if="item.contact_email">
                <img src="@/assets/images/mail.svg" alt="" />
                <span>{{ item.contact_email }}</span>
              </li>
              <li v-if="item.contact_phone">
                <img src="@/assets/images/phone.svg" alt="" />
                <span>{{ item.contact_phone }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import Loader from '@/components/global/Loader.vue';
import { useI18n } from "vue-i18n";

export default {
  components: { Loader },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const { locale } = useI18n({ useScope: "global" });

    const contacts = computed(() => store.state.main.contacts.data);

    onMounted(async () => {
      await store.dispatch("main/getContacts").then((res) => {
        isLoading.value = false;
      });
    });

    watch(locale, async (val) => {
      isLoading.value = true;

      await store.dispatch("main/getContacts").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      isLoading,
      contacts,
    };
  },
};
</script>

<style></style>
