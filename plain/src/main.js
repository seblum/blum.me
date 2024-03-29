import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import CoolLightBox from "vue-cool-lightbox";
import ScrollFixedHeader from "vuejs-scroll-fixed-header";
import VueScrollactive from "vue-scrollactive";
import VueParticles from "vue-particles";
import BackTop from "@mlqt/vue-back-top";
import VueScrollReveal from "vue-scroll-reveal";
import Vue2TouchEvents from "vue2-touch-events";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import "./assets/scss/style.scss";
//add googleanalytics
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "G-E5LD5KD037" }
});

Vue.use(CoolLightBox);
Vue.use(BackTop);
Vue.use(Vue2TouchEvents);
Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal",
  duration: 1500,
  scale: 1,
  distance: "100px",
  mobile: true,
});
Vue.use(ScrollFixedHeader);
Vue.use(VueParticles);
Vue.use(VueScrollactive);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
