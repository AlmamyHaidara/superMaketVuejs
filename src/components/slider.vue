<template>
  <div id="carouselExampleIndicators" class="carousel slide mt-5">
    <div class="carousel-indicators mt-1">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner w-100 mx-auto">
      <div class="carousel-item active">
        <img
          :src="require('@/assets/Images/Boisson.jpg')"
          class="d-block mx-auto img-fluid w-75 img-responsive c-img"
          alt="p"
        />
      </div>
      <div class="carousel-item">
        <img
          :src="require('@/assets/Images/img4.png')"
          class="d-block mx-auto img-fluid w-75 c-img"
          alt="p"
        />
      </div>
      <div class="carousel-item">
        <img
          :src="require('@/assets/Images/img9.jpg')"
          class="d-block mx-auto w-75 c-img"
          alt="p"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
export default {
  data() {
    return {
      img: require("@/assets/Images/img9.jpg"),
      slides: [
        require("@/assets/Images/img4.png"),
        require("@/assets/Images/img14.jpg"),
        require("@/assets/Images/img9.jpg"),
        require("@/assets/Images/test.png"),
        require("@/assets/Images/img11.png"),
      ],
    };
  },
};
</script>

<style scoped>
.c-img {
  height: 70vh;
}
.carousel-control-next {
  margin-right: 10rem;
}
.carousel-control-prev {
  margin-left: 10rem;
}
.carousel-indicators {
  margin-top: 10rem;
}
</style>
