<template>
  <div class="waxon_tm_copyright">
    <div class="container">
      <div class="copyright_inner">
        <ul>
          <li>
            <span>WAXON &copy; {{ new Date().getFullYear() }}</span>

            <span>
              <a
                href="https://themeforest.net/user/ib-themes"
                target="_blank"
                rel="noreferrer"
              >
                ib-themes
              </a>
              . All rights reserved.</span
            >
          </li>
          <!-- End li -->

          <li>
            <!-- 
            <span>Brook 103,</span>
            <span>90021 New York, USA</span>
            -->
          </li>
          <!-- End li -->

          <li>
            <span><a href="#">sebast.blum@gmail.com</a></span>
            <!-- <span>+77 033 442 55 57</span> -->
          </li>
          <!-- End li -->

          <li>
            <div class="social">
              <ul>
                <li v-for="(social, i) in socialList" :key="i">
                  <a :href="social.link" target="_blank">
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
};
</script>

<style lang="scss" scoped></style>
