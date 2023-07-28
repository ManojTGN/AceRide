import { useEffect, useState } from "react";
import env from "react-dotenv";
import axios from "axios";
import Modal from "./Modal";

export default function Ride(_props){
    const [fetch,setFetch] =  useState(false);
    const [props,setProps] = useState(_props);

    const [rateModal,setRateModal] = useState(false);

    useEffect(() => {
        setInterval(() => {
            if(!fetch)
                setFetch(true);
            axios({
                method: 'POST',
                url:`http://localhost:${env.SERVER_PORT}/`,
                headers:{"Content-Type": "application/json" },
                data:{getRide:true,rideType:'SINGLE',_id:props.data._id}
            }).then((res)=>{
                if(res.data) setProps({data:res.data});
                setFetch(false); 
            }).catch((reason)=>{setFetch(false);}); 

        }, 2000);
        //return () => clearInterval(timer);
    }, []);

    return (
        <>
        <Modal modalStatus={rateModal} />
        <div className="relative w-full">
        <div className="z-20 relative overflow-hidden w-full h-72 bg-gradient-to-r from-emerald-200 to-transparent hover:to-white p-5 rounded hover:scale-105 transition-all duration-100 hover:border-2 hover:border-emerald-600">
            <div className="w-full h-9 flex">
                <div className="flex w-full gap-2 items-center font-bold text-emerald-600">
                    <img src={props.data.owner.picture} alt="pfp" className="rounded-full w-7 h-7 bg-emerald-400"/> {props.data.owner.name}
                </div>
                <div className="w-full flex items-center justify-end font-bold text-emerald-600">
                    {props.data.bookedDateTime}
                </div>
            </div>
            <hr className="border-1 border-emerald-300 my-2 h-1"/>
            <div className="h-28 w-full flex gap-1">
                <div className="w-2/6 flex flex-col p-1">
                    <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-circle-dot"></i>
                        <input value={"  "+props.data.fromPlace} disabled={true} className="w-full h-9 border-2 border-emerald-700 rounded" style={{fontFamily:"Arial, FontAwesome"}}/>
                    </div>
                    <i className="fa-solid fa-ellipsis-vertical px-1"></i>
                    <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-circle-dot"></i>
                        <input value={"  "+props.data.toPlace} disabled={true} className="w-full h-9 border-2 border-emerald-700 rounded" style={{fontFamily:"Arial, FontAwesome"}}/>
                    </div>
                </div>
                <div className="w-2/6 p-1">
                    <div className="flex w-full text-emerald-700">
                        <p className="w-full text-left font-bold">
                            {
                            props.data.totalPeople===1?<i className="fa-solid fa-user"></i>:
                            props.data.totalPeople===2?<i className="fa-solid fa-user-group"></i>:
                            props.data.totalPeople>=3?<i className="fa-solid fa-users"></i>:
                            <i className="fa-solid fa-circle-exclamation"></i>
                            }
                            {props.data.totalPeople>=4?<i className="fa-solid fa-plus fa-2xs"></i>:null} People
                        </p>
                        <p className="w-full text-right font-bold">{props.data.totalPeople}</p>
                    </div>
                    <div className="flex w-full text-emerald-700">
                        <p className="w-full text-left font-bold">
                            {
                            props.data.vehicle==='motorcycle'?<i className="fa-solid fa-motorcycle"></i>:
                            props.data.vehicle==='car'?<i className="fa-solid fa-car-side"></i>:
                            props.data.vehicle==='van'?<i className="fa-solid fa-van-shuttle"></i>:
                            props.data.vehicle==='bus'?<i className="fa-solid fa-bus"></i>:
                            <i className="fa-solid fa-circle-exclamation"></i>
                            } Vehicle
                        </p>
                        <p className="w-full text-right font-bold">{props.data.vehicle}</p>
                    </div>
                    <div className="flex w-full text-emerald-700">
                        <p className="w-full text-left font-bold "><i className="fa-solid fa-road"></i> Distance</p>
                        <p className="w-full text-right font-bold">
                            {props.data.distance}
                        </p>
                    </div>
                    <div className="flex w-full text-emerald-700">
                        <p className="w-full text-left font-bold "><i className="fa-solid fa-clipboard-question"></i> When</p>
                        <p className="w-full text-right font-bold">
                            {props.data.dateTimeType==='now'?'RIGHT NOW':props.data.dateTimeType==='today'?props.data.time:props.data.date+' '+props.data.time}
                        </p>
                    </div>
                </div>
                <div className="w-2/6">
                    {/* driver details */}
                </div>
            </div>
            <div className="group flex gap-3">
                {props.data.totalPeople!==1?<p>Travelling With </p>:null}
                <div className="flex cursor-pointer">
                {(function (){
                    const people = [];

                    for(let i = 1; i < props.data.totalPeople; i++){
                        if(i <= props.data.friends.length){
                            people.push(
                                <img key={i} className={"rounded-full w-7 h-7 -mx-1 hover:scale-110 "+(props.data.totalPeople>=3?"-mx-1":"")} src="" alt={`${i-1}`} />
                            )
                            continue;
                        }

                        people.push(
                            <img key={i} className={"border-2 border-emerald-800 rounded-full w-7 h-7 hover:scale-110 "+(props.data.totalPeople>=3?"-mx-1":"")} src={`./images/guest_`+(i-1)+`.jpg`} alt={`${i-1}`} />
                        );
                    }
                    return people;
                })()} 
                </div> 
                <p className="flex cursor-pointer items-center hover:underline group-hover:underline">{props.data.totalPeople!==1?` +${props.data.totalPeople-1} People`:''}</p>
            </div>
            <div className="flex w-full gap-2 items-center justify-end">
                <p className="font-bold text-emerald-600"><i className="fa-solid fa-indian-rupee-sign fa-xl"></i><span className="font-bold text-2xl">{props.data.price.toLocaleString(undefined, {style: 'currency',currency: 'IND',minimumFractionDigits: 2,maximumFractionDigits: 2,}).replace('IND','')}</span> <span className={props.data.isPaymentDone?'text-emerald-700':'text-neutral-500'}>{props.data.isPaymentDone?<><i className="fa-solid fa-square-check"></i> Paid</>:<><i className="fa-solid fa-square-xmark"></i> Not Paid</>}</span></p>
            </div>
            <hr className="border-1 border-emerald-300"/>
            <div className="w-full h-9 flex gap-2">
                <div className="w-5 gap-2 flex items-center justify-start font-bold">
                    <span className="relative flex h-3 w-3">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${props.data.isRideActive===false?'bg-red-400':props.data.isRideStart||props.data.isDriverAssigned?'bg-emerald-400':'bg-yellow-400'} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${props.data.isRideActive===false?'bg-red-500':props.data.isRideStart||props.data.isDriverAssigned?'bg-emerald-500':'bg-yellow-500'}`}></span>
                    </span>
                </div>
                <div className={`w-full flex items-center gap-2 font-bold ${props.data.isRideActive===false?'text-red-500':props.data.isRideStart||props.data.isDriverAssigned?'text-emerald-500':'text-yellow-500'} `}>
                    <p className={"w-1/6 "+(props.data.isRideStart?'animate-pulse':'')}>{props.data.isRideActive===false?'Ride Ended':props.data.isRideStart?'Riding...':props.data.isDriverAssigned?props.data.dateTimeType==='now'?'Driver Is Arriving':'Driver Is Assigned':'Waiting For Driver'}</p>
                    <p className={"w-1/12 text-end transition-all duration-150 "+(fetch?'opacity-100':'opacity-0')}><i className="fa-solid fa-circle-notch fa-spin"></i></p>

                    <div className="w-5/6 flex items-center justify-end gap-2">
                        <button onClick={()=>setRateModal(true)} className="group w-7 hover:w-auto transition-all duration-100 overflow-hidden bg-gradient-to-r from-emerald-300 to-emerald-400 hover:to-transparent p-1 text-emerald-700 rounded-md hover:from-emerald-500 hover:border-2 hover:border-emerald-700 hover:scale-105">
                            <p className="w-2 h-6 group-hover:w-auto group-hover:h-auto"><i className="fa-solid fa-star"></i> Rate Ride</p>
                        </button>
                        <button className="group w-6 hover:w-auto transition-all duration-100 overflow-hidden bg-gradient-to-r from-neutral-300 to-neutral-400 hover:to-transparent p-1 text-neutral-700 rounded-md hover:from-neutral-500 hover:border-2 hover:border-neutral-700 hover:scale-105">
                            <p className="w-2 h-6 group-hover:w-auto group-hover:h-auto"><i className="fa-solid fa-flag"></i> Report</p>
                        </button>
                        <button className="group w-6 hover:w-auto transition-all duration-100 overflow-hidden bg-gradient-to-r from-red-300 to-red-400 hover:to-transparent p-1 text-red-700 rounded-md hover:from-red-500 hover:border-2 hover:border-red-700 hover:scale-105">
                            <p className="w-2 h-6 group-hover:w-auto group-hover:h-auto"><i className="fa-solid fa-ban"></i> Cancel</p>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* <pre>{JSON.stringify(props.data,null,4)}</pre> */}
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
            <img className="w-full" src="./images/sampleMap.jpg" alt="map"/>
        </div>
        </div>
        </>
    );
}