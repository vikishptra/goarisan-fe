import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    const axiosJWT = axios.create();
    const logout = async () => {
      try {
        const token = Cookies.get('refresh_token')
        const response = await axiosJWT.post('http://localhost:8002/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        });
        Cookies.remove('refresh_token')
        if(response.status === 200){
            const message = response.data.data.message;
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: `${message}`,
              })
            console.log(message)
        }
        history.push("/login");
    } catch (error) {
        if (error.response) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Terjadi kesalahan: ${error.response.data.errorMessage}`,
          });
        }
      }
    };
 
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
                    </a>
 
                    <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
 
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item">
                            Home
                        </a>
                    </div>
 
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={logout} className="button is-light">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
 
export default Navbar