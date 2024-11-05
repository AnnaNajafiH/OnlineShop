import Container  from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { ChangeEventHandler, useState } from "react";

function Login() {
const {handleLogin}= useShoppingCartContext()

const [user, setUser] = useState({
    username: "",
    password: "",
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value}= e.target;
    setUser({
        ...user,
        [name]: value,
    }); 

};

  return (
    <Container>
    <div className='flex justify-center items-center min-h-screen bg-slate-100'>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 mb-1">User Name:</label>
        <input 
        onChange={handleChange} 
        type="text" 
        id = "username"
        placeholder='Enter your username' 
        name="username" 
        value={user.username} 
        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-gray-300 transition duration-200"
        required
        />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block tex-gray-700 mb-1">Password:</label>
            <input 
            onChange={handleChange} 
            type="password" 
            id="password"
            placeholder='Enter your password' 
            name="password" 
            value={user.password}
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-gray-300 transition duration-200"
            required 
            />
        </div>
        <button onClick={()=>handleLogin(user.username, user.password)} 
        className="bg-gray-500 text-white rounded w-full py-2 hover:bg-gray-600 transition duration-200"

            >Login</button>
        </div>
    </div>
</Container>
  )
}

export default Login