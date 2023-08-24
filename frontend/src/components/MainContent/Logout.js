
import { useNavigate} from 'react-router-dom';
import env from 'react-dotenv';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import Translate from '../Translate';

function reducer(staticText,action){
    if(action.type === 'changeLanguage')
        return action.payload;
    return staticText;
}

export default function Logout(props) {
    const navigate = useNavigate();

    function logout(){
        axios({
            method: 'POST',
            url:`http://localhost:${env.SERVER_PORT}/`,
            headers:{"Content-Type": "application/json" },
            data:{logout:true}
        }).then((res)=>{
            navigate("../login");
        }).catch((reason)=>{
            
        });
    }

    const [staticText,dipatchText] = useReducer(reducer,{
        ConfirmLogout:"Confirm Logout?",
        Yes:"Yes",
        No:"No",
    });
    
    useEffect(()=>{
        if(props.data.settings.language!=='en')
        Translate(staticText, dipatchText, props.data.settings.language);
    },[]);


    return (
        <div className='w-full h-screen bg-emerald-50 transition-all duration-700 overflow-hidden flex items-center justify-center'>
            <div>
            <p className='font-bold text-3xl text-emerald-600'><i className="fa-solid fa-arrow-right-from-bracket"></i> {staticText.ConfirmLogout}</p>
            <div className='flex gap-2 p-2'>
                <button onClick={logout} className="p-3 w-full bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-md text-white font-bold hover:scale-105 transition-all"> {staticText.Yes}</button>
                <button onClick={()=>navigate('../dashboard')} className="p-3 w-1/2 bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-md text-white font-bold hover:scale-110 transition-all"> {staticText.No} </button>
            </div>
            </div>
        </div>
    );
}
