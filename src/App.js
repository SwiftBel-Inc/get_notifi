import './App.css';
import React, {Suspense, lazy, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import Builder from './Pages/Builder'
const Dashboard =lazy(()=>import('./Pages/Dashboard'));
const Header =lazy(()=>import("./Header"));
const Footer =lazy(()=>import("./Footer"));
const FooterBottom =lazy(()=>import("./FooterBottom"));
const HomePage =lazy(()=>import("./Pages/HomePage"));
const Pricing =lazy(()=>import("./Pages/Pricing"));
const HomeServices =lazy(()=>import("./Pages/Solutions/HomeServices"));
const ProffessionalServices =lazy(()=>import("./Pages/Solutions/ProffessionalServices"));
const Login =lazy(()=>import("./Pages/Login"));

function App() {
  const loading = () => (
    <p className="animated fadeIn pt-3 text-center" >...loading</p>
  );

  return (
    <div className="App">
              <Suspense fallback={loading()}
      >
        <BrowserRouter>
       {window.location.pathname !== '/login'?
  <Header/>
   :''}
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/blog" element={<Builder/>} />
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/home-services' element={<HomeServices/>}></Route>
        <Route path='/professional-services' element={<ProffessionalServices/>}></Route>
        <Route element={<ProtectedRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      {window.location.pathname !== '/login'?<>
    <Footer/>
   <FooterBottom/>
   </>:''}

   </BrowserRouter>
   </Suspense>
    </div>
  );
}

export default App;
