/* eslint-disable react-hooks/exhaustive-deps */

import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';
import { useEffect } from "react";

const EmailKonfirm = () => {
    const history = useHistory();
    useEffect(() => {
        const timer = setTimeout(() => {
            history.push("/login");
        }, 1000);
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