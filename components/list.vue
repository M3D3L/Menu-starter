<template>
    <button
      @click="form.setCategory(link.category); form.component = 'Pinia'"
      class="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:h-[200px] lg:w-[200px] rounded-[20px] opacity-90 overflow-hidden my-4 hover:opacity-100 hover:scale-105 transform transition-all duration-150 cursor-pointer bg-gradient-to-b from-gray-600 via-gray-900 to-black relative"
    >
      <img :src="link.url" class="w-full h-full object-cover" />
      <p
        class="absolute top-0 right-0 text-2xl font-bold text-orange-600 filter drop-shadow-md bg-white bg-opacity-50 px-4 py-2 rounded-[3px]"
      >
        {{ link.category }}
      </p>
    </button>
</template>

<script lang="ts">
import { NuxtLink } from "#components";
import { defineNuxtComponent } from "#app";
import { link } from "~~/types";
import { useForm } from "~/store/form";

export default defineNuxtComponent({
  
  components: {
    NuxtLink,
  },
  props: {
    link: {
      type: Object as () => link,
      required: true,
    },
  },
  setup() {
    const form = useForm();

    return {
      form
    };
  },
});
</script>
