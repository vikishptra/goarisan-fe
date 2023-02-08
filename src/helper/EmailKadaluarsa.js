
/* eslint-disable react-hooks/exhaustive-deps */
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';
import { useEffect } from "react";
const EmailKadaluarsa = () => {
    const history = useHistory()
    useEffect(() => {
        const timer = setTimeout(() => {
            history.push("/login");
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