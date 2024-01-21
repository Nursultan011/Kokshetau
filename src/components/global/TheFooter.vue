<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__up">
          <div class="footer__company">
            <div class="logo">
              <img src="@/assets/images/logo-light.svg" alt="" />
            </div>
            <p>Ваш партнер в надежности и эффективности</p>
            <p>
              Разработано с ❤️️ в
              <a href="">digital lab</a>
            </p>
            <p>© ТОО Кокшетау Энерго. 2023 г.</p>
          </div>
          <div class="footer__list">
            <ul>
              <li>
                <router-link to="/">Главная</router-link>
              </li>
              <li>
                <router-link to="/about"> О компании </router-link>
              </li>
              <li>
                <router-link to="/news">Новости</router-link>
              </li>
              <li>
                <router-link to="/services"> Услуги </router-link>
              </li>
              <li>
                <router-link to="/"> Закупки </router-link>
              </li>
            </ul>
            <ul>
              <li>
                <span>Для потребителя</span>
              </li>
              <li>
                <router-link to="/">
                  Выдача ТУ и подключение к сети
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  Информация о запланированных прекращениях эл. энергии
                </router-link>
              </li>
              <li>
                <router-link to="/"> Полугодовой отчет </router-link>
              </li>
            </ul>
            <ul>
              <li>
                <span> Контакты </span>
              </li>
              <li>
                <a href="tel:+77162422936"> 8-716-2-422936 </a>
              </li>
              <li>
                <a href="tel:+77162422936"> 8-716-2-422936 </a>
              </li>
              <li>
                <a href="mailto:tookenergo@mail.ru"> tookenergo@mail.ru </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {};
  },
};
</script>

<style></style>
