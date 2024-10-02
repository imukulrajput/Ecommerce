import Navbar from "../components/Navbar";
import { useCart } from "../context/Cart-Context";
import { HorizontalProductCard } from "../components/HorizontalProductCard";
import { PriceDetails } from "../components/PriceDetails";
import { useNavigate } from "react-router-dom";

export const Cart = () => { 
  const { cart } = useCart();

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-6">
         {
             cart?.length > 0 ? (
                <>
                <h2 className="text-3xl">My cart</h2>
               <div className="flex gap-8">
                 <div className="pt-4 flex flex-col gap-4">
                   {cart?.length > 0 &&
                     cart.map((product) => (
                       <HorizontalProductCard key={product.id} product={product} />
                     ))}
                 </div>
                 <div>
                 <PriceDetails />
                 </div>
               </div>
                </>
             ) : <div>
                <h2>Cart Empty</h2>
                <p className="text-[#14532D] hover:cursor-pointer underline" onClick={()=> navigate('/')}>click to add items to cart</p>
             </div>
         }
        
      </main>
    </>
  );
};
