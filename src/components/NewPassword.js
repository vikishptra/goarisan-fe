/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useState } from 'react'
import {  useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    // eslint-disable-next-line
    const [query] = useSearchParams()
    const token = query.get("token")  
    const id = query.get("id") 

    const NewPasswordUser = async (e) => {
        e.preventDefault();

        try {
             const response = await axios.post('http://localhost:8001/new/password', {
                token: token,
                id: id,
                password: password,
                confirm_password: confirm_password
            },
            );
            if(response.status === 200){
                const message = response.data.data.message;
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `${message}`,
                  })
                console.log(message)
            }
            navigate("/login");
        } catch (error) {
            if (error.response.status === 403){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...', 
                    text: `Terjadi kesalahan: ${error.response.data.errorMessage}`,
                  }) 
                navigate('/login')
            }
            if (error.response) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...', 
                    text: `Terjadi kesalahan: ${error.response.data.errorMessage}`,
                  }) 
            }
        }
    }

    return(
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                        <form className="box" onSubmit={NewPasswordUser}>
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
                                <button className="button is-success is-fullwidth">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>


    )

}

 
export default NewPassword