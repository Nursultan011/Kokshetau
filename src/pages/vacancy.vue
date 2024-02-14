<template>
   <loader v-if="isLoading" />
  <section v-else class="vacancy">
    <div class="container">
      <div class="vacancy__inner">
        <div class="content" v-if="vacancies && vacancies.content">
          <p class="title" v-if="vacancies.content.title">
            {{ vacancies.content.title }}
          </p>
          <p class="description"  v-if="vacancies.content.description">
            {{ vacancies.content.description }}
          </p>
          <div class="vacancy__cards" v-if="vacancies && vacancies.value">
            <div class="vacancy__card" v-for="(item, i) in vacancies.value" :key="i">
              <p class="vacancy__title" v-if="item.title">{{ item.title }}</p>
              <p class="vacancy__description" v-if="item.description" v-html="item.description"></p>
              <p class="vacancy__description" v-if="item.salary">
                {{ item.salary }}
              </p>
              <ul>
                <li v-if="item.location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.9987 10.4166C11.3794 10.4166 12.4987 9.29734 12.4987 7.91663C12.4987 6.53591 11.3794 5.41663 9.9987 5.41663C8.61799 5.41663 7.4987 6.53591 7.4987 7.91663C7.4987 9.29734 8.61799 10.4166 9.9987 10.4166Z"
                      stroke="#98A2B3"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.9987 18.3333C11.6654 15 16.6654 12.8485 16.6654 8.33329C16.6654 4.65139 13.6806 1.66663 9.9987 1.66663C6.3168 1.66663 3.33203 4.65139 3.33203 8.33329C3.33203 12.8485 8.33203 15 9.9987 18.3333Z"
                      stroke="#98A2B3"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>{{ item.location }}</span>
                </li>
                <li v-if="item.experience">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_184_4054)">
                      <path
                        d="M10.0013 4.99996V9.99996L13.3346 11.6666M18.3346 9.99996C18.3346 14.6023 14.6037 18.3333 10.0013 18.3333C5.39893 18.3333 1.66797 14.6023 1.66797 9.99996C1.66797 5.39759 5.39893 1.66663 10.0013 1.66663C14.6037 1.66663 18.3346 5.39759 18.3346 9.99996Z"
                        stroke="#98A2B3"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_184_4054">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{{ item.experience }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form @submit.prevent="send" class="form">
          <div class="two">
            <div class="text-field">
              <label for="name">{{ $t('name') }}</label>
              <input id="name" v-model="formData.name" required type="text" placeholder="Аскар" />
            </div>
            <div class="text-field">
              <label for="surname">{{$t('surname')}}</label>
              <input id="surname" v-model="formData.surname" required type="text" placeholder="Аскаров" />
            </div>
            <div class="text-field">
              <label for="email">Email</label>
              <input id="email" v-model="formData.email" required type="email" placeholder="you@company.com" />
            </div>
            <div class="text-field">
              <label for="phone">{{$t('mobile_number')}}</label>
              <input id="phone" v-model="formData.phone" required type="tel" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
          <div class="text-field">
            <label for="position">{{$t('position')}}</label>
            <input
              required
              id="position"
              type="text"
              :placeholder="$t('position_placeholder')"
              v-model="formData.position"
            />
          </div>
          <div class="text-field">
            <label for="letter">{{$t('letter')}}</label>
            <textarea
              name=""
              id="letter"
              cols="30"
              rows="10"
              :placeholder="$t('letter_placeholder')"
              required
              v-model="formData.letter"
            ></textarea>
          </div>
          <button type="submit" class="button">{{ $t('send') }}</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from 'vuex';
import Loader from '@/components/global/Loader.vue';

export default {
  components: {
    Loader
  },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const vacancies = computed(() => store.state.main.vacancies.data);

    onMounted(async () => {
      await store.dispatch("main/getVacancies").then((res) => {
        isLoading.value = false;
      });
    });

    const formData = ref({
      name: "",
      surname: "",
      email: "",
      phone: "",
      position: "",
      letter: ""
    })

    const send = async() => {
      isLoading.value = true;

      await store.dispatch("main/sendVacancy", formData.value).then((res) => {
        formData.value = {
          name: "",
          surname: "",
          email: "",
          phone: "",
          position: "",
          letter: ""
        };

        isLoading.value = false;
      }).catch((err) => {
        isLoading.value = false;
      })
    }

    return {
      store,
      isLoading,
      vacancies,
      formData,
      send
    };
  },
};
</script>

<style></style>
