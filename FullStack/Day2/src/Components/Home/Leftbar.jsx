import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CreditCard, BookCheck, Cog, Mail, Users, Globe , LogOut} from 'lucide-react';
import '../../assets/Css/Style.css';
const Leftbar = () => {
    const navigate = useNavigate();
    const UserLinks = [
        {
            title: 'Dashboard',
            path: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Memberships',
            path: '/admin/plans',
            icon: CreditCard
        },
        {
            title: 'Assessments',
            path: '/admin/assessments',
            icon: BookCheck
        },
        {
            title: 'Users',
            path: '/admin/users',
            icon: Users
        },
        {
            title: 'Mails',
            path: '/admin/support',
            icon: Mail
        },
        {
            title: 'Configs',
            path: '/admin/siteconfigs',
            icon: Globe
        },
        {
            title: 'Settings',
            path: '/admin/settings',
            icon: Cog
        },
    ];

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className='sidebar bg-white-400 text-black'>
            {/* <div className='branding h-16 bg-gray-800 flex items-center justify-center'>
                <span className='text-2xl font-bold'>MCQ</span><span className='text-orange-500 px-1'> Admin</span>
            </div> */}
            <div className='links flex flex-col gap-1 overflow-y-auto'>
                {UserLinks.map((link, index) => (
                    <NavLink key={index} to={link.path} className='link p-4 text-black-300 flex items-center gap-2 hover:bg--800'>
                        <span className="sidebar-icon">{React.createElement(link.icon, { size: 20 })}</span>
                        <span className="sidebar-text">{link.title}</span>
                    </NavLink>
                ))}
            </div>
             
        </div>
    );
};

export default Leftbar;
