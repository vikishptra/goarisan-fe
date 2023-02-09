/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
 
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:8001/refresh-token', {withCredentials:true});
            setToken(response.data.data.access_token);
            const decoded = jwt_decode(response.data.data.access_token);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...', 
                    text: `Terjadi kesalahan: ${error.response.data.errorMessage}`,
                  }) 
                navigate("/login");
            }
        }
    }
 
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:8001/refresh-token', {withCredentials:true});
            config.headers.Authorization = `Bearer ${response.data.data.access_token}`;
            setToken(response.data.data.access_token);
            const decoded = jwt_decode(response.data.data.access_token);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:8001/api/v1/user/', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials:true
        });
       
        setUsers(response.data.data);
    }
 
    return (
        <div className="container mt-5">
            <h1>Welcome Back</h1>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
        
                        <tr>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                        </tr>
  
 
                </tbody>
            </table>
        </div>
    )
}
 
export default Dashboard