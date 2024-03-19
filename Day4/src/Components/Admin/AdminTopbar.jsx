// AdminTopBar.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const AdminTopBar = () => {
    const user = useSelector(state => state.user); // Assuming user state is stored in Redux

    if (!user || !user.name) {
        return null;
    }

    return (
        <div className="admin-topbar">
            <div className='w-[85vw] h-[5vh] flex items-center justify-center shadow-md shadow-orange-500/50'>
                <div className='w-[95%] h-full flex justify-end items-center'>
                    <div className='font-bold text-orange-500'>
                        <h1>Welcome, {user.uname}</h1>
                        {user.email && <p>Email: {user.email}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminTopBar;
