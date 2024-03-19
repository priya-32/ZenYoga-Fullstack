import React from 'react';
import Navbar from '../Components/Home/Navbar';
import { Outlet } from 'react-router-dom';
import Leftbar from '../Components/Home/Leftbar';
import PageSection from '../Components/Home/PageSection';
import Home from '../Pages/Home';

const HomeLayout = () => {
    return (
        <div className='w-full'>
            <div className='m-0 p-0 flex flex-col h-screen w-screen overflow-hidden'>
                <div className='w-full'>
                    <Navbar />
                </div>
                <div className='flex flex-row w-full'>
                    <Leftbar />
                    <div className='flex-1 flex flex-col'>
                      <Home/>
                      <Outlet/>
                      </div>
                      {/* <PageSection/> */}
                </div>
            </div>
        </div>
    );
}

export default HomeLayout;
