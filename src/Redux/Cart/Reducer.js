import {Add_Product_Cart, Pay_Cart} from "./Types";

const products = [
    {
        id: 1,
        name: "parsley",
        price: 8,
        amount: 20,
        image: '/italian-parsley-leaves.jpg',
        text: 'We believe that health information should be free to everyone and we rely on advertising to make this possible on our family of websites: Healthline, Medical News Today, Greatist, and Everyday Family.'
    },

    {
        id: 2,
        name: "basil",
        price: 10,
        amount: 10,
        image: '/Preserve-Fresh-Basil.jpg',
        text: 'Basil is an herb in the mint family. It adds flavor to meals, and its nutrients may provide health benefits.'
    },

    {
        id: 3,
        name: "mango",
        price: 3 ,
        amount: 30,
        image: '/54522547-mango-cubes-and-mango-fruit-isolated-on-a-white-background-.jpg',
        text: 'Mangoes are tropical stone fruits, plump and oval in shape and about the size of a grapefruit. They have an inedible skin that ranges in colour from yellow to green through to red-green, depending on the variety, whilst inside is a soft, edible yellow flesh and a hard inedible stone'
    },

    {
        id: 4,
        name: "banana",
        price: 3.5 ,
        amount: 15,
        image: '/42E9as7NaTaAi4A6JcuFwG-320-80.jpg',
        text: 'Food & Drinks7 Wonderful Benefits Of Banana: How To Include The Fruit In Your Daily Diet\n' +
            '7 Wonderful Benefits Of Banana: How To Include The Fruit In Your Daily DietPlavaneeta Borah, NDTV  |  Updated: August 20, 2018 12:08 ISTTweeterfacebookReddit\n' +
            '7 Wonderful Benefits Of Banana: How To Include The Fruit In Your Daily Diet\n' +
            'An instant energy booster, banana is one fruit that is commonly available across the globe. In India, it is given much importance where various regional cuisines use it in making sinful desserts - kheer, malpua, halwa, payasam, sheera, and paniyaram, to name a few.'
    }

]

const initialState = {
    products:products,
    cart:[]
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case Add_Product_Cart : {
            return{
                ...state,
                cart: [
                    ...state.cart,
                     action.payload.product
                ]
            }
        }

        case Pay_Cart: {
            return {
                ...state,
                cart: []
            }
        }

    }
}