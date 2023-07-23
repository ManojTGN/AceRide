
import {Route, Routes} from 'react-router-dom';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Redirect from './pages/Redirect';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Register/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/" element={<Dashboard page={'HOME'}/>}/>
            <Route path="/index" element={<Dashboard page={'HOME'}/>}/>
            <Route path="/dashboard" element={<Dashboard page={'HOME'}/>}/>

            <Route path="/newRide" element={<Dashboard page={'BOOK'}/>}/>
            <Route path="/bookRide" element={<Dashboard page={'BOOK'}/>}/>

            <Route path="/yourRides" element={<Dashboard page={'RIDES'}/>}/>
            <Route path="/rides" element={<Dashboard page={'RIDES'}/>}/>

            <Route path="/profile" element={<Dashboard page={'PROFILE'}/>}/>
            <Route path="/yourProfile" element={<Dashboard page={'PROFILE'}/>}/>

            <Route path="/settings" element={<Dashboard page={'SETTINGS'}/>}/>
            <Route path="/options" element={<Dashboard page={'SETTINGS'}/>}/>

            <Route path="/404" element={<Redirect redirect={'/dashboard'}/>}/>
        </Routes>
    );
}

export default App;
