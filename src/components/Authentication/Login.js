import {useState} from 'react'
import axios from 'axios';
const Login =()=>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const payload = {
            email : username,
            password : password
        }
        axios.post('https://api.escuelajs.co/api/v1/auth/login', payload).
        then((res)=>{
            console.log("Login Successfully ", res);
        }).catch((error)=>{
            console.log(error)
        })
        // console.log("output", payload);
    }
    return(
        <div>
            <div className="login-form">
                <form className='form-contnet' onSubmit={handleSubmit}>
                    <h2 className='login-heading' >Login Here</h2>
                    <input type="email" name='username' id="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Email" />
                    <input type="password" name='password' id ="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                    <div className='btn-group'>
           
                    <button className="btn">Login</button>
                    <button className="btn">Sign Up</button>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}
export default Login;