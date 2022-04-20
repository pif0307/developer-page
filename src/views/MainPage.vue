<template>
  <div>
    <div id="black-background">
      <div class="d-flex">
        <div
          v-for="item in images_one"
          :key="item.src"
          id="background-image-parent-one"
        >
          <v-img
            :src="item.src"
            :lazy-src="item.src"
            width="100vh"
            height="50vh"
          />
        </div>
      </div>
      <div class="d-flex">
        <div
          v-for="item in images_two"
          :key="item.src"
          id="background-image-parent-two"
        >
          <v-img
            :src="item.src"
            :lazy-src="item.src"
            width="100vh"
            height="50vh"
          />
        </div>
      </div>
    </div>

    <div id="opacity-background"></div>

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

      images_one: [
        {
          src: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          src: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
        },
        {
          src: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          src: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          src: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          src: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
        },
        {
          src: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],

      images_two: [
        {
          src: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          src: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          src: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          src: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          src: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          src: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          src: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
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
  z-index: 2;
}

#anim-text-parent {
  height: 70px;
  overflow-y: hidden;
  display: block;
}

#anim-text-text {
  transform: translateY(-800px);

  animation: anim-text-position-keyframes 3s;
  animation-fill-mode: forwards;
}

@keyframes anim-text-position-keyframes {
  from {
    transform: translateY(-800px);
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
  transform: translateY(-400px);

  animation: anim-text-en-position-keyframes 3s;
  animation-fill-mode: forwards;
}

@keyframes anim-text-en-position-keyframes {
  from {
    transform: translateY(-360px);
  } /* 애니메이션 높이 */
  to {
    transform: translateY(0);
  }
}

#alpha-target {
  animation: 3s circle ease-out;
  animation-fill-mode: forwards;
  animation-delay: 5s;

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
    -webkit-clip-path: circle(150%);
    clip-path: circle(150%);
  }
}

#background {
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: white;
}

#black-background {
  z-index: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
}

#background-image-parent-one {
  animation: background-image-animation-one 120s infinite linear;
}

@keyframes background-image-animation-one {
  0% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(-420%);
  }
}

#background-image-parent-two {
  animation: background-image-animation-two 120s infinite linear;
}

@keyframes background-image-animation-two {
  0% {
    transform: translateX(-440%);
  }
  100% {
    transform: translateX(-40%);
  }
}

#opacity-background {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.4) 20%,
    rgba(0, 0, 0, 0.4) 80%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
