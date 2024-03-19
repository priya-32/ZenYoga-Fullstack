import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Home/Navbar';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
        <Navbar/>
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-md shadow-md p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input type="number" id="phone" placeholder="Enter your phone number" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" placeholder="Enter your email address" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-gray-700">
                    Already have an account? <span className="text-blue-500 cursor-pointer font-semibold" onClick={() => navigate('/login')}>Login</span>
                </p>
            </div>
            
        </div>
        
        </>
    );
};

export default Register;
