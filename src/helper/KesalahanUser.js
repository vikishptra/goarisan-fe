/* eslint-disable react-hooks/exhaustive-deps */

import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const KesalahanUser = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/login");
        }, 10);
        return () => clearTimeout(timer);
    }, []);
    const AlertKesalahanUser = () =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Terjadi kesalahan: Seperti ada yang salah dari anda!`,
           }) 
    }

    return (
        AlertKesalahanUser()
    )
}
 
export default KesalahanUser