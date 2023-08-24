import { useEffect, useReducer, useState } from "react";
import ActiveRides from "./Tabs/ActiveRide";
import AllRide from "./Tabs/AllRide";
import Translate from "../../Translate";


function reducer(staticText,action){
    if(action.type === 'changeLanguage')
        return action.payload;
    return staticText;
}

export default function Rides(props){

    const [staticText,dipatchText] = useReducer(reducer,{
        ActiveRides:"Active Rides",
        AllRides:"All Rides"
    });

    const [active,setActive] = useState('ACTIVE');//ACTIVE | OLDER | FRIENDS | ALL
    const PAGES = [
        { type:'ACTIVE',name:staticText.ActiveRides,icon:<i className="fa-solid fa-certificate"></i> },
        { type:'ALL',name:staticText.AllRides,icon:<i className="fa-solid fa-clock-rotate-left"></i> },
    ];

    useEffect(()=>{
        if(props.data.settings.language!=='en')
        Translate(staticText, dipatchText, props.data.settings.language);
    },[]);

    return (
        <div className={`w-full h-full bg-${props.data.settings.theme}-50 flex flex-col items-center`}><br/>
        <div className="w-5/6">

        <div className="h-44 w-full gap-2 flex items-center justify-start">
            {PAGES.map((page,index)=>{
                return (
                    <div key={index} onClick={()=>setActive(page.type)} className={page.type===active?"w-3/6":"w-1/6"}>
                        <h1 className={`font-bold cursor-pointer transition-transform `+(page.type===active?`text-7xl text-${props.data.settings.theme}-900`:`text-1xl hover:scale-110 duration-100 text-${props.data.settings.theme}-700`)}>
                            {page.icon} {page.name}
                        </h1>
                    </div>
                )  
            })}
        </div>
        <br/>
        
        {active==='ACTIVE'?<ActiveRides data={props.data}/>:
        active==='ALL'?<AllRide/>:null}

        </div>
        </div>
    )
}