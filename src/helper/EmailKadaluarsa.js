/* eslint-disable react-hooks/exhaustive-deps */
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
const EmailKadaluarsa = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/login");
        }, 10);
        return () => clearTimeout(timer);
    }, []);
    const AlertEmailKadaluarsa = () =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Terjadi kesalahan: Email sudah kedaluwarsa mohon kirim konfirmasi lagi!`,
           }) 
    }

    return (
        AlertEmailKadaluarsa()
    )
}
 
export default EmailKadaluarsa