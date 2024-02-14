<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__up">
          <div class="footer__company">
            <div class="logo">
              <img src="@/assets/images/logo-light.svg" alt="" />
            </div>
            <p>{{$t('footer_1')}}</p>
            <p>
              {{$t('footer_2')}}
            </p>
            <p>© ТОО Кокшетау Энерго. 2023 г.</p>
          </div>
          <div class="footer__list">
            <ul>
              <li>
                <router-link to="/">{{$t('home')}}</router-link>
              </li>
              <li>
                <router-link to="/about"> {{$t('about')}} </router-link>
              </li>
              <li>
                <router-link to="/news">{{$t('news')}}</router-link>
              </li>
              <li>
                <router-link to="/services"> {{$t('services')}} </router-link>
              </li>
              <li>
                <router-link to="/"> {{$t('procurement')}} </router-link>
              </li>
            </ul>
            <ul>
              <li>
                <span>{{$t('subsidiary')}}</span>
              </li>
              <li>
                <!-- <router-link to="/">
                  Выдача ТУ и подключение к сети
                </router-link> -->
              </li>
              <li>
                <!-- <router-link to="/">
                  Информация о запланированных прекращениях эл. энергии
                </router-link> -->
              </li>
              <li>
                <!-- <router-link to="/"> Полугодовой отчет </router-link> -->
              </li>
            </ul>
            <ul>
              <li>
                <span> {{$t('contacts')}} </span>
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
