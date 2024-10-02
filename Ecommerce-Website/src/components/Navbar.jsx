import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/Login-Context";
import { useCart } from "../context/Cart-Context";

export default function Navbar() {

  const navigate = useNavigate();

  const [isAccountDropDownOpen,setIsAccountDropDownOpen] = useState(false);
  const  {token,loginDispatch} = useLogin();
  const {cart} = useCart(); 

  const onLoginClick = () =>{
     if(token?.access_token) {
      navigate('/auth/login')}else{
        loginDispatch({
          type: "LOGOUT"
        })
        navigate('/auth/login')
      } 
  }
   
  return (
    <header className="flex bg-green-900 py-4 px-8 text-slate-50 sticky top-0 z-50">
      <div>
        <h1 onClick={()=> navigate('/')} className="text-5xl hover:cursor-pointer">Shop It</h1>
      </div>
      <nav className="ml-auto flex gap-8">
        <span onClick={()=>navigate('/cart')} className="material-icons-outlined !text-3xl hover:cursor-pointer">shopping_cart</span>
        
        <span onClick={()=>navigate('/wishlist')} className="material-icons-outlined !text-3xl hover:cursor-pointer">favorite</span>
        <div className="relative">
        <span onClick={()=> setIsAccountDropDownOpen(!isAccountDropDownOpen)} className="material-icons-outlined !text-3xl hover:cursor-pointer">account_circle</span>
         {
           isAccountDropDownOpen &&   <div className="absolute bg-green-400">
            <button onClick={onLoginClick}>
              {
                 token?.access_token ? "Logout" : "Login"
              }
              </button>
      </div>
         }
      
        </div>  
      </nav>
    </header>
  );
}
