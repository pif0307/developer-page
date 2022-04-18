<template>
  <div class="d-flex align-center flex-column">
    <div style="height: 80px" />
    <div class="text-h2 font-weight-medium">안녕하세요</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosY: 0,
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

<style></style>
