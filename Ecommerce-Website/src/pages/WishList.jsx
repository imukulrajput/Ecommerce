import Navbar from "../components/Navbar";
import { useWishList } from "../context/WishList-Context";
import { HorizontalProductCard2 } from "../components/HorizontalProductCard2";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const { WishList } = useWishList();

  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col items-center pt-6">
        {WishList?.length > 0 ? (
          <>
            <h2 className="text-3xl">My WishList</h2>
            <div className="flex gap-8">
              <div className="pt-4 flex flex-col gap-4">
                {WishList?.length > 0 &&
                  WishList.map((product) => (
                    <HorizontalProductCard2
                      key={product.id}
                      product={product}
                    />
                  ))}
              </div>
            </div>
          </>
        ) : (
          <div>
            <h2>WishList Empty</h2>
            <p
              className="text-[#14532D] hover:cursor-pointer underline"
              onClick={() => navigate("/")}
            >
              click to add items to WishList
            </p>
          </div>
        )}
      </main>
    </>
  );
}
