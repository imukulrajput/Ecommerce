import {createContext,useContext,useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";

 const CartContext = createContext();

const CartProvider = ({children})=>{

    const initialState = {
         cart: JSON.parse(localStorage.getItem('cart')) || [],
    }

     const [{cart},cartDispatch] = useReducer(cartReducer,initialState);

     return(
         <CartContext.Provider value={{cart,cartDispatch}}>
             {children}
         </CartContext.Provider>
     );
}

const useCart = () => useContext(CartContext);
export {CartProvider,useCart}