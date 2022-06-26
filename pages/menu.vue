<template>
  <div
    class="w-full h-screen overflow-y-scroll bg-gradient-to-b from-slate-900 via-slate-800 to-black overflow-hidden md:px-8 px-2 lg:px-16 xl:px-32 relative"
  >
    <!-- <video class="w-full h-full object-cover absolute left-0 top-0 right-0 bottom-0 z-0" autoplay muted loop id="myVideo">
      <source src="../assets/video.mp4" type="video/mp4">
    </video> -->
    <div
      class="w-[250px] h-[250px] mx-auto overflow-hidden z-[999999] m-auto"
    >
      <img :src="logo" class="w-full h-full" />
    </div>

    <h1 class="text-[24px] md:text-[32px] text-white font-semibold w-full text-center md:mt-6 lg:mt-0 lg:mb-0 md:mb-6">
      Selecciona Catetoria
    </h1>
    <!--Carousel Start-->
    <div class="flex">
      <!--button slide left-->
      <div
        class="w-10 h-10 hover:scale-105 transform transition-all duration-150 mt-32 hidden lg:flex"
      >
        <button
          @click="moveLeft(200)"
          class="w-10 h-10 rounded-full bg-white hove:gray-100"
        >
          <img
            src="../assets/img/chevron.svg"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
      <!--Carousel Content-->
      <ul
        role="list"
        id="carousel"
        class="mt-10 flex flex-row overflow-x-scroll scroll-smooth scrollbar-hide space-x-8 snap-x px-16"
      >
        <li class="snap-center" v-for="item in lists" :key="item.id">
          <List
            :link="{
              category: item.category,
              url: item.url,
            }"
          />
        </li>
      </ul>
      <!--button slide right-->
      <div
        class="w-10 h-10 hover:scale-105 transform transition-all duration-150 mt-32 hidden lg:flex"
      >
        <button
          @click="moveRight(200)"
          class="w-10 h-10 rounded-full bg-white hove:gray-100 transform rotate-180"
        >
          <img
            src="../assets/img/chevron.svg"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { NuxtLink } from "#components";
import { link } from "~/types";
export default {
  components: {
    NuxtLink,
  },
  setup() {
    function moveRight(e) {
      const carousel = document.getElementById("carousel");
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += e;
      }
    }

    function moveLeft(e) {
      const carousel = document.getElementById("carousel");
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollWidth;
      } else {
        carousel.scrollLeft -= e;
      }
    }

    function moveToStart() {
      const carousel = document.getElementById("carousel");
      carousel.scrollLeft = 0;
    }

    function moveToEnd() {
      const carousel = document.getElementById("carousel");
      carousel.scrollLeft = carousel.scrollWidth;
    }

    const lists = ref<link[]>([
      {
        category: "Todos",
        url: "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        category: "Pizza",
        url: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        category: "Sushi",
        url: "https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        category: "Burger",
        url: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        category: "Drinks",
        url: "https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        category: "Salads",
        url: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ]);
    return {
      lists,
      logo: "../assets/img/rest-logo.png",
      moveRight,
      moveLeft,
      moveToStart,
      moveToEnd,
      isHover: false,
    };
  },
};
</script>