<template>
  <div class="container">
    <div class="positon-relative waxon_tm_main_title">
      <div class="title">
        <h3>Curriculum Vitae<span class="bg">CV</span></h3>
      </div>
      <!-- End shane_tm_title -->
    </div>

    <div class="yui-gf">
      <div class="yui-u first">
        <h2>Experience</h2>
      </div>
      <!--// .yui-u -->

      <div class="yui-u">
        <div class="job">
          <h2>Facebook</h2>
          <h3>Senior Interface Designer</h3>
          <h4>2005-2007</h4>
          <p>
            Intrinsicly enable optimal core competencies through corporate
            relationships. Phosfluorescently implement worldwide vortals and
            client-focused imperatives. Conveniently initiate virtual paradigms
            and top-line convergence.
          </p>
        </div>

        <div class="job">
          <h2>Apple Inc.</h2>
          <h3>Senior Interface Designer</h3>
          <h4>2005-2007</h4>
          <p>
            Progressively reconceptualize multifunctional "outside the box"
            thinking through inexpensive methods of empowerment. Compellingly
            morph extensive niche markets with mission-critical ideas.
            Phosfluorescently deliver bricks-and-clicks strategic theme areas
            rather than scalable benefits.
          </p>
        </div>

        <div class="job">
          <h2>Microsoft</h2>
          <h3>Principal and Creative Lead</h3>
          <h4>2004-2005</h4>
          <p>
            Intrinsicly transform flexible manufactured products without
            excellent intellectual capital. Energistically evisculate orthogonal
            architectures through covalent action items. Assertively incentivize
            sticky platforms without synergistic materials.
          </p>
        </div>

        <div class="job last">
          <h2>International Business Machines (IBM)</h2>
          <h3>Lead Web Designer</h3>
          <h4>2001-2004</h4>
          <p>
            Globally re-engineer cross-media schemas through viral methods of
            empowerment. Proactively grow long-term high-impact human capital
            and highly efficient innovation. Intrinsicly iterate excellent
            e-tailers with timely e-markets.
          </p>
        </div>
      </div>
      <!--// .yui-u -->
    </div>
    <!--// .yui-gf -->
    <!-- End Professional Experience -->

    <div class="name">
      <h3>Education<span class="bg">About</span></h3>
      <span class="job">Machine Learning Engineer &amp; Daydreamer</span>
    </div>
    <div class="text">
      <p>
        My name is Sebastian. I am a Machine Learning Engineer, and I'm very
        passionate and dedicated to my work.
      </p>
      <p>
        With 1+ years experience as a professional, I have acquired the skills
        and knowledge necessary to make your project a success. I enjoy every
        step of the design process, from discussion and collaboration.
      </p>
    </div>
    <div class="waxon_tm_button">
      <button class="ib-button" @click="showModal">
        <span>Learn More</span>
      </button>
    </div>
    <!-- End Education -->

    <!-- Start Modalbox -->
    <transition name="fade">
      <!-- Modal -->
      <div
        :class="{ 'modal-mask': isActive }"
        id="modal"
        @click="closeModal"
        v-if="isVisible"
      >
        <div
          class="
            modal-dialog
            modal-dialog-centered
            modal-dialog-scrollable
            modal-user
          "
          @click.stop
        >
          <div class="modal-content">
            <div class="waxon_tm_modalbox_about">
              <div class="close" @click="closeModal">
                <img
                  class="svg"
                  src="../assets/img/svg/cancel.svg"
                  alt="cancel-img"
                />
              </div>
              <!-- End .close -->
              <div class="my_box">
                <div class="left">
                  <div class="about_title">
                    <h3>Photography Skills</h3>
                  </div>
                  <!-- End .abut_title -->
                  <div class="waxon_progress">
                    <div class="progress_inner">
                      <span
                        ><span class="label">Wordpress &amp; PHP</span
                        ><span class="number">95%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width: 95%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                    <div class="progress_inner">
                      <span
                        ><span class="label">Javascript &amp; React</span
                        ><span class="number">80%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width: 80%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                    <div class="progress_inner">
                      <span
                        ><span class="label">HTML &amp; CSS</span
                        ><span class="number">90%</span
                        ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width: 90%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                  </div>
                  <!-- End .waxon_progress -->
                </div>
                <!-- End .left -->
                <div class="right">
                  <div class="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  <div class="waxon_progress">
                    <div class="progress_inner">
                      <span
                        ><span class="label">English</span
                        ><span class="number">95%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width: 95%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Japanese</span
                        ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width: 90%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Arabian</span
                        ><span class="number">85%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width: 85%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End .right -->
              </div>
              <div class="counter">
                <div class="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div class="list_inner">
                      <h3>777+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <h3>3K</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                <!-- End ul -->
              </div>
              <!-- End .counter -->
              <div class="partners">
                <div class="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div>
              <!-- End .partner -->
            </div>
            <!-- End .tokyo_tm_modalbox_about -->
          </div>
        </div>
      </div>
    </transition>
    <!-- End Modalbox -->
  </div>
</template>

<script>
import Brand from "./Brand.vue";
export default {
  components: {
    Brand,
  },
  data() {
    return {
      active: false,
      activetab: 1,
      index: null,
      isActive: false,
      isVisible: false,
    };
  },
  methods: {
    showModal: function () {
      this.isActive = true;
      this.isVisible = true;
    },
    closeModal: function () {
      this.isActive = false;
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.yui-gf {
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #ccc;
}
.job {
  position: relative;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #ccc;
}
.job h4 {
  position: absolute;
  top: 0.35em;
  right: 0;
}
.job p {
  margin: 0.75em 0 3em 0;
}

.yui-gf .yui-u {
  width: 80.2%;
}
.yui-gf div.first {
  width: 12.3%;
}
</style>
