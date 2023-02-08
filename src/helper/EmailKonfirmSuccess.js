/* eslint-disable react-hooks/exhaustive-deps */
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';
import { useEffect } from "react";

const EmailKonfirmSuccess = () => {
    const history = useHistory();
    useEffect(() => {
        const timer = setTimeout(() => {
            history.push("/login");
        }, 10);
        return () => clearTimeout(timer);
    }, []);
    const AlertEmailKonfirm = () =>{
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `Berhasil konfirmasi email anda !`,
           }) 
    }

    return (
        AlertEmailKonfirm()
    )
}
 
export default EmailKonfirmSuccess