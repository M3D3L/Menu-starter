<script lang="ts">
import { useForm } from "~/store/form";
import { computed } from "vue";

const modalOpen = computed(() => {
  const form = useForm();
  return form.modal;
});

export default {
  setup() {
    function goHome() {
      //go back to home page
      window.location.href = "/";
    }

    const form = useForm();

    return {
      form,
      selectedItem: [],
      modalOpen,
    };
  },
};
</script>

<template>
  <!-- <input v-model="form.message" />
    <button @click="form.sendWhatsapp(form.message)">{{ form.message }}</button> -->
  <header class="w-full py-2 bg-white text-black flex flex-row justify-evenly">
    <svg
      @click="form.component = 'Menu'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
      />
    </svg>

    <button
      @click="
        form.modalContent = 2;
        form.toggleModal();
      "
      class="px-4 py-2 border border-black transition-all duration-150 text-black text-center rounded-[5px]"
    >
      See Cart
    </button>
    <button
      @click="form.sendWhatsapp(form.cartArray)"
      class="px-4 py-2 border border-black transition-all duration-150 text-black text-center rounded-[5px]"
    >
      Buy Now
    </button>
  </header>
  <div
    class="w-full h-screen bg-gray-900 overflow-y-scroll overflow-hidden scrollbar-hide relative"
  >
    <ul class="space-y-4">
      <li
        @click="
          form.pushToModal(item);
          form.modalContent = 1;
          form.toggleModal();
        "
        v-for="item in form.masterArray"
        class="w-full text-[24px] font-bold bg-white bg-opacity-10 rounded-[5px] text-white px-4 mb-3 h-[250px]"
      >
        {{ item.name }}

        <img
          :src="item.image"
          class="w-full h-[200px] object-cover rounded-[4px] overflow-hidden"
        />
      </li>
    </ul>

    <!--Modal-->
    <div
      v-if="modalOpen === true"
      class="fixed h-full bg-black bg-opacity-50 w-full px-4 z-100 top-0 left-0"
    >
      <div
        class="w-full h-auto bg-slate-900 rounded-[20px] mt-[20%] relative pt-4 pb-4"
      >
        <svg
          @click="form.toggleModal()"
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 p-1 rounded-full bg-white text-black absolute -top-7 right-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <section v-if="form.modalContent === 1">
          <div class="px-4">
            <img
              class="w-full h-[300px] overflow-hidden rounded-[5px]"
              :src="form.modalArray[0].image"
            />
          </div>
          <div class="px-4 flex flex-col">
            <p class="text-white text-2xl font-bold">
              {{ form.modalArray[0].name }}
            </p>
            <p class="text-white text-xl">
              {{ form.modalArray[0].description }}
            </p>
            <p class="text-white text-xl">
              ${{ form.modalArray[0].price * form.modalArray[0].quantity }}
            </p>

            <ul
              class="w-full flex flex-row overflow-x-scroll text-white space-x-4 rounded-full px-4 py-1 scrollbar-hide"
            >
              <li v-for="size in form.modalArray[0].sizes">
                <p
                  class="text-white text-xl border border-white py-2 rounded-full px-4"
                >
                  {{ size }}
                </p>
              </li>
            </ul>
          </div>

          <div class="w-full flex text-white text-center justify-center mt-2">
            <button
              @click="
                form.modalArray[0].quantity > 0 ? form.toggleQuantity(-1) : ''
              "
              class="w-8 h-8 text-bold text-[24px] rounded-full bg-red-500 mr-2 mt-1"
            >
              <p class="-mt-1">-</p>
            </button>
            <p class="ml-2 text-3xl mr-4">
              {{ form.modalArray[0].quantity }}
            </p>

            <button
              @click="form.toggleQuantity(1)"
              class="w-8 h-8 text-bold text-[24px] rounded-full bg-red-500"
            >
              <p class="-mt-1">+</p>
            </button>
          </div>

          <button
            @click="form.pushToCart(form.modalArray[0])"
            class="px-4 py-2 bg-white transition-all duration-150 text-black text-center rounded-[5px] -bottom-8 right-4 absolute"
          >
            Mandar Pedido
          </button>
        </section>

        <section v-if="form.modalContent === 2">
          <div class="px-4">
            <ul>
              <li
                v-for="item in form.cartArray"
                class="text-white text-xl grid grid-cols-3"
              >
                <p>{{ item.name }}</p>
                <p>{{ item.quantity }}</p>
                <p>
                  <svg
                    @click="form.removeFromCart(item)"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
