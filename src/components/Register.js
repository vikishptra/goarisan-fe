import React, { useState } from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory, Link } from "react-router-dom";
 
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const history = useHistory();

        const Register = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:8001/register', {
                    name: name,
                    email: email,
                    password: password,
                    confirm_password: confirm_password
                });
                if(response.status === 201){
                    const message = response.data.data.message;
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: `${message}`,
                      })
                    console.log(message)
                }
                history.push("/");
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
                            <form onSubmit={Register} className="box">
                                <div className="field mt-2">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="field mt-2">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                                    </div>
                                </div>
                                <div className="field mt-2">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type={showPassword ? "text" : "password"} className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} id="pass" required/>
                                        <i
                                        className={`fa fa-${showPassword ? "eye-slash" : "eye"}`}
                                        onClick={() => setShowPassword(!showPassword)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-2">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type={showPassword2 ? "text" : "password"} className="input" placeholder="******" value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} id="pass" required/>
                                        <i
                                        className={`fa fa-${showPassword2 ? "eye-slash" : "eye"}`}
                                        onClick={() => setShowPassword2(!showPassword2)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-2">
                                    <button  className="button is-success is-fullwidth">Register</button>
                                    <Link to="/Login" style={{ textDecoration: 'none'}} >
                                        <button className="button is-danger is-fullwidth mt-2">Login</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Register