import { defineStore } from "pinia";

interface FormState {
    component: string;
    message: string;
    selectedCategory: string;
    modal: boolean;
    cartArray: any[];
    modalArray: any[];
    masterArray: any[];
    pizzaArray: any[];
    burgerArray: any[];
    drinksArray: any[];
    sushiArray: any[];
    saladArray: any[];
    modalContent: number,
}

export const useForm = defineStore('form', {
    state: (): FormState => ({
        component: 'Menu',
        message: '',
        modalContent: 2,
        selectedCategory: 'Burger',
        modal: false,
        cartArray: [],
        modalArray: [],
        masterArray: [],
        pizzaArray: [
            {
              name: "Pizza Chorizo",
              price: 100,
              description: "Pizza 1",
              sizes: ["Small", "Medium", "Large"],
              quantity: 1,
              image:
                "https://www.palacios.es/palacios/usuariosFtp/conexion/imagenes1527a.jpg",
            },
            {
              name: "Pizza Pepperoni",
              price: 100,
              description: "Pizza 2",
              sizes: ["Small", "Medium", "Large"],
              quantity: 1,
              image:
                "https://www.saborusa.com/wp-content/uploads/2019/10/Celebremos-con-una-deliciosa-y-tradicional-pizza-de-pepperoni-Foto-destacada.png",
            },
            {
              name: "Pizza 4 Quesos",
              price: 100,
              description: "Pizza 3",
              sizes: ["Small", "Medium", "Large"],
              quantity: 1,
              image:
                "https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/01/4-evidenza.jpg",
            },
            {
              name: "Pizza Tocino",
              price: 100,
              description: "Pizza 4",
              sizes: ["Small", "Medium", "Large", "Family"],
              quantity: 1,
              image:
                "https://www.recetaspizzas.com/base/stock/Recipe/54-image/54-image_web.jpg",
            },
            {
              name: "Pizza Italiana",
              price: 100,
              description: "Pizza 5",
              sizes: ["Small", "Medium", "Large"],
              quantity: 1,
              image:
                "http://true-italian.com/wp-content/uploads/2021/08/Barefood-Pizza-Autunno-1-scaled.jpeg",
            },
          ],
          burgerArray: [
            {
              name: "Burger Bacon",
              price: 100,
              description: "Burger 1",
              sizes: ["Small", "Medium", "Large"],
              quantity: 1,
              image:
                "https://www.cobsbread.com/us/drive/uploads/2021/07/20210728145913_IMG_9135-850x630-1-1280x720.jpg",
            },
            {
              name: "Burger Chicken",
              price: 100,
              description: "Burger 2",
              sizes: ["Small", "Medium", "Large"],
              quantity: 1,
              image:
                "https://www.thecookingcollective.com.au/wp-content/uploads/2022/04/a-finished-crispy-chicken-burger-on-a-wooden-board-500x500.jpg",
            },
            {
              name: "Burger Vegitarian",
              price: 100,
              description: "Burger 3",
              sizes: ["Small", "Medium", "Large"],
              quantity: 1,
              image:
                "https://runningonrealfood.com/wp-content/uploads/2022/01/Best-Vegan-Chickpea-Veggie-Burger-Patties-Recipe.jpg",
            },
            {
              name: "Burger Regular",
              price: 100,
              description: "Burger 4",
              sizes: ["Small", "Medium", "Large"],
              quantity: 1,
              image:
                "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F06%2F22%2F429048911_6152425885001_6152427053001-vs.jpg",
            },
            {
              name: "Burger Huevo",
              price: 100,
              description: "Burger 5",
              sizes: ["Small", "Medium", "Large"],
              quantity: 1,
              image:
                "https://d31qjkbvvkyanm.cloudfront.net/images/recipe-images/bacon-egg--cheese-burger-with-maple-butter-detail-f87940d5.jpg",
            },
          ],
          drinksArray: [
            {
                name: "Lemonade",
                price: 100,
                description: "Drink 1",
                sizes: ["Small", "Medium", "Large"],
                quantity: 1,
                image:
                    "https://www.errenskitchen.com/wp-content/uploads/2020/08/lemonade-1-3.jpg",
            },
            {
                name: "Soda",
                price: 100,
                description: "Drink 2",
                sizes: ["Small", "Medium", "Large"],
                quantity: 1,
                image:
                    "https://philnews.ph/wp-content/uploads/2019/07/softdrinks-1200x900.jpg",
            },
            {
                name: "Water",
                price: 100,
                description: "Drink 3",
                sizes: ["Small", "Medium", "Large"],
                quantity: 1,
                image:
                    "https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg",
            },
            {
                name: "Beer",
                price: 100,
                description: "Drink 4",
                sizes: ["Small", "Medium", "Large"],
                quantity: 1,
                image:
                    "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/7/14/w900X450/Post_tests-.jpg?w=400&dpr=2.6",
            },
            {
                name: "Wine",
                price: 100,
                description: "Drink 5",
                sizes: ["Small", "Medium", "Large"],
                quantity: 1,
                image:
                    "https://jayswines.com/wp-content/uploads/2021/09/The-most-popular-wines-in-Kenya.png",
            },
            ],
            sushiArray: [
                {
                    name: "Sushi Tocino",
                    price: 100,
                    description: "Sushi 1",
                    sizes: ["Small", "Medium", "Large"],
                    quantity: 1,
                    image:
                        "https://www.yokiro.com.mx/files/Producto/41/Foto/cordonblue-detalle-431.png",
                },
                {
                    name: "Sushi Mar y Tierra",
                    price: 100,
                    description: "Sushi 2",
                    sizes: ["Small", "Medium", "Large"],
                    quantity: 1,
                    image:
                        "http://www.emporiosushi.com/Fotos/7328ccce79f84c2.jpg.ashx?width=800",
                },
                {
                    name: "Sushi Pollo",
                    price: 100,
                    description: "Sushi 3",
                    sizes: ["Small", "Medium", "Large"],
                    quantity: 1,
                    image:
                        "https://i.ytimg.com/vi/Q4KR90TiPzI/maxresdefault.jpg",
                },
                {
                    name: "Sushi Tuna",
                    price: 100,
                    description: "Sushi 4",
                    sizes: ["Small", "Medium", "Large"],
                    quantity: 1,
                    image:
                        "https://recipesdetails.com/thumb/inside-out-spicy-tuna-and-avocado-sushi.jpg",
                },
                {
                    name: "Sushi Bomba",
                    price: 100,
                    description: "Sushi 5",
                    sizes: ["Small", "Medium", "Large"],
                    quantity: 1,
                    image:
                        "https://sushivan.mx/Images/Catalogos/Productos/BOMBA_SUPREMA.jpg",
                },
            ],
            saladArray: [
                {
                    name: "Ensalada de Queso",
                    price: 100,
                    description: "Salad 2",
                    sizes: ["Small", "Medium", "Large"],
                    quantity: 1,
                    image:
                        "https://d36fw6y2wq3bat.cloudfront.net/recipes/ensalada-de-aguacate-y-queso-fresco-con-nueces/900/ensalada-de-aguacate-y-queso-fresco-con-nueces.jpg",
                },
                {
                    name: "Ensalada de Pollo",
                    price: 100,
                    description: "Salad 3",
                    sizes: ["Small", "Medium", "Large"],
                    quantity: 1,
                    image:
                        "http://www.comedera.com/wp-content/uploads/2015/10/ensalada-de-pollo.jpg",
                },
                {
                    name: "Ensalada Italiana",
                    price: 100,
                    description: "Salad 1",
                    sizes: ["Small", "Medium", "Large"],
                    quantity: 1,
                    image:
                        "https://easyrecetas.com/wp-content/uploads/2019/10/Receta-de-Ensalada-Italiana-con-Pasta-700x394.jpg",
                },
                {
                    name: "Ensalada Cesar",
                    price: 100,
                    description: "Salad 4",
                    sizes: ["Small", "Medium", "Large"],
                    quantity: 1,
                    image:
                        "https://www.tqma.com.ec/images/com_yoorecipe/banner_superior/175_1.jpg",
                },
                {
                    name: "Ensalada Mexicana",
                    price: 100,
                    description: "Salad 5",
                    sizes: ["Small", "Medium", "Large"],
                    quantity: 1,
                    image:
                        "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/10/ensalada-mexicanacon-pollo.jpg",
                },
            ],
    }),
    actions: {
        
        setCategory(e) {
            this.selectedCategory = e;
            if(this.selectedCategory === 'Pizza') {
                this.masterArray = this.pizzaArray;
            }
            else if (this.selectedCategory === 'Burger') {
                this.masterArray = this.burgerArray;
            }
            else if (this.selectedCategory === 'Drinks') {
                this.masterArray = this.drinksArray;
            }
            else if (this.selectedCategory === 'Sushi') {
                this.masterArray = this.sushiArray;
            } else {
                this.masterArray = this.saladArray;
            }
        },
        
        sendWhatsapp(e) {
            let messageArray = [];
            let grandTotal = 0;
            e.forEach(element => {
                grandTotal = grandTotal + (element.price * element.quantity);
                messageArray.push(element.name);
                messageArray.push(element.quantity);
                messageArray.push(element.price);
                messageArray.push('Grand Total $'  + grandTotal);
            });
            messageArray.push(grandTotal);
            let message = messageArray.join(', ');
            //send message to whatsapp
            window.open(`https://api.whatsapp.com/send?phone=${this.phone}&text=${message}`);
        },
        
        pushToCart(e) {
            this.cartArray.push(e);
            this.modal = false;
            this.modalArray = [];
        },

        removeFromCart(e) {
            this.cartArray.splice(e, 1);
            
        },

        pushToModal(e) {
            this.modalArray.push(e);
        },

        toggleModal() {
            this.modal = !this.modal;
            if(this.modal === false) {
                this.modalArray = [];
            }
        },

        toggleQuantity(e) {
            this.modalArray[0].quantity = this.modalArray[0].quantity + e;
        }

    }
})