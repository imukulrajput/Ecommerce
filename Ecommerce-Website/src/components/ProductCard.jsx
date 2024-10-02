import { useCart } from "../context/Cart-Context";
import { FindProductInCart } from "../utils/FindProductInCart";
import { useNavigate } from "react-router-dom";
import { FindProductInWishList } from "../utils/FindProductInWishList";
import { useWishList } from "../context/WishList-Context";

export const ProductCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const { WishList, WishListDispatch } = useWishList();

  const navigate = useNavigate();

  const isProductInCart = FindProductInCart(cart, product.id);

  const isProductInWishList = FindProductInWishList(WishList, product.id);

  const onCartClick = (product) => {
    if (!isProductInCart) {
      localStorage.setItem('cart',JSON.stringify([...cart,product]))
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { product },
      });
    } else {
      navigate("/cart");
    }
  };

  const onWishListClick = (product) => {
    !isProductInWishList
      ? WishListDispatch({
          type: "ADD_TO_WISHLIST",
          payload: { product },
        })
      : navigate("/wishlist");
  };

  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={product.images[0]} alt="shoes" />
      </div>
      <div className="card-details">
        <div className="card-des">{product.title}</div>
        <div className="card-description">
          <p className="card-price">Rs. {product.price}</p>
        </div>
        <div className="cta-btn">
          <button
            onClick={() => onWishListClick(product)}
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          >
            <span className="material-icons-outlined">
              {isProductInWishList ? "thumb_up" : "favorite"}
            </span>
            {isProductInWishList ? "Added to WishList" : "Add to WishList"}
          </button>
          <button
            onClick={() => onCartClick(product)}
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          >
            <span className="material-icons-outlined">
              {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
            </span>
            {isProductInCart ? "Go To Cart" : " Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
