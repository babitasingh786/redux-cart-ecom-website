import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isCartOpen: false,
    cartItems: []
};


// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {


//         toggleCart(state, action) {
//             state.isCartOpen = action.payload;
//         },


//         addItem(state, action) {
//             const newItemId = action.payload.id;
//             const existingItem = state.cartItems.find(item => item.id === newItemId);

//             if (existingItem) {
//                 existingItem.quantity++;
//             } else {
//                 state.cartItems.push(action.payload);
//             }
//         },


//         // removeItem(state, action) {
//         //     state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
//         // },


//         // incrementItem(state, action) {
//         //     state.cartItems = state.cartItems.map(item => {
//         //         if (item.id === action.payload) {
//         //             item.quantity++;
//         //         }
//         //         return item;
//         //     });
//         // },


//         decrementItem(state, action) {
//             state.cartItems = state.cartItems.map(item => {
//                 if (item.id === action.payload) {
//                     item.quantity--;
//                 }
//                 return item;
//             }).filter(item => item.quantity !== 0);
//         }

//     }
// });

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const newItemId = action.payload.id;
            const existingItem = state.cartItems.find((item) => item.id === newItemId);
            if (existingItem) {
                existingItem.quantity++;
            }
            else {
                state.cartItems.push({...action.payload, quantity:1});
            }
        },
        toggleCart(state, action) {
            state.isCartOpen = action.payload
        },
       
         incrementItem(state,action){
            state.cartItems = state.cartItems.map((item)=>{
                if(item.id === action.payload){
                    return { 
                        ...item ,
                        quantity:item.quantity+1,
                    }
                }
                return item;
            });
         },
         decrementItem(state,action){
            state.cartItems = state.cartItems.map((item)=>{
                if(item.id===action.payload && item.quantity>1){
                    return {
                        ...item,
                        quantity:item.quantity-1,
                    }
                }
                return item;
            })
         },
         removeItem(state,action){
            return{
                ...state,
                cartItems : state.cartItems.filter(item => item.id !== action.payload)

            }
         }
    }
})

export const { addItem, toggleCart ,incrementItem ,decrementItem ,removeItem} = cartSlice.actions;
export default cartSlice.reducer;