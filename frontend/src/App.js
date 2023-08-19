
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import env from 'react-dotenv';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Redirect from './pages/Redirect';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    const [data,setData] = useState(null);
    
    useEffect(()=>{
        axios({
            method: 'POST',
            url:`http://localhost:${env.SERVER_PORT}/`,
            headers:{"Content-Type": "application/json" },
            data:{getHome:true}
        }).then((res)=>{
            setData(res.data);
        }).catch((reason)=>{
            if(location.pathname !== '/login' && reason && (reason.response.status === 401 || reason.response.status === 403)) navigate('../login');
        });
    },[]);
    return (
        <Routes>
            <Route path="/login" element={<Register/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/" element={<Dashboard page={'BOOK'} data={data}/>}/>
            <Route path="/index" element={<Dashboard page={'HOME'} data={data}/>}/>
            <Route path="/dashboard" element={<Dashboard page={'HOME'} data={data}/>}/>

            <Route path="/newRide" element={<Dashboard page={'BOOK'} data={data}/>}/>
            <Route path="/bookRide" element={<Dashboard page={'BOOK'} data={data}/>}/>

            <Route path="/yourRides" element={<Dashboard page={'RIDES'} data={data}/>}/>
            <Route path="/rides" element={<Dashboard page={'RIDES'} data={data}/>}/>

            <Route path="/profile" element={<Dashboard page={'PROFILE'} data={data}/>}/>
            <Route path="/yourProfile" element={<Dashboard page={'PROFILE'} data={data}/>}/>

            <Route path="/settings" element={<Dashboard page={'SETTINGS'} data={data}/>}/>
            <Route path="/address" element={<Dashboard page={'ADDRESS'} data={data}/>}/>
            <Route path="/options" element={<Dashboard page={'SETTINGS'} data={data}/>}/>

            <Route path="/404" element={<Redirect redirect={'/dashboard'}/>}/>
        </Routes>
    );
}

export default App;
