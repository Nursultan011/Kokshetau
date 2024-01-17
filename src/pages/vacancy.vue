<template>
  <section class="vacancy">
    <div class="container">
      <div class="vacancy__inner">
        <div class="content">
          <p class="title">Вакансии</p>
          <p class="description">
            Присоединяйтесь к команде ТОО "Кокшетау Энерго" — ведущему
            региональному поставщику энергетических услуг, где ваш талант найдет
            возможность влиять на энергетическую стабильность региона.
          </p>
          <div class="vacancy__cards">
            <div class="vacancy__card" v-for="(item, i) in vacancies" :key="i">
              <p class="vacancy__title">{{ item.position }}</p>
              <p class="vacancy__description">{{ item.description }}</p>
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
                <li v-if="item.expirence">
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
                  <span>{{ item.expirence }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form action="" class="form">
          <div class="two">
            <div class="text-field">
              <label for="">Имя</label>
              <input required type="text" placeholder="Аскар" />
            </div>
            <div class="text-field">
              <label for="">Фамилия</label>
              <input required type="text" placeholder="Аскаров" />
            </div>
            <div class="text-field">
              <label for="">Email</label>
              <input required type="email" placeholder="you@company.com" />
            </div>
            <div class="text-field">
              <label for="">Номер телефона</label>
              <input required type="email" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
          <div class="text-field">
            <label for="">Желаемая позиция</label>
            <input
              required
              type="email"
              placeholder="Введите желаемую позицию"
            />
          </div>
          <div class="text-field">
            <label for="">Сопроводительное письмо</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Напишите..."
              required
            ></textarea>
          </div>
          <button class="button">Отправить</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const vacancies = ref([
      {
        position: "Инженер радиосвязи",
        description: "Образование высшее-техническое",
        location: "Кокшетау",
        expirence: "Стаж не менее 5 лет",
      },
      {
        position: "Инженер радиосвязи",
        description: "Образование высшее-техническое",
        location: "Кокшетау",
        expirence: "Стаж не менее 5 лет",
      },
      {
        position: "Инженер радиосвязи",
        description: "Образование высшее-техническое",
        location: "Кокшетау",
        expirence: "Стаж не менее 5 лет",
      },
      {
        position: "Инженер радиосвязи",
        description: "Образование высшее-техническое",
        location: "Кокшетау",
        expirence: "Стаж не менее 5 лет",
      },
      {
        position: "Инженер радиосвязи",
        description: "Образование высшее-техническое",
        location: "Кокшетау",
        expirence: "Стаж не менее 5 лет",
      },
      {
        position: "Инженер радиосвязи",
        description: "Образование высшее-техническое",
        location: "Кокшетау",
        expirence: "Стаж не менее 5 лет",
      },
      {
        position: "Инженер радиосвязи",
        description: "Образование высшее-техническое",
        location: "Кокшетау",
        expirence: "Стаж не менее 5 лет",
      },
    ]);

    return {
      vacancies,
    };
  },
};
</script>

<style></style>
