import CartItem from "../../components/cartItem/CartItem"
import Container from "../../components/container/Container"
import Button from "../../components/button/Button";
import {useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
  const{cartItems}=useShoppingCartContext();
  

  return (
    <div>
        <Container>
            <div>
              {cartItems.map((item) =>(
                <CartItem {...item}/>))}
            </div>
            <div className="bg-gray-200 rounded p-5">
              <p>
                Total price: $100
              </p>
              <p>sale :$20</p>
              <p>final price:$80</p>
            </div>
            <Button className="mt-2" variant="success">Buy</Button>
        </Container>
    </div>
  )
}

export default Cart