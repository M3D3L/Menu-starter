import { defineStore } from "pinia";

interface ItemState {
    selectedCategory: string;
    masterArray: string[];
    pizzaArray: any[];
    burgerArray: any[];
}

export const useForm = defineStore('item', {
    state: (): ItemState => ({
        selectedCategory: 'Burger',
        masterArray: [],
        pizzaArray: [
            {
              name: "Pizza Chorizo",
              price: "R$ 10,00",
              description: "Pizza 1",
              image:
                "https://www.palacios.es/palacios/usuariosFtp/conexion/imagenes1527a.jpg",
            },
            {
              name: "Pizza Pepperoni",
              price: "R$ 10,00",
              description: "Pizza 2",
              image:
                "https://www.saborusa.com/wp-content/uploads/2019/10/Celebremos-con-una-deliciosa-y-tradicional-pizza-de-pepperoni-Foto-destacada.png",
            },
            {
              name: "Pizza 4 Quesos",
              price: "R$ 10,00",
              description: "Pizza 3",
              image:
                "https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/01/4-evidenza.jpg",
            },
            {
              name: "Pizza Tocino",
              price: "R$ 10,00",
              description: "Pizza 4",
              image:
                "https://www.recetaspizzas.com/base/stock/Recipe/54-image/54-image_web.jpg",
            },
            {
              name: "Pizza Italiana",
              price: "R$ 10,00",
              description: "Pizza 5",
              image:
                "http://true-italian.com/wp-content/uploads/2021/08/Barefood-Pizza-Autunno-1-scaled.jpeg",
            },
          ],
          burgerArray: [
            {
              name: "Burger Bacon",
              price: "R$ 10,00",
              description: "Burger 1",
              image:
                "https://www.cobsbread.com/us/drive/uploads/2021/07/20210728145913_IMG_9135-850x630-1-1280x720.jpg",
            },
            {
              name: "Burger Chicken",
              price: "R$ 10,00",
              description: "Burger 2",
              image:
                "https://www.thecookingcollective.com.au/wp-content/uploads/2022/04/a-finished-crispy-chicken-burger-on-a-wooden-board-500x500.jpg",
            },
            {
              name: "Burger Vegitarian",
              price: "R$ 10,00",
              description: "Burger 3",
              image:
                "https://runningonrealfood.com/wp-content/uploads/2022/01/Best-Vegan-Chickpea-Veggie-Burger-Patties-Recipe.jpg",
            },
            {
              name: "Burger Regular",
              price: "R$ 10,00",
              description: "Burger 4",
              image:
                "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F06%2F22%2F429048911_6152425885001_6152427053001-vs.jpg",
            },
            {
              name: "Burger Huevo",
              price: "R$ 10,00",
              description: "Burger 5",
              image:
                "https://d31qjkbvvkyanm.cloudfront.net/images/recipe-images/bacon-egg--cheese-burger-with-maple-butter-detail-f87940d5.jpg",
            },
          ],
    }),
    actions: {
        
   
        
        sendWhatsapp(e) {
            window.open('https://api.whatsapp.com/send?phone=55119988888888&text=' + e);
        }
        

    }
})