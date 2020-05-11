import {Add_Product_Cart, Pay_Cart, Search_Products} from "./Types";

const products = [
    {
        id: 1,
        name: "parsley",
        price: 8,
        amount: 20,
        image: '/Products/italian-parsley-leaves.jpg',
        text: 'We believe that health information should be free to everyone and we rely on advertising to make this possible on our family of websites: Healthline, Medical News Today, Greatist, and Everyday Family.'
    },

    {
        id: 2,
        name: "basil",
        price: 10,
        amount: 10,
        image: '/Products/Preserve-Fresh-Basil.jpg',
        text: 'Basil is an herb in the mint family. It adds flavor to meals, and its nutrients may provide health benefits.'
    },

    {
        id: 3,
        name: "mango",
        price: 3,
        amount: 30,
        image: '/Products/54522547-mango-cubes-and-mango-fruit-isolated-on-a-white-background-.jpg',
        text: 'Mangoes are tropical stone fruits, plump and oval in shape and about the size of a grapefruit. They have an inedible skin that ranges in colour from yellow to green through to red-green, depending on the variety, whilst inside is a soft, edible yellow flesh and a hard inedible stone'
    },

    {
        id: 4,
        name: "banana",
        price: 3.5,
        amount: 15,
        image: '/Products/42E9as7NaTaAi4A6JcuFwG-320-80.jpg',
        text: 'Food & Drinks7 Wonderful Benefits Of Banana: How To Include The Fruit In Your Daily Diet\n' +
            '7 Wonderful Benefits Of Banana: How To Include The Fruit In Your Daily DietPlavaneeta Borah, NDTV  |  Updated: August 20, 2018 12:08 ISTTweeterfacebookReddit\n' +
            '7 Wonderful Benefits Of Banana: How To Include The Fruit In Your Daily Diet\n' +
            'An instant energy booster, banana is one fruit that is commonly available across the globe. In India, it is given much importance where various regional cuisines use it in making sinful desserts - kheer, malpua, halwa, payasam, sheera, and paniyaram, to name a few.'
    }

]

let initialState
if (!localStorage.getItem('state')) {
    initialState = {
        products: products,
        cart: [],
        total: 0,
        message: '',
        filtered: [],
        search:''

    }
} else {
    initialState = JSON.parse(localStorage.getItem('state'))
}

const Reducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case Add_Product_Cart : {

            let total = 0
            state.cart.forEach((product) => {
                total += product.price
            })

            localStorage.setItem('state', state)

            newState = {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload.product
                ]
                ,
                total: total
            }
            break
        }

        case Pay_Cart: {
            newState = {
                ...state,
                cart: []
            }
            break
        }

        case Search_Products: {
            let filtered = []
            state.products.forEach((product) => {
                if (product.name.toLowerCase().includes(action.payload.search.toLowerCase())) {
                    filtered.push(product)
                }
            })
            console.log(filtered)
            newState = {
                ...state,
                search: action.payload.search,
                filtered: filtered
            }
            break
        }

        default:
            newState = state

    }
    localStorage.setItem('state', JSON.stringify(newState))

    return newState

}
export default Reducer;
