import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: username,
            password: password
        }
        axios.post('https://api.escuelajs.co/api/v1/auth/login', payload).
            then((res) => {
                if (res.data && res.data.access_token) {

                    localStorage.setItem("token", JSON.stringify(res.data.access_token));
                    console.log(JSON.stringify(res.data.access_token));
                    console.log("Login Successfully ", res);
                    alert("Login Successfully")

                    navigate("/profile");
                }
                else{
                    setError("Invalid credentials")
                }





            }).catch((error) => {
                console.log(error.message)
            })
        // console.log("output", payload);
    }
    return (
        <div>
            <div className="login-form">
                <form className='form-contnet' onSubmit={handleSubmit}>
                    <h2 className='login-heading' >Login Here</h2>
                    <input type="email" name='username' id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email" />
                    <input type="password" name='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
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