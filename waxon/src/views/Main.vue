<template>
  <div>
    <Header />
    <!-- End Header -->

    <Slider />
    <!-- End Slider -->

    <About />
    <!-- End About -->

    <div class="waxon_tm_portoflio" id="cv">
      <CV />
    </div>
    <!-- End CV -->

    <div class="waxon_tm_contact" id="contact">
      <div class="bg_image"></div>
      <div class="container">
        <div class="contact_inner">
          <div class="waxon_tm_main_title">
            <div class="title">
              <h3>Get in Touch<span class="bg">Contact</span></h3>
            </div>
          </div>
          <div class="desc">
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div class="wrapper">
            <div class="left">
              <Contact />
            </div>
            <div class="right">
              <!-- <Map /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End contact -->

    <Footer />

    <!-- End End Footer -->
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/slider/SliderSeven.vue";
import About from "../components/About.vue";
import CV from "../components/CV.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Slider,
    About,
    CV,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
