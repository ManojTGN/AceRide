import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterButton from "../Components/FilterButton";
import SearchBar from "../Components/Search";
import env from "react-dotenv";
import axios from "axios";
import Ride from "./ride";


export default function AllRide(props){
    const [search,setSearch] = useState('');
    const [filter,setFilter] = useState([
        {selected:false,type:'today',value:'Today',icon:<i className="fa-solid fa-calendar-day"></i>},
        {selected:false,type:'lastWeek',value:'Last Week',icon:<i className="fa-solid fa-calendar-week"></i>},
        {selected:false,type:'lastMonth',value:'Last Month',icon:<i className="fa-solid fa-calendar-days"></i>},
        {selected:false,type:'customRange',value:'CustomRange',icon:<i className="fa-solid fa-calendar"></i>},
        {selected:false,type:'driver',value:'Driver',icon:<i className="fa-solid fa-id-badge"></i>},
    ]);

    const [reloadTrigger,setReloadTrigger] = useState(0);
    const [rides,setRides] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        axios({
            method: 'POST',
            url:`http://localhost:${env.SERVER_PORT}/`,
            headers:{"Content-Type": "application/json" },
            data:{getRide:true,rideType:'ALL',filter:null}
        }).then((res)=>{
            setRides(res.data);
        }).catch((reason)=>{
            setRides(undefined);
        });  
    },[reloadTrigger]);

    return (
        <>
        {rides && rides.length !== 0?<>
        <div className="p-2 w-full flex gap-5">
            <SearchBar value={search} set={setSearch} placeholder={'Search Your Old Rides...'}/>
        </div>
        <div className="p-2 flex gap-3 w-full">
            {filter.map((comp,index)=>{
                if(comp.selected)
                return <FilterButton key={index} data={comp} onClick={()=>{let tmpFilter=[...filter];tmpFilter[index][`selected`]=!tmpFilter[index][`selected`];setFilter(tmpFilter)}} />;
                return null;
            })}
            <span className="w-5"></span>
            {filter.map((comp,index)=>{
                if(!comp.selected)
                return <FilterButton key={index} data={comp} onClick={()=>{let tmpFilter=[...filter];tmpFilter[index][`selected`]=!tmpFilter[index][`selected`];setFilter(tmpFilter)}} />;
                return null
            })}
        </div>
        <br/>
        <hr className="border-2 border-emerald-500 border-dashed"/>
        </>:null}
        <div className={"flex flex-col gap-5 items-center "+(rides===null || rides===undefined || (rides && rides.length === 0)?`h-full justify-center`:``)}>
        {
        rides && rides.length !== 0?
            rides.filter((comp)=>{
                if(search !== null && search.trim() === '') return true;
                if(comp.owner.name.toLowerCase().includes(search.toLowerCase()) || comp.name.toLowerCase().includes(search.toLowerCase()) || comp.bookedDateTime.includes(search.toLowerCase()) || comp.vehicle.toLowerCase().includes(search.toLowerCase())) return true;
                return false;
            }).map((component,index)=><Ride key={index} data={component} setReloadTrigger={setReloadTrigger} />):
        rides && rides.length === 0?
            <div className="w-full flex items-center justify-center rounded-l-2xl gap-5 bg-gradient-to-r from-emerald-100 to-transparent">
                <div className="w-4/6">
                    <img className="w-full rounded-l-2xl" src="images/bookNewRide.jpg" alt="booknewRide" draggable={false}/>
                </div>
                <div className="w-full h-full flex flex-col p-2">
                    <h1 className="font-bold text-emerald-800 text-5xl">Start Your Journey Now!</h1>
                    <p className="w-5/6 font-mono my-5 text-lg font-bold">
                    "Start a New Journey Now" - Your gateway to thrilling rides, scenic routes, and unforgettable adventures! 🏍️🛣️
                    </p>
                    <div className="h-full flex items-end justify-end relative">
                        <div className="absolute -left-1 duration-1000 transition-all z-0">
                            <i className="fa-solid fa-car-side text-emerald-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-50000 -delay-40000"></i>
                            <i className="fa-solid fa-van-shuttle text-emerald-300 text-4xl absolute -top-7 animate-rideLeft transition-all duration-30000 -delay-7500"></i>
                            <i className="fa-solid fa-motorcycle text-emerald-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-100000 -delay-80000"></i>
                            <i className="fa-solid fa-car-side text-emerald-300 text-4xl absolute -top-7 animate-rideLeft transition-all duration-40000 -delay-25000"></i>
                            <i className="fa-solid fa-van-shuttle text-emerald-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-70000 -delay-10000"></i>
                            <i className="fa-solid fa-motorcycle text-emerald-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-40000 -delay-7500"></i>
                            <i className="fa-solid fa-car-side text-emerald-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-40000 -delay-25000"></i>
                            <i className="fa-solid fa-van-shuttle text-emerald-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-30000 -delay-7500"></i>

                            <i className="fa-solid fa-car-side fa-flip-horizontal text-emerald-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-30000 -delay-7500"></i>
                            <i className="fa-solid fa-van-shuttle fa-flip-horizontal text-emerald-300 text-4xl absolute -top-7 animate-rideRight transition-all duration-50000 -delay-25000"></i>
                            <i className="fa-solid fa-motorcycle fa-flip-horizontal text-emerald-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-40000 -delay-25000"></i>
                            <i className="fa-solid fa-car-side fa-flip-horizontal text-emerald-300 text-4xl absolute -top-7 animate-rideRight transition-all duration-100000 -delay-40000"></i>
                            <i className="fa-solid fa-van-shuttle fa-flip-horizontal text-emerald-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-40000 -delay-7500"></i>
                            <i className="fa-solid fa-motorcycle fa-flip-horizontal text-emerald-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-70000 -delay-40000"></i>
                            <i className="fa-solid fa-car-side fa-flip-horizontal text-emerald-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-30000 -delay-7500"></i>
                            <i className="fa-solid fa-van-shuttle fa-flip-horizontal text-emerald-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-25000 -delay-25000"></i>
                        </div>
                        <button onClick={()=>navigate('../newRide')} className="z-1 relative mx-32 my-4 p-2 bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-md text-white font-bold"><i className="fa-solid fa-car-rear"></i> Book Ride Now</button>
                    </div>
                </div>
            </div>:
        rides === null?
            <div className="w-full h-full flex items-center justify-center text-emerald-700 animate-pulse ">
                <div className="w-1/6 flex justify-end"> <i className="fa-solid fa-circle-notch fa-spin fa-2xl text-9xl"></i> </div>
                <div className="w-full flex justify-center text-7xl font-bold"> Getting All Rides </div>
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