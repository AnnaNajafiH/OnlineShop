import {createContext, useEffect } from "react";
import {useState} from "react";
import { useContext } from "react"; 
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";


interface ShoppingCartProvider{
    children: React.ReactNode;
}
interface CartItem{
    id:number;
    qty:number;
}

interface ShoppingCartContext{
    cartItems:CartItem[];
    handleIncreaseProductQty:(id:number)=>void;
    handleDecreaseProductQty:(id:number)=>void;
    getProductQty:(id:number)=>number;
    handleRemoveProduct:(id:number) =>void;
    cartQty:number;
    isLoggedIn:boolean;
    handleLogin:(username:string, password:string)=>void;
    handleLogout:()=>void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);   
//if you try to access a property or method that isn’t in ShoppingCartContext, you’ll get a type error.


//a custom hook that returns the context value
export const useShoppingCartContext=()=>{
    return useContext(ShoppingCartContext)
}
//=================================================================================================
// Add the product to the cart
//=================================================================================================
export function ShoppingCartProvider({children}:ShoppingCartProvider){
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cartItem" , []);
    // const [cartItem1, setCartItems1] = useLocalStorage<CartItem[]> ("cartItems",[]);
     

//=================================================================================================
// Increase the quantity of the product in the cart
//=================================================================================================
const handleIncreaseProductQty=(id:number)=>{
    setCartItems((currentItems)=>{
    // Check if the item is already in the cart
        let selectedItem = currentItems.find((item)=>item.id==id)
    // If the item is not in the cart, add it with qty: 1
        if (selectedItem==null){
            return [...currentItems,{id:id,qty:1}]
        }
        else{
            // If the item is in the cart, increase the quantity
            return currentItems.map((item)=>{
                if(item.id==id){
                    return {...item,qty:item.qty+1}
                }
                return item;
            })
        }
    })
};

//=================================================================================================
// Decrease the quantity of the product in the cart
//=================================================================================================

const handleDecreaseProductQty=(id:number)=>{
    setCartItems((currentItems)=>{          //currentItems:the latest value of cartItems
    let selectedItem= currentItems.find ((item)=> item.id == id)
    if (selectedItem?.qty===1){
        return currentItems.filter((item)=>item.id!==id)
    }else{
        return currentItems.map((item)=>{
            if (item.id==id){
                return {...item,qty:item.qty-1}
            }else{
                return item;
            }
        })
    }

})
}

//=================================================================================================
// Get the quantity of the product in the cart
//=================================================================================================
const getProductQty=(id:number)=>{
    return cartItems.find(item=>item.id==id)?.qty || 0;
     
}

//=================================================================================================
//Remove product Button
//=================================================================================================
const handleRemoveProduct =(id:number) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
}

//=================================================================================================
//quantity inside buy basket  using "Reduce" Method
//=================================================================================================
const cartQty= cartItems.reduce((totalQty, item)=>totalQty+item.qty,0);

//=================================================================================================
//logIn
//=================================================================================================
const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigate=useNavigate();


const handleLogin = (username:string, password:string) => {
    login(username, password).finally(()=>{   //it should be then instead of finally, but to make it work, we use finally here 
        let token = "shghasjhjcnkmlasmnmncxmnmxnskjfkdjfkdfgkdfgjkjdfgjsklfkas";
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
    })
    setIsLoggedIn(true);
    navigate("/cart");
    }

const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
    localStorage.removeItem("token");
    }

useEffect(()=>{
    let token = localStorage.getItem("token");
    if (token){
        setIsLoggedIn(true);
    }
},[])

    return(
    <ShoppingCartContext.Provider value={{cartItems, handleIncreaseProductQty,handleDecreaseProductQty,getProductQty, handleRemoveProduct,cartQty,isLoggedIn,handleLogin, handleLogout}}>
        {children}
    </ShoppingCartContext.Provider>
    )
}