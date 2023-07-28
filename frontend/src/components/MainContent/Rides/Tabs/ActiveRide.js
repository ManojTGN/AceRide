import { useEffect, useState } from "react";
import SearchBar from "../Search";
import env from "react-dotenv";
import { useNavigate } from "react-router-dom";
import Ride from "./ride";
import axios from "axios";

export default function ActiveRides(props){
    const [iconAnim,setIconAnim] = useState({
        curr:0,
        icon:{
            curr:0,total:7,
            icons:[
                "fa-solid fa-motorcycle fa-2xl text-9xl",
                "fa-solid fa-car-rear fa-2xl text-9xl",
                "fa-solid fa-van-shuttle fa-2xl text-9xl",
                "fa-solid fa-bus fa-2xl text-9xl"
            ]
        }
    });

    const [search,setSearch] = useState('');
    const [rides,setRides] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        axios({
            method: 'POST',
            url:`http://localhost:${env.SERVER_PORT}/`,
            headers:{"Content-Type": "application/json" },
            data:{getRide:true,rideType:'ACTIVE',filter:null}
        }).then((res)=>{
            setRides(res.data);
        }).catch((reason)=>{
            setRides(undefined);
        });  
    },[]);

    useEffect(()=>{
        setTimeout(()=>{
            if(rides && rides.length !== 0) return null;

            let tmpIconAnim = {...iconAnim};
            tmpIconAnim.curr += 1;
    
            if(tmpIconAnim.curr >= tmpIconAnim.icon.total){
                tmpIconAnim.icon.curr+= 1;
                tmpIconAnim.curr = 0;
            }
            
            if(tmpIconAnim.icon.curr >= tmpIconAnim.icon.icons.length){
                tmpIconAnim.icon.curr = 0;
                tmpIconAnim.curr = 0;
            }

            setIconAnim(tmpIconAnim);
        },200);
    },[iconAnim.curr]);

    return (
        <>
        {rides && rides.length !== 0?
        <>
            <div className="p-2 w-full flex gap-5">
                <SearchBar value={search} set={setSearch} placeholder={'Search Your Active Rides...'}/>
            </div>
            <div className="p-2 flex gap-3 w-full">
                (Todo: Filter Section)
            </div>

            <br/>
            <hr className="border-2 border-emerald-500 border-dashed"/>
            <br/>
        </>
        :null}

        <div className={"flex flex-col gap-5 items-center "+(rides && rides.length === 0?`justify-center`:``)}>
        {
        rides && rides.length !== 0?
            rides.filter((comp)=>{
                if(search !== null && search.trim() === '') return true;
                if(comp.owner.name.toLowerCase().includes(search.toLowerCase()) || comp.name.toLowerCase().includes(search.toLowerCase()) || comp.bookedDateTime.includes(search.toLowerCase())) return true;
                return false;
            }).map((component,index)=><Ride key={index} data={component}/>):
        rides && rides.length === 0?
            <div className="group w-full hover:scale-125 transition-all duration-150 flex items-center justify-center text-emerald-700 cursor-pointer" onClick={()=>navigate('../newRide')}>
                <div className="absolute z-0 group-hover:scale-50 transition-all duration-75 overflow-hidden">
                    {(function (){
                        if(rides && rides.length !== 0) return null;

                        let icons = [];let tmp = null;
                        for(let i = 0; i < iconAnim.icon.total; i++){
                            tmp = iconAnim.icon.icons[iconAnim.icon.curr]
                            tmp += (i === iconAnim.curr)?' text-emerald-400':' blur-sm text-emerald-200';
                            icons.push(<i className={tmp}></i>);
                        }
                        return icons;
                    })()}
                </div>
                <div className="w-1/6 flex justify-end z-10"> <i className="fa-solid fa-plus fa-2xl text-9xl"></i> </div>
                <div className="w-full flex justify-center text-7xl font-bold z-10"> Book Your Ride Now </div>
            </div>:
        rides === null?
            <div className="w-full flex items-center justify-center text-emerald-700 animate-pulse">
                <div className="w-1/6 flex justify-end"> <i className="fa-solid fa-circle-notch fa-spin fa-2xl text-9xl"></i> </div>
                <div className="w-full flex justify-center text-7xl font-bold"> Getting Your Active Rides </div>
            </div>:
        rides === undefined?
            <div className="w-full flex items-center justify-center text-emerald-700 animate-pulse">
                <div className="w-1/6 flex justify-end"> <i className="fa-solid fa-circle-exclamation fa-2xl text-9xl"></i> </div>
                <div className="w-full flex justify-center text-7xl font-bold"> Something went wrong </div>
            </div>
        :null}

        </div>
        </>
    )
}