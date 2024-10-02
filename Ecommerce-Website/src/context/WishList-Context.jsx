import { createContext,useContext,useReducer } from "react";
import { WishListReducer } from "../reducers/WishListReducer";

const WishListContext = createContext();

const WishListProvider = ({children}) =>{
      
      const initialState = {
          WishList:[],
      }

    const [{WishList},WishListDispatch] = useReducer(WishListReducer,initialState);

    return (
         <WishListContext.Provider value={{WishList,WishListDispatch}}>
             {children}
         </WishListContext.Provider>
    );

}

const useWishList = () => useContext(WishListContext);

export {WishListProvider,useWishList}
