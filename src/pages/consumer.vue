<template>
  <loader v-if="isLoading" />
  <div v-else>
    <section class="sub consumer">
      <div class="container">
        <div class="sub__inner">
          <h1 class="title">
            Для потребителя
          </h1>
          <div class="sub__wrap">
            <div class="sub__nav">
              <select v-model="selectedCategory" @change="select(selectedCategory)" name="" id="">
                <option :value="category" v-for="(category, index) in Object.values(consumer)">
                  {{ category.content.title }}
                </option>
              </select>
              <ul>
                <li :class="{ 'active' : category.content.title == activeTab.content.title }" v-for="(category, index) in Object.values(consumer)" @click="select(category)">
                  {{ category.content.title }}
                </li>
              </ul>
            </div>
            <div class="sub__content" v-if="activeTab && activeTab.content">
              <h2
                class="title"
                v-if="activeTab && activeTab.content && activeTab.content.title">
                {{ activeTab.content.title }}
              </h2>
              <p class="p2" v-if="activeTab && activeTab.content && activeTab.content.content" v-html="activeTab.content.content">
              </p>
              <a :href="parseFile(activeTab.content.file_uri, 'link')" target="_blank" class="pdf" v-if="activeTab.content.file_uri">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(activeTab.content.file_uri, 'name') }}
                  </span>
              </a>
              <a :href="parseFile(activeTab.content.first_file_uri, 'link')" target="_blank" class="pdf" v-if="activeTab.content.first_file_uri && activeTab.content.first_file_uri !== '[]'">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(activeTab.content.first_file_uri, 'name') }}
                  </span>
              </a>
              <a :href="parseFile(activeTab.content.second_file_uri, 'link')" target="_blank" class="pdf" v-if="activeTab.content.second_file_uri && activeTab.content.second_file_uri !== '[]'">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(activeTab.content.second_file_uri, 'name') }}
                  </span>
              </a>
              <a :href="parseFile(activeTab.content.third_file_uri, 'link')" target="_blank" class="pdf" v-if="activeTab.content.third_file_uri && activeTab.content.third_file_uri !== '[]'">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(activeTab.content.third_file_uri, 'name') }}
                  </span>
              </a>
              <a :href="parseFile(activeTab.content.fourth_file_uri, 'link')" target="_blank" class="pdf" v-if="activeTab.content.fourth_file_uri && activeTab.content.fourth_file_uri !== '[]'">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(activeTab.content.fourth_file_uri, 'name') }}
                  </span>
              </a>
              <div class="wrap" v-if="activeTab.values" v-for="item in activeTab.values" :key="item.id">
                <p class="h2" v-if="item.title">{{ item.title }}</p>
                <a :href="parseFile(item.file_uri, 'link')" target="_blank" class="pdf" v-if="item.file_uri">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(item.file_uri, 'name') }}
                  </span>
                </a>
                <a :href="parseFile(item.first_file_uri, 'link')" target="_blank" class="pdf" v-if="item.first_file_uri && item.first_file_uri !== '[]'">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(item.first_file_uri, 'name') }}
                  </span>
                </a>
                <a :href="parseFile(item.second_file_uri, 'link')" target="_blank" class="pdf" v-if="item.second_file_uri && item.second_file_uri !== '[]'">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(item.second_file_uri, 'name') }}
                  </span>
                </a>
                <a :href="parseFile(item.third_file_uri, 'link')" target="_blank" class="pdf" v-if="item.third_file_uri && item.third_file_uri !== '[]'">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(item.third_file_uri, 'name') }}
                  </span>
                </a>
                <a :href="parseFile(item.fourth_file_uri, 'link')" target="_blank" class="pdf" v-if="item.fourth_file_uri && item.fourth_file_uri !== '[]'">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(item.fourth_file_uri, 'name') }}
                  </span>
                </a>
                <a :href="parseFile(item.fifth_file_uri, 'link')" target="_blank" class="pdf" v-if="item.fifth_file_uri && item.fifth_file_uri !== '[]'">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(item.fifth_file_uri, 'name') }}
                  </span>
                </a>
                <a :href="parseFile(item.sixth_file_uri, 'link')" target="_blank" class="pdf" v-if="item.sixth_file_uri && item.sixth_file_uri !== '[]'">
                  <img src="../assets/images/pdf2.svg" alt="">
                  <span>
                    {{ parseFile(item.sixth_file_uri, 'name') }}
                  </span>
                </a>
                <div class="html" v-html="item.description"></div>
              </div>
              <div class="contacts-table-wrap">
                <table class="contacts-table" v-if="activeTab.contacts">
                <thead>
                  <th>
                    <td>
                      Наименование
                    </td>
                  </th>
                  <th>
                    <td>
                      Адрес
                    </td>
                  </th>
                  <th>
                    <td>
                      Номер телефона
                    </td>
                  </th>
                  <th>
                    <td>
                      Email address
                    </td>
                  </th>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in activeTab.contacts" :key="i">
                    <td>{{ item.title }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.phone_number }}</td>
                    <td>{{ item.email }}</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import Loader from '@/components/global/Loader.vue';
import { useRoute } from 'vue-router';
import { parseFile } from "@/helpers/imageUrl";
import { useI18n } from "vue-i18n";

export default {
  components: { Loader },
  setup() {
    const route = useRoute();
    const store = useStore();
    const isLoading = ref(true);

    const { locale } = useI18n({ useScope: "global" });

    const consumer = computed(() => store.state.main.consumer.data);

    const activeTab = ref({});

    onMounted(async () => {
      await store.dispatch("main/getConsumer").then((res) => {
        isLoading.value = false;
        if (consumer.value && Object.values(consumer.value).length > 0) {
          activeTab.value = Object.values(consumer.value)[0];
        }
      });
    });

    watch(locale, async (val) => {
      isLoading.value = true;

      await store.dispatch("main/getConsumer").then((res) => {
        isLoading.value = false;
        if (consumer.value && Object.values(consumer.value).length > 0) {
          activeTab.value = Object.values(consumer.value)[0];
        }
      });
    });

    const select = (data) => {
      activeTab.value = data;
    }

    return {
      store,
      isLoading,
      consumer,
      select,
      activeTab,
      parseFile
    };
  },
};
</script>

<style>

</style>