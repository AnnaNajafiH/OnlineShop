import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store";
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { ShoppingCartProvider, useShoppingCartContext } from "./context/ShoppingCartContext";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Login from "./pages/login/Login";

function App() {

  const {isLoggedIn}=useShoppingCartContext();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/login" element={isLoggedIn ?<Navigate to="/"/> : <Login/>} />

        <Route element={<PrivateRoute/>}>
        <Route path="/cart" element={<Cart/>} />  
        </Route>
      </Routes>
    </Layout>
  )
}

export default App;
