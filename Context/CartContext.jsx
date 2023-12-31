import React,{createContext,useEffect,useState} from "react";

export const CartContext = createContext();

export const CartProvider = (props) =>{
    const [list,setList] = useState([]);
    return(
        <CartContext.Provider value={[list,setList]}>
            {props.children}
        </CartContext.Provider>
    )
}