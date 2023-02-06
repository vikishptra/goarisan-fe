/* eslint-disable react-hooks/exhaustive-deps */

import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';
import { useEffect } from "react";

const KesalahanUser = () => {
    const history = useHistory();
    useEffect(() => {
        const timer = setTimeout(() => {
            history.push("/login");
        }, 1000);
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