export const FindProductInWishList = (WishList,id) => WishList?.length> 0 && WishList.some(product => product.id === id); 