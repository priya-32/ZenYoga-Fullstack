import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CreditCard, BookCheck, Cog, Mail, Users, Globe, LogOut } from 'lucide-react';

const AdminLeftbar = () => {
    const navigate = useNavigate();

    const UserLinks = [
        {
            title: 'Dashboard',
            path: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Students',
            path: '/admin/students',
            icon: Mail
        },
        {
            title: 'Courses',
            path: '/admin/courses',
            icon: BookCheck
        },
        {
            title: 'Institutes',
            path: '/admin/institutes',
            icon: Users
        },
        
        {
            title: 'Memberships',
            path: '/admin/premium',
            icon: CreditCard
        },
        // {
        //     title: 'Configs',
        //     path: '/admin/siteconfigs',
        //     icon: Globe
        // },
        // {
        //     title: 'Settings',
        //     path: '/admin/settings',
        //     icon: Cog
        // },
    ];

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className='sidebar bg-gray-900 text-black h-full w-64'>
            <div className='branding h-16 bg-white-800 flex items-center justify-center'>
                <span className='text-2xl font-bold'>Admin Dashboard</span>
            </div>
            <div className='links flex flex-col gap-1 overflow-y-auto'>
                {UserLinks.map((link, index) => (
                    <NavLink key={index} to={link.path} className='link p-4 text-black flex items-center gap-2 hover:bg-gray-800'>
                        <span className="sidebar-icon">{React.createElement(link.icon, { size: 20 })}</span>
                        <span className="sidebar-text">{link.title}</span>
                    </NavLink>
                ))}
            </div>
            <div className='logout mt-auto p-4 text-black'>
                <button onClick={handleLogout} className='link w-full p-2 text-black flex items-center gap-2 hover:bg-gray-800'>
                    <span className="sidebar-icon"><LogOut size={20} /></span>
                    <span className="sidebar-text text-black">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default AdminLeftbar;
