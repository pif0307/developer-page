<template>
  <div>
    <div id="alpha-target">
      <div id="background"></div>
    </div>

    <div
      class="content d-flex align-center justify-center flex-column"
      style="height: 100vh"
    >
      <div class="d-flex">
        <div id="anim-text-parent" class="d-flex">
          <div id="anim-text-text">
            <div
              class="text-h2 font-weight-bold blue--text mb-2 text--lighten-3"
              v-for="(text, index) in texts"
              :key="index"
            >
              {{ text }}
            </div>
          </div>
        </div>
        <div class="text-h2 font-weight-bold white--text">를 더욱 아름답게</div>
      </div>
      <div class="d-flex mt-5">
        <div class="text-h6 font-weight-medium white--text">
          Make The &nbsp;
        </div>

        <div id="anim-text-en-parent">
          <div id="anim-text-en-text" class="d-flex flex-column align-center">
            <div
              class="text-h6 font-weight-medium blue--text text--lighten-3"
              v-for="(text, index) in texts_en"
              :key="index"
            >
              {{ text }}
            </div>
          </div>
        </div>

        <div class="text-h6 font-weight-medium white--text">
          &nbsp; More Beautiful
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosY: 0,
      texts: [
        "세계",
        "예술",
        "사랑",
        "인생",
        "하늘",
        "운명",
        "소원",
        "청춘",
        "시작",
        "신뢰",
      ],

      texts_en: [
        "World",
        "Art",
        "Love",
        "Life",
        "Sky",
        "Fate",
        "Wish",
        "Youth",
        "Start",
        "Trust",
      ],
    };
  },

  methods: {
    onScroll(e) {
      this.scrollPosY = e.target.documentElement.scrollTop;
      console.log(this.scrollPosY);
    },
  },

  mounted() {
    document.addEventListener("scroll", this.onScroll);
  },
};
</script>

<style>
.content > div {
  z-index: 1;
}

#anim-text-parent {
  height: 70px;
  overflow-y: hidden;
  display: block;
}

#anim-text-text {
  transform: translateY(-1500px);

  animation: anim-text-position-keyframes 5s;
  animation-fill-mode: forwards;
}

@keyframes anim-text-position-keyframes {
  from {
    transform: translateY(-1400px);
  } /* 애니메이션 높이 */
  to {
    transform: translateY(0);
  }
}

#anim-text-en-parent {
  height: 35px;
  overflow-y: hidden;
  display: block;
}

#anim-text-en-text {
  transform: translateY(-750px);

  animation: anim-text-en-position-keyframes 5s;
  animation-fill-mode: forwards;
}

@keyframes anim-text-en-position-keyframes {
  from {
    transform: translateY(-650px);
  } /* 애니메이션 높이 */
  to {
    transform: translateY(0);
  }
}

#alpha-target {
  animation: 3s circle ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;

  position: fixed;
  -webkit-clip-path: circle(0%);
  clip-path: circle(0%);
  mask-size: cover;
  mask-position: center;
  width: 100%;
  height: 100%;
  z-index: 0;
}

@keyframes circle {
  0% {
    -webkit-clip-path: circle(0%);
    clip-path: circle(0%);
  }
  20% {
    -webkit-clip-path: circle(10%);
    clip-path: circle(10%);
  }
  100% {
    -webkit-clip-path: circle(510%);
    clip-path: circle(150%);
  }
}

#background {
  z-index: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
