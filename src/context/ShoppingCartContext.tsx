import {createContext } from "react";
import {useState} from "react";
import { useContext } from "react"; 

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
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext=()=>{
    return useContext(ShoppingCartContext)
}
//=================================================================================================
// Add the product to the cart
//=================================================================================================
export function ShoppingCartProvider({children}:ShoppingCartProvider){
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
    setCartItems((currentItems)=>{
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


    return(
    <ShoppingCartContext.Provider value={{cartItems, handleIncreaseProductQty,handleDecreaseProductQty,getProductQty, handleRemoveProduct,cartQty}}>
        {children}
    </ShoppingCartContext.Provider>
    )
}