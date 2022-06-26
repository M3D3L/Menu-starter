<script lang="ts">
import { useForm } from "~/store/form";
import { computed, onMounted } from "vue";

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
      sizeToggle: false,
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
    <ul id="grid"
      class="col-span-2 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 mt-8 px-2 md:px-8 transform move-in transition-all duration-150"
    >
      <li v-for="(item, index) in form.masterArray"
        @click="form.pushToModal(item, index); form.modalContent = 1; form.toggleModal()"
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
      class="fixed h-screen bg-black bg-opacity-50 w-full py-8 pt-12 md:pt-0 px-4 z-100 top-0 left-0 lg:py-16 transition-all duration-150"
    >
      <div class="w-full sm:w-3/5 md:w-[400px] lg:h-full h-[600px] m-auto bg-black rounded-[20px] pb-4 relative move-in scrollbar-hide overflow-y-scroll overflow-hidden">
        <svg
          @click="form.toggleModal()"
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 p-1 rounded-full bg-white transition-all duration-150 text-black absolute top-0 right-0 shadow-md cursor-pointer hover:scale-105 transform"
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
          <div class="p-4">
            <img
              class="w-full h-[200px] overflow-hidden rounded-[5px]"
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
              ${{ form.selectedPrice * form.modalArray[0].quantity }}
            </p>

            <!--Create dropdown-->
            <ul 
              class="w-full text-center mt-[100px] gap-2 flex-row flex-wrap flex h-8 absolute text-white rounded-full  py-1 scrollbar-hide"
            >
      
              <li @click="form.resetSizes(form.modalArray[0].price, index), size.isSelected = !size.isSelected" v-for="(size, index) in form.modalArray[0].price">
                <p :class="size.isSelected ? 'bg-white text-black' : 'bg-gray-900 text-white'"
                  class="text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-150 text-xl border border-white py-1 rounded-full px-4"
                >
                  {{size.size}}
                </p>
              </li>
            </ul>


            <!-- <ul
              class="w-full flex flex-row overflow-x-scroll text-white space-x-4 rounded-full px-4 py-1 scrollbar-hide"
            >
              <li class="mt-3" v-for="size in form.modalArray[0].sizes">
                <p
                  class="text-white text-xl border border-white py-2 rounded-full px-4"
                >
                  {{ size }}
                </p>
              </li>
            </ul> -->
          </div>

          <div class="w-full flex text-white text-center justify-center absolute bottom-20">
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
              class="w-8 h-8 mt-1 text-bold text-[24px] rounded-full bg-red-500"
            >
              <p class="-mt-1">+</p>
            </button>
          </div>

          <button
            @click="form.pushToCart(form.modalArray[0])"
            class="px-4 py-2 bg-white transition-all duration-150 text-black text-center rounded-[5px] bottom-4 right-2 absolute"
          >
            Agregar
          </button>
        </section>

        <section v-if="form.modalContent === 2">
          <div class="px-4">
            <ul>
              <li
                v-for="item in form.cartArray"
                class="text-white text-xl grid grid-cols-3 pt-4"
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

<style>
.modal {
  text-align: center;
  padding: 0 !important;
}
.modal:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -4px;
}
.modal-dialog {
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}
/*animate from bottom of the page to original position*/
.move-in {
  animation: move-in-bottom 0.25s ease-in-out;
}
@keyframes move-in-bottom {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

</style>
