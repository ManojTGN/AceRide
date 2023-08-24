
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import env from 'react-dotenv';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Redirect from './pages/Redirect';
import axios from 'axios';

import {useJsApiLoader} from '@react-google-maps/api';

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const [data,setData] = useState(null);
    useJsApiLoader({ googleMapsApiKey:env.GOOGLE_MAP_API });

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

    // v2.Translate();

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
            <Route path="/options" element={<Dashboard page={'SETTINGS'} data={data}/>}/>

            <Route path="/404" element={<Redirect redirect={'/dashboard'}/>}/>
            <Route path="/logout" element={<Dashboard page={'LOGOUT'} data={data}/>}/>
        </Routes>
    );
}

export default App;
