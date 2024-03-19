import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PageSection from './Components/Home/PageSection';
import Gallery from './Pages/Box';
import Web from './Pages/Web';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import AdminLayout from './Layouts/AdminLayout';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import Courses from './Pages/Admin/Courses';
import Students from './Pages/Admin/Student';
import Institute from './Pages/Admin/Institute';
import Certificate from './Pages/Certificate';
import Membership from './Pages/Admin/Membership';
import Carousel from './Pages/Carousel';
import { ContactUs } from './Pages/Contactus';
import Aboutus from './Pages/About';
import Footer from './Pages/Footer';
import Alumni from './Pages/Alumni';
// import Aboutus from './Pages/Aboutus';
// import './assets/Css/Stylle.css';



const App = () => {
  return (
    <BrowserRouter>
        {/* <Home/>
        
        <Gallery/>
        <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} /> */}

      <Routes>
      <Route
          path="/"
          element={
            <>
              <Home />
              <Gallery/>
              <Web/>
              <Alumni/>
              <Footer/>
            </>
          }
          />     
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element = {<AdminLayout/>}>
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path = '/admin/courses' element = {<Courses/>}/>
        <Route path = '/admin/students' element = {<Students/>}/>
        <Route path = '/admin/institutes' element = {<Institute/>}/>
        <Route path = '/admin/premium' element = {<Membership/>}/>
        {/* <Route path = '/admin/institutes' element = {<Institute/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
