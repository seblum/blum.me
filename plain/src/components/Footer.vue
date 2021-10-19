<template>
  <div class="waxon_tm_copyright">
    <div class="container">
      <div class="copyright_inner">
        <ul>
          <li></li>
          <!-- End li -->

          <li>
            <div class="social">
              <ul>
                <li v-for="(social, i) in socialList" :key="i">
                  <a
                    :href="social.link"
                    target="_blank"
                    v-bind:class="EvAnSocials"
                    @click="EvAnSocials"
                  >
                    <span class="first"
                      ><img class="svg" :src="social.icon" alt="social icon"
                    /></span>
                    <span class="second"
                      ><img class="svg" :src="social.icon" alt="social icon"
                    /></span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li></li>
          <!-- End li -->
        </ul>
      </div>
      <!-- End .copyright_inner -->
    </div>
    <!-- End .container -->
  </div>
  <!-- End .waxon_tm_copyright -->
</template>

<script>
export default {
  data() {
    return {
      socialList: [
        {
          icon: require("../assets/img/svg/social/github.svg"),
          link: "https://github.com/seblum",
        },
        {
          icon: require("../assets/img/svg/social/linkedin.svg"),
          link: "https://www.linkedin.com/in/sebastian-blum-7a7246184/",
        },
      ],
    };
  },
  methods: {
    EvAnSocials() {
      this.$gtag.event("link-socials-click", {
        event_category: "documentation",
        event_label: "Socials link button clicked",
        value: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
