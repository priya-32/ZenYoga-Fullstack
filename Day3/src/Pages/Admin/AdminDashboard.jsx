import React from 'react'
import { BookCopy, DollarSign, Users } from 'lucide-react'

const AdminDashboard = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen bg-gray-100'>
            <div className='grid grid-cols-3 gap-8 max-w-4xl'>
                <DashboardCard icon={<Users className='text-blue-500' size={50} />} title="Total Users" value={20} />
                <DashboardCard icon={<BookCopy className='text-green-500' size={50} />} title="Total Tests" value={8} />
                <DashboardCard icon={<DollarSign className='text-purple-500' size={50} />} title="Subscription Profit" value={1000} />
            </div>
        </div>
    )
}

const DashboardCard = ({ icon, title, value }) => {
    return (
        <div className='bg-white rounded-md shadow-md p-6 flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center bg-gray-200 rounded-full w-16 h-16 mb-4'>
                {icon}
            </div>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>{value}</h2>
            <p className='font-semibold text-gray-600'>{title}</p>
        </div>
    )
}

export default AdminDashboard
