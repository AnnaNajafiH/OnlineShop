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
<div>
    <Container>
    <div className='bg-slate-200 p-12 rounded'>
        <label htmlFor="text">User Name:</label>
        <input onChange={handleChange} type="text" placeholder='user name' name="username" value={user.username}/><br />
        <label htmlFor="password">Password:</label>
        <input onChange={handleChange} type="password" placeholder='password' name="password" value={user.password} />
        <button onClick={()=>handleLogin(user.username, user.password)} className='bg-green-300 text-white rounded m-4 px-3'>Login</button>
    </div>
</Container>
</div>
  )
}

export default Login