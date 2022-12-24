<template>
  <div class="waxon_tm_about" id="about">
    <div class="container">
      <div class="about_inner">
        <div class="left">
          <img
            class="thumbnail"
            src="../assets/img/about/p1.jpg"
            alt="man with sunglass"
          />
        </div>
        <!-- End left thumbnail -->
        <div class="right">
          <div class="name">
            <!-- <h3>Sebastian Blum<span class="bg">About</span></h3> -->
            <span class="job">Hi there! 👋🏼</span>
          </div>
          <div class="text">
            <p>
              I’m Sebastian – A data enthusiast with an academic background in
              cognitive science and human factors, currently focusing my work on
              <a href="/mlops" >
                MLOps
              </a> and deep learning.
            </p>
            <p>
              I am curious about AI and its various interpretations and
              implementations in academia and industry.
            </p>
            <p>
              Want to get in touch? Just drop an email to
              <a
                href="mailto:hello@seblum.me"
                v-bind:class="EvAnMail"
                @click="EvAnMail"
              >
                hello@seblum.me
              </a>
            </p>
          </div>
        </div>
        <!-- End right content -->
      </div>
    </div>
  </div>
  <!-- End about -->
</template>

<script>
export default {
  methods: {
    EvAnMail() {
      this.$gtag.event("link-email-click", {
        event_category: "documentation",
        event_label: "Email link clicked",
        value: 1,
      });
    },
  },
};
</script>

<style scoped>
a:link {
  color: rgb(97, 113, 139);
  background-color: transparent;
  text-decoration: none;
}
</style>