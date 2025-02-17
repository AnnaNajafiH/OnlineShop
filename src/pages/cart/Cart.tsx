import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";


import { useMemo } from "react";


function Cart() {
  const { cartItems } = useShoppingCartContext();
  // console.log(cartItems);

//=========================================================================================
//useMemo
//=========================================================================================
  // Calculate the total price of all items in the cart
  const totalPrice = useMemo(() => {
    // return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
    return cartItems.reduce((total, item) => total +  item.qty, 0);
  }, [cartItems]);

  // Define a discount (e.g., 20%)
  const discountPercentage = 20;
  const discount = useMemo(() => (totalPrice * discountPercentage) / 100, [totalPrice]);

  // Calculate final price after applying the discount
  const finalPrice = useMemo(() => totalPrice - discount, [totalPrice, discount]);


//=========================================================================================


  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Container>
        <h1 className="text-2xl font-semibold text-gray-600 hover:text-blue-800 mb-6">Your Shopping Cart</h1>

        {/* Cart Items List */}
        <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))
          ) : (
            <p className="text-gray-500 text-center py-6">Your cart is currently empty.</p>
          )}
        </div>

        {/* Cart Summary */}
        <div className="bg-slate-100 p-6 mt-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Total Price:</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Discount:</span>
              <span className="font-semibold">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-4 mt-4">
              <span>Final Price:</span>
              <span>${finalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end mt-6">
          <Button className="px-8 py-3 text-lg font-semibold rounded bg-green-500 hover:bg-green-600 text-white transition-colors duration-200" variant="success">
            Checkout
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
