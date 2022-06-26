import { defineStore } from "pinia";

interface FormState {
    component: string;
    message: string;
    selectedPrice: number;
    selectedCategory: string;
    modal: boolean;
    sizeToggle: boolean,
    selectedSize: string,
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
        selectedPrice: 0,
        modalContent: 2,
        selectedCategory: 'Burger',
        modal: false,
        selectedSize: 'Tamaño',
        sizeToggle: false,
        cartArray: [],
        modalArray: [],
        masterArray: [],
        pizzaArray: [
            {
              name: "Pizza Chorizo",
              isSlected: false,
              price: [
                {size: "Pequeña", price: 10, isSelected: false},
                {size: "Mediana", price: 12, isSelected: true},
                {size: "Grande", price: 14, isSelected: false}
                ],
              description: "Pizza 1",
              quantity: 1,
              image:
                "https://www.palacios.es/palacios/usuariosFtp/conexion/imagenes1527a.jpg",
            },
            {
              name: "Pizza Pepperoni",
              isSlected: false,
              price: [
                {size: "Pequeña", price: 10, isSelected: false},
                {size: "Mediana", price: 12, isSelected: true},
                {size: "Grande", price: 14, isSelected: false}
                ],
              description: "Pizza 2",
              quantity: 1,
              image:
                "https://www.saborusa.com/wp-content/uploads/2019/10/Celebremos-con-una-deliciosa-y-tradicional-pizza-de-pepperoni-Foto-destacada.png",
            },
            {
              name: "Pizza 4 Quesos",
              isSlected: false,
              price: [
                {size: "Pequeña", price: 10, isSelected: false},
                {size: "Mediana", price: 12, isSelected: true},
                {size: "Grande", price: 14, isSelected: false}
                ],
              description: "Pizza 2",
              quantity: 1,
              image:
                "https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/01/4-evidenza.jpg",
            },
            {
              name: "Pizza Tocino",
              isSlected: false,
              price: [
                {size: "Pequeña", price: 10, isSelected: false},
                {size: "Mediana", price: 12, isSelected: true},
                {size: "Grande", price: 14, isSelected: false}
                ],
              description: "Pizza 2",
              quantity: 1,
              image: "https://www.recetaspizzas.com/base/stock/Recipe/54-image/54-image_web.jpg",
            },
            {
              name: "Pizza Italiana",
              isSlected: false,
              price: [
                {size: "Pequeña", price: 10, isSelected: false},
                {size: "Mediana", price: 12, isSelected: true},
                {size: "Grande", price: 14, isSelected: false}
                ],
              description: "Pizza 2",
              quantity: 1,
              image: "http://true-italian.com/wp-content/uploads/2021/08/Barefood-Pizza-Autunno-1-scaled.jpeg",
            },
          ],
          burgerArray: [
            {
              name: "Burger Bacon",
              isSlected: false,
              price: [
                {size: "Pequeña", price: 10, isSelected: false},
                {size: "Mediana", price: 12, isSelected: true},
                {size: "Grande", price: 14, isSelected: false}
                ],
              description: "Pizza 2",
              quantity: 1,
              image:
                "https://www.cobsbread.com/us/drive/uploads/2021/07/20210728145913_IMG_9135-850x630-1-1280x720.jpg",
            },
            {
              name: "Burger Chicken",
              isSlected: false,
              price: [
                {size: "Pequeña", price: 10, isSelected: false},
                {size: "Mediana", price: 12, isSelected: true},
                {size: "Grande", price: 14, isSelected: false}
                ],
              description: "Burger 2",
              quantity: 1,
              image:
                "https://www.thecookingcollective.com.au/wp-content/uploads/2022/04/a-finished-crispy-chicken-burger-on-a-wooden-board-500x500.jpg",
            },
            {
              name: "Burger Vegitarian",
              isSlected: false,
              price: [
                {size: "Pequeña", price: 10, isSelected: false},
                {size: "Mediana", price: 12, isSelected: true},
                {size: "Grande", price: 14, isSelected: false}
                ],
              description: "Burger 3",
              quantity: 1,
              image:
                "https://runningonrealfood.com/wp-content/uploads/2022/01/Best-Vegan-Chickpea-Veggie-Burger-Patties-Recipe.jpg",
            },
            {
              name: "Burger Regular",
              isSlected: false,
              price: [
                {size: "Pequeña", price: 10, isSelected: false},
                {size: "Mediana", price: 12, isSelected: true},
                {size: "Grande", price: 14, isSelected: false}
                ],
              description: "Burger 4",
              quantity: 1,
              image:
                "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F06%2F22%2F429048911_6152425885001_6152427053001-vs.jpg",
            },
            {
              name: "Burger Huevo",
              isSlected: false,
              price: [
                {size: "Pequeña", price: 10, isSelected: false},
                {size: "Mediana", price: 12, isSelected: true},
                {size: "Grande", price: 14, isSelected: false}
                ],
              description: "Burger 5",
              quantity: 1,
              image:
                "https://d31qjkbvvkyanm.cloudfront.net/images/recipe-images/bacon-egg--cheese-burger-with-maple-butter-detail-f87940d5.jpg",
            },
          ],
          drinksArray: [
            {
                name: "Lemonade",
                price: [
                    {size: "Pequeña", price: 10, isSelected: false},
                    {size: "Mediana", price: 12, isSelected: true},
                    {size: "Grande", price: 14, isSelected: false}
                    ],
                description: "Drink 1",
                quantity: 1,
                image:
                    "https://www.errenskitchen.com/wp-content/uploads/2020/08/lemonade-1-3.jpg",
            },
            {
                name: "Soda",
                price: [
                    {size: "Pequeña", price: 10, isSelected: false},
                    {size: "Mediana", price: 12, isSelected: true},
                    {size: "Grande", price: 14, isSelected: false}
                    ],
                description: "Drink 2",
                quantity: 1,
                image:
                    "https://philnews.ph/wp-content/uploads/2019/07/softdrinks-1200x900.jpg",
            },
            {
                name: "Water",
                price: [
                    {size: "Pequeña", price: 10, isSelected: false},
                    {size: "Mediana", price: 12, isSelected: true},
                    {size: "Grande", price: 14, isSelected: false}
                    ],
                description: "Drink 3",
                quantity: 1,
                image:
                    "https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg",
            },
            {
                name: "Beer",
                price: [
                    {size: "Pequeña", price: 10, isSelected: false},
                    {size: "Mediana", price: 12, isSelected: true},
                    {size: "Grande", price: 14, isSelected: false}
                    ],
                description: "Drink 4",
                quantity: 1,
                image:
                    "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/7/14/w900X450/Post_tests-.jpg?w=400&dpr=2.6",
            },
            {
                name: "Wine",
                price: [
                    {size: "Pequeña", price: 10, isSelected: false},
                    {size: "Mediana", price: 12, isSelected: true},
                    {size: "Grande", price: 14, isSelected: false}
                    ],
                description: "Drink 5",
                quantity: 1,
                image:
                    "https://jayswines.com/wp-content/uploads/2021/09/The-most-popular-wines-in-Kenya.png",
            },
            ],
            sushiArray: [
                {
                    name: "Sushi Tocino",
                    price: [
                        {size: "Pequeña", price: 10, isSelected: false},
                        {size: "Mediana", price: 12, isSelected: true},
                        {size: "Grande", price: 14, isSelected: false}
                        ],
                    description: "Sushi 1",
                    quantity: 1,
                    image:
                        "https://www.yokiro.com.mx/files/Producto/41/Foto/cordonblue-detalle-431.png",
                },
                {
                    name: "Sushi Mar y Tierra",
                    price: [
                        {size: "Pequeña", price: 10, isSelected: false},
                        {size: "Mediana", price: 12, isSelected: true},
                        {size: "Grande", price: 14, isSelected: false}
                        ],
                    description: "Sushi 2",
                    quantity: 1,
                    image:
                        "http://www.emporiosushi.com/Fotos/7328ccce79f84c2.jpg.ashx?width=800",
                },
                {
                    name: "Sushi Pollo",
                    price: [
                        {size: "Pequeña", price: 10, isSelected: false},
                        {size: "Mediana", price: 12, isSelected: true},
                        {size: "Grande", price: 14, isSelected: false}
                        ],
                    description: "Sushi 3",
                    quantity: 1,
                    image:
                        "https://i.ytimg.com/vi/Q4KR90TiPzI/maxresdefault.jpg",
                },
                {
                    name: "Sushi Tuna",
                    price: [
                        {size: "Pequeña", price: 10, isSelected: false},
                        {size: "Mediana", price: 12, isSelected: true},
                        {size: "Grande", price: 14, isSelected: false}
                        ],
                    description: "Sushi 4",
                    quantity: 1,
                    image:
                        "https://recipesdetails.com/thumb/inside-out-spicy-tuna-and-avocado-sushi.jpg",
                },
                {
                    name: "Sushi Bomba",
                    price: [
                        {size: "Pequeña", price: 10, isSelected: false},
                        {size: "Mediana", price: 12, isSelected: true},
                        {size: "Grande", price: 14, isSelected: false}
                        ],
                    description: "Sushi 5",
                    quantity: 1,
                    image:
                        "https://sushivan.mx/Images/Catalogos/Productos/BOMBA_SUPREMA.jpg",
                },
            ],
            saladArray: [
                {
                    name: "Ensalada de Queso",
                    price: [
                        {size: "Pequeña", price: 10, isSelected: false},
                        {size: "Mediana", price: 12, isSelected: true},
                        {size: "Grande", price: 14, isSelected: false}
                        ],
                    description: "Salad 2",
                    quantity: 1,
                    image:
                        "https://d36fw6y2wq3bat.cloudfront.net/recipes/ensalada-de-aguacate-y-queso-fresco-con-nueces/900/ensalada-de-aguacate-y-queso-fresco-con-nueces.jpg",
                },
                {
                    name: "Ensalada de Pollo",
                    price: [
                        {size: "Pequeña", price: 10, isSelected: false},
                        {size: "Mediana", price: 12, isSelected: true},
                        {size: "Grande", price: 14, isSelected: false}
                        ],
                    description: "Salad 3",
                    quantity: 1,
                    image:
                        "http://www.comedera.com/wp-content/uploads/2015/10/ensalada-de-pollo.jpg",
                },
                {
                    name: "Ensalada Italiana",
                    price: [
                        {size: "Pequeña", price: 10, isSelected: false},
                        {size: "Mediana", price: 12, isSelected: true},
                        {size: "Grande", price: 14, isSelected: false}
                        ],
                    description: "Salad 1",
                    quantity: 1,
                    image:
                        "https://easyrecetas.com/wp-content/uploads/2019/10/Receta-de-Ensalada-Italiana-con-Pasta-700x394.jpg",
                },
                {
                    name: "Ensalada Cesar",
                    price: [
                        {size: "Pequeña", price: 10, isSelected: false},
                        {size: "Mediana", price: 12, isSelected: true},
                        {size: "Grande", price: 14, isSelected: false}
                        ],
                    description: "Salad 4",
                    quantity: 1,
                    image:
                        "https://www.tqma.com.ec/images/com_yoorecipe/banner_superior/175_1.jpg",
                },
                {
                    name: "Ensalada Mexicana",
                    price: [
                        {size: "Pequeña", price: 10, isSelected: false},
                        {size: "Mediana", price: 12, isSelected: true},
                        {size: "Grande", price: 14, isSelected: false}
                        ],
                    description: "Salad 5",
                    quantity: 1,
                    image:
                        "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/10/ensalada-mexicanacon-pollo.jpg",
                },
            ],
    }),
    actions: {
        
        setCategory(e) {

            this.masterArray = [];

            if(e === 'Pizza') {
                this.masterArray = this.pizzaArray;
            }
            else if (e === 'Burger') {
                this.masterArray = this.burgerArray;
            }
            else if (e === 'Drinks') {
                this.masterArray = this.drinksArray;
            }
            else if (e === 'Sushi') {
                this.masterArray = this.sushiArray;
            } else if (e === 'Salads') {
                this.masterArray = this.saladArray;
            } else if (e === 'Todos') {
                this.masterArray = this.masterArray.concat(this.pizzaArray, this.burgerArray, this.drinksArray, this.sushiArray, this.saladArray);
            }
        },
        
        sendWhatsapp(e) {
            let messageArray = [];
            let grandTotal = 0;
            e.forEach(element => {
                messageArray.push('***' + element.name + '***');
                let perCost = 0;
                element.price.forEach(price => {
                    if(price.isSelected) {
                        messageArray.push(price.size);
                        messageArray.push('$' + price.price + 'c/u');
                        perCost = price.price;
                    }
                });
                messageArray.push(element.quantity);
                messageArray.push('Total: $' + element.quantity * perCost);
                grandTotal += element.quantity * perCost;
                // messageArray.push('Grand Total $'  + grandTotal);
            });
            messageArray.push('***Grand Total: $' + grandTotal + '***');
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

        pushToModal(a, b) {
            this.modalArray.push(a);
            console.log(a.price.length);
            for(let i = 0; i < a.price.length; i++) {
                if(a.price[i].isSelected) {
                    this.selectedPrice = a.price[i].price;
                }
            }
            
        },

        toggleModal() {
            this.modal = !this.modal;
            if(this.modal === false) {
                this.modalArray = [];
            }
        },

        toggleQuantity(e) {
            this.modalArray[0].quantity = this.modalArray[0].quantity + e;
        },

        toggleSize(e) {
            this.sizeToggle = !this.sizeToggle;
        },

        selectSize(e) {
            this.selectedSize = e;
        },
        
        resetSizes(a,b) {
            a.forEach(element => {
                element.isSelected = false;
            });
            this.selectedPrice = a[b].price;
        }

    }
})