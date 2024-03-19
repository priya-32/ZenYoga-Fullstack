import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Home/Navbar';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [userType, setUserType] = useState('user'); // Default user type is 'user'

    const handleLogin = (e) => {
        e.preventDefault();
        const loginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            userType: userType // Include userType in login data
        };
        console.log(loginData);
        // Redirect user based on userType
        if (userType === 'user') {
            navigate('/user/dashboard');
        } else if (userType === 'admin') {
            navigate('/admin/dashboard');
        }
    };

    return (
        <>
        <Navbar/>
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        ref={emailRef}
                        placeholder="Enter your email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        ref={passwordRef}
                        placeholder="Enter your password"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="userType" className="block text-gray-700 font-semibold mb-2">Login As</label>
                    <select
                        id="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                </div>
                <p className="mt-4 text-center text-gray-700">
                    Don't have an account? <span className="text-blue-500 cursor-pointer font-bold" onClick={() => navigate('/register')}>Register</span>
                </p>
            </form>
        </div>
        </>
    );
};

export default Login;
