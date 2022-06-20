<template>
  <component :is="form.component" />
</template>

<script lang="ts">
import { NuxtLink } from "#components";
import { link } from "~/types";
import Menu from "../pages/menu.vue";
import Pinia from "../pages/pinia.vue";
import { useForm } from "~/store/form";

export default {
  components: {
    NuxtLink,
    Menu,
    Pinia
  },
  setup() {
    const form = useForm();

    function moveRight(e) {
      const carousel = document.getElementById("carousel");
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += e;
      }
    };

    function moveLeft(e) {
      const carousel = document.getElementById("carousel");
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollWidth;
      } else {
        carousel.scrollLeft -= e;
      }
    };

    function moveToStart() {
      const carousel = document.getElementById("carousel");
      carousel.scrollLeft = 0;
    };

    function moveToEnd() {
      const carousel = document.getElementById("carousel");
      carousel.scrollLeft = carousel.scrollWidth;
    };


    const lists = ref<link[]>([
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
      form,
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
