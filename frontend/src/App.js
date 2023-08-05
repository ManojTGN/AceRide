
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import env from 'react-dotenv';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Redirect from './pages/Redirect';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        axios({
            method: 'POST',
            url:`http://localhost:${env.SERVER_PORT}/`,
            headers:{"Content-Type": "application/json" },
            data:{}
        }).then((res)=>{}).catch((reason)=>{
            if(location.pathname !== '/login' && reason && reason.response.status === 401) navigate('../login');
        });
    },[]);
    return (
        <Routes>
            <Route path="/login" element={<Register/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/" element={<Dashboard page={'BOOK'}/>}/>
            <Route path="/index" element={<Dashboard page={'HOME'}/>}/>
            <Route path="/dashboard" element={<Dashboard page={'HOME'}/>}/>

            <Route path="/newRide" element={<Dashboard page={'BOOK'}/>}/>
            <Route path="/bookRide" element={<Dashboard page={'BOOK'}/>}/>

            <Route path="/yourRides" element={<Dashboard page={'RIDES'}/>}/>
            <Route path="/rides" element={<Dashboard page={'RIDES'}/>}/>

            <Route path="/profile" element={<Dashboard page={'PROFILE'}/>}/>
            <Route path="/yourProfile" element={<Dashboard page={'PROFILE'}/>}/>

            <Route path="/settings" element={<Dashboard page={'SETTINGS'}/>}/>
            <Route path="/address" element={<Dashboard page={'ADDRESS'}/>}/>
            <Route path="/options" element={<Dashboard page={'SETTINGS'}/>}/>

            <Route path="/404" element={<Redirect redirect={'/dashboard'}/>}/>
        </Routes>
    );
}

export default App;
