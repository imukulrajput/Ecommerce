export const WishListReducer = (state,{type,payload})=>{
        switch(type){
            case "ADD_TO_WISHLIST":
                return{
                    ...state,
                    WishList:[...state.WishList,payload.product]
                }
            case "REMOVE_FROM_WISHLIST":
                return {
                    ...state,
                    WishList:state.WishList.filter(product=>product.id !==payload.id),
                }    

                default:
                    return state; 
        }
}