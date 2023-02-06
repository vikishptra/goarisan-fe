import React, { useState } from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();

        const Auth = async (e) => {
            e.preventDefault();
            try {
                 const response = await axios.post('http://localhost:8002/login', {
                    email: email,
                    password: password
                },
                {withCredentials: true}
                );
                const refresh_token = response.data.data.refresh_token;
                Cookies.set("refresh_token", refresh_token);
                history.push("/dashboard");
            } catch (error) {
                if (error.response) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...', 
                        text: `Terjadi kesalahan: ${error.response.data.errorMessage}`,
                      }) 
                }
            }
        }
       
    
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type={showPassword ? "text" : "password"} className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} id="pass" required/>
                                        <i
                                        className={`fa fa-${showPassword ? "eye-slash" : "eye"}`}
                                        onClick={() => setShowPassword(!showPassword)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button  className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Login