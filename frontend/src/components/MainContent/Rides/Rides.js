import { useState } from "react";
import ActiveRides from "./Tabs/ActiveRide";
import OlderRide from "./Tabs/OlderRide";


export default function Rides(){
    const [active,setActive] = useState('ACTIVE');//ACTIVE | OLDER | FRIENDS | ALL
    const PAGES = [
        { type:'ACTIVE',name:'Active Rides',icon:<i className="fa-solid fa-certificate"></i> },
        { type:'ALL',name:'All Rides',icon:<i className="fa-solid fa-clock-rotate-left"></i> },
        { type:'FRIENDS',name:'Friends Ride',icon:<i className="fa-solid fa-user-group"></i> },
        { type:'FAILED',name:'Failed Ride',icon:<i className="fa-solid fa-ban"></i> },
    ];

    return (
        <div className="w-full h-full bg-emerald-50 flex flex-col items-center"><br/>
        <div className="w-5/6">

        <div className="h-44 w-full gap-2 flex items-center justify-center">
            {PAGES.map((page,index)=>{
                return (
                    <div key={index} onClick={()=>setActive(page.type)} className={page.type===active?"w-3/6":"w-1/6"}>
                        <h1 className={"font-bold text-emerald-900 cursor-pointer transition-transform "+(page.type===active?"text-7xl":"text-1xl hover:scale-110 duration-100")}>
                            {page.icon} {page.name}
                        </h1>
                    </div>
                )  
            })}
        </div>
        <br/>
        {active==='ACTIVE'?<ActiveRides/>:
        active==='ALL'?<OlderRide/>:
        active==='FRIENDS'?null:
        active==='FAILED'?null:null}

        </div>
        </div>
    )
}