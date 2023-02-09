/* eslint-disable react-hooks/exhaustive-deps */
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const EmailKonfirm = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/login");
        }, 10);
        return () => clearTimeout(timer);
    }, []);
    const AlertEmailKonfirm = () =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Terjadi kesalahan: Email sudah di konfirmasi`,
           }) 
    }

    return (
        AlertEmailKonfirm()
    )
}
 
export default EmailKonfirm