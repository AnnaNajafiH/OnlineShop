import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Container>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Your Shopping Cart</h1>

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
        <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Total Price:</span>
              <span className="font-semibold">$100</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Discount:</span>
              <span className="font-semibold">-$20</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-4 mt-4">
              <span>Final Price:</span>
              <span>$80</span>
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
