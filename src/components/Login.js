import React, { useState } from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [konfirmasiEmail, setKonfirmasiEmail] = useState('');
    const [konfirmasiEmailPassword, setKonfirmasiEmailPassword] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    const [isOpenEmail, setIsOpenEmail] = React.useState(false);
    const [isOpenNewPassword, setIsOpenNewPassword] = React.useState(false);


    const showModalEmail = () => {
      setIsOpenEmail(true);
    };
  
    const hideModalEmail = () => {
      setIsOpenEmail(false);
    };

    const showModalNewPassword = () => {
        setIsOpenNewPassword(true);
      };
    
      const hideModalNewPassword = () => {
        setIsOpenNewPassword(false);
      };
        const Auth = async (e) => {
            e.preventDefault();
            try {
                 const response = await axios.post('http://localhost:8001/login', {
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
        const KonfirmasiEmail = async (e) =>{
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:8001/confirm',null, { params: {
                    email: konfirmasiEmail
                }   
            })
            if(response.status === 200){
                const message = response.data.data.message;
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `${message}`,
                  }).then(() => {
                    window.location.reload();
                  });
             }  
            } catch (error) {
                if (error.response) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...', 
                        text: `Terjadi kesalahan: ${error.response.data.errorMessage}`,
                      }).then(() => {
                        if (error.response.data.errorMessage === "email anda tidak terdaftar pergi untuk daftar akun anda") {
                            history.push(`/register?${error.response.data.errorMessage}`)
                        }
                      });
                }
            }
        }


        const KonfirmasiEmailPassword = async (e) =>{
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:8001/change/password',null, { params: {
                    email: konfirmasiEmailPassword
                }   
            })
            if(response.status === 200){
                const message = response.data.data.message;
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `${message}`,
                  }).then(() => {
                    window.location.reload();
                  });
             }  
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
                            <div className='box'>
                            <form onSubmit={Auth}>
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
                                    <button className="button is-success is-fullwidth">Masuk</button>
                                    <Link to="/register" style={{ textDecoration: 'none'}} >
                                        <button className="button is-danger is-fullwidth mt-2">Daftar Akun Anda</button>
                                    </Link>
                                    <>
                                    <Modal  show={isOpenEmail} onHide={hideModalEmail} size="xs" aria-labelledby="contained-modal-title-vcenter" centered style={{backgroundColor: "#fffff"}} >
                                        <Modal.Header>
                                        <Modal.Title>Konfirmasi Email Anda</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <input type="email" className="input" placeholder="Email" value={konfirmasiEmail} onChange={(e) => setKonfirmasiEmail(e.target.value)} required/>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <button onClick={hideModalEmail} className='button is-danger'>Cancel</button>
                                        <button onClick={KonfirmasiEmail} className='button is-success'>Save</button>
                                        </Modal.Footer>
                                    </Modal>
                                    </>
                                    <>
                                    <Modal  show={isOpenNewPassword} onHide={hideModalNewPassword} size="xs" aria-labelledby="contained-modal-title-vcenter" centered style={{backgroundColor: "#fffff"}} >
                                        <Modal.Header>
                                        <Modal.Title>Masukkan Email Anda</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <input type="email" className="input" placeholder="Email" value={konfirmasiEmailPassword} onChange={(e) => setKonfirmasiEmailPassword(e.target.value)} required/>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <button onClick={hideModalNewPassword} className='button is-danger'>Cancel</button>
                                        <button onClick={KonfirmasiEmailPassword} className='button is-success'>Save</button>
                                        </Modal.Footer>
                                    </Modal>
                                    </>
                                </div>
                            </form>
                            <button onClick={showModalEmail} className='button is-info is-fullwidth mt-2'>Konfirmasi Email</button>
                            <button onClick={showModalNewPassword} className='button is-info is-fullwidth mt-2'>Lupa Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Login