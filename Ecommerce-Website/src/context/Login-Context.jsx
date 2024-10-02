import { createContext,useContext,useReducer } from "react";
import { LoginReducer } from "../reducers/LoginReducer";

const LoginContext = createContext();

const LoginProvider = ({children}) =>{
     const initialState = {
     email: '',
     password: '',
     token:{
       access_token: localStorage.getItem('token') || "",
       refresh_token:""
     },
     }

  const [{email,password,token},loginDispatch] = useReducer(LoginReducer,initialState);

  return (
      <LoginContext.Provider value={{email,password,token,loginDispatch}}> 
         {children}
      </LoginContext.Provider>
  );

}

const useLogin = () => useContext(LoginContext);

export {LoginProvider,useLogin}