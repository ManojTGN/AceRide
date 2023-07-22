
import {Route, Routes} from 'react-router-dom';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Register/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/" element={<Dashboard/>}/>
            <Route path="/index" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    );
}

export default App;
