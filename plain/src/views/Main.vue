<template>
  <div>
    <div class="waxon_tm_main .upper">
      <h2>Sebastian Blum</h2>
    </div>

    <About />
    <Footer />
  </div>
</template>

<script>
//import Header from "../components/StaticHeader.vue";
//import Slider from "../components/SliderSeven.vue";
import About from "../components/About.vue";
//import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    About,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.waxon_tm_main {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  text-align: center;
  padding: 40px 0px 10px 0px;
}
</style>
