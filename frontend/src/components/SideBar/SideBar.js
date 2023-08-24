import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Translate from "../Translate";
import { useEffect, useReducer, useState } from "react";

function reducer(staticText,action){
    if(action.type === 'changeLanguage')
        return action.payload;
    return staticText;
}

export default function SideBar(props){
    let navigate = useNavigate();

    const [staticText,dipatchText] = useReducer(reducer,{
        Navigation:"Navigation",
        Home:"Home",
        BookNewRide:"Book New Ride",
        YourRides:"Your Rides",
        Preference:"Preference",
        Profile:"Profile",
        Settings:"Settings",
        Account:"Account",
        LogOut:"LogOut",
    });
    
    useEffect(()=>{
        if(props.data.settings.language!=='en')
        Translate(staticText, dipatchText, props.data.settings.language);
    },[]);
    
    return(
        <div className={"h-full bg-neutral-100 fixed transition-all duration-150 "} style={{width:(props.navBar?'16.6%':'100px')}}>
            <div className={"w-full p-2 flex items-center gap-2 "+(props.navBar?'justify-center':'')}>
            <button className={`h-8 gap-5 bg-${props.data.settings.theme}-700 rounded hover:scale-105 cursor-pointer text-white flex items-center justify-center `+(props.navBar?'w-1/6':'w-full')} onClick={()=>props.setNavBar((prev)=>!prev)}>
                <i className={"fa-solid fa-angle-left "+(props.navBar?'':'fa-flip-horizontal')}></i>
            </button>
            <button className={`h-8 box-border gap-5 bg-${props.data.settings.theme}-700 rounded text-white flex items-center justify-center overflow-hidden `+(props.navBar?'w-full':'w-0 h-0 opacity-0')}>
                <i className="fa-solid fa-car-rear"></i> AceRide
            </button>
            </div>
            <hr className="border-2 border-dashed border-b-neutral-300"/>
            <br/>
            <div className="flex flex-col gap-2">
                <p className={"mx-2 font-bold transition-all duration-100 "+(props.navBar?'opacity-100':'opacity-0 w-0 h-0')}>{staticText.Navigation}</p>
                <Button data={props.data} hide={props.navBar} onClick={()=>navigate('../dashboard')} value={staticText.Home} icon={<i className="fa-solid fa-hashtag"></i>} active={props.selectedPage === 'HOME'}></Button>
                <Button data={props.data} hide={props.navBar} onClick={()=>navigate('../newRide')} value={staticText.BookNewRide} icon={<i className="fa-solid fa-location-dot"></i>} active={props.selectedPage === 'BOOK'}></Button>
                <Button data={props.data} hide={props.navBar} onClick={()=>navigate('../rides')} value={staticText.YourRides} icon={<i className="fa-solid fa-taxi"></i>} active={props.selectedPage === 'RIDES'}></Button>
            </div>
            <br/>
            <hr className="border-2 border-dashed border-b-neutral-300"/>
            <br/>
            <div className="flex flex-col gap-2">
                <p className={"mx-2 font-bold transition-all duration-100 "+(props.navBar?'opacity-100':'opacity-0 w-0 h-0')}>{staticText.Preference}</p>
                <Button data={props.data} hide={props.navBar} onClick={()=>navigate('../profile')} value={staticText.Profile} icon={<i className="fa-solid fa-user"></i>} active={props.selectedPage === 'PROFILE'}></Button>
                <Button data={props.data} hide={props.navBar} onClick={()=>navigate('../settings')} value={staticText.Settings} icon={<i className="fa-solid fa-gear"></i>} active={props.selectedPage === 'SETTINGS'}></Button>
            </div>
            <br/>
            <hr className="border-2 border-dashed border-b-neutral-300"/>
            <br/>
            <div className="flex flex-col gap-2">
                <p className={"mx-2 font-bold transition-all duration-100 "+(props.navBar?'opacity-100':'opacity-0 w-0 h-0')}>{staticText.Account}</p>
                <Button data={props.data} hide={props.navBar} onClick={()=>navigate('../logout')} value={staticText.LogOut} icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>} active={props.selectedPage === 'LOGOUT'}></Button>
            </div>
            <br/>
        </div>
    );
}