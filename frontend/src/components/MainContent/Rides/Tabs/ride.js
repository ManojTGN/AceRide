import { useEffect, useRef, useState } from "react";
import env from "react-dotenv";
import axios from "axios";
import Modal from "../Components/Modal";

export default function Ride(_props){
    const RIDE = useRef();
    const [fetch,setFetch] =  useState(false);
    const [props,setProps] = useState(_props);

    useEffect(() => {
        if(props.data.isRideActive){
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
        }

        //     return () => clearInterval(timer);
    }, []);


    function rateRide( ){
        axios({
            method: 'POST',
            url:`http://localhost:${env.SERVER_PORT}/`,
            headers:{"Content-Type": "application/json" },
            data:{rateRide:true,rideRating:rating,_id:props.data._id}
        }).then((res)=>{
            setRateModal(false);
        }).catch((reason)=>{}); 
    }
    const [rating,setRating] = useState(0);
    const [rateModal,setRateModal] = useState(false);
    const RATE = <>
    <div className="flex h-48">
    <div className="w-full relative text-9xl text-center my-5">
        <i className={"fa-solid fa-face-laugh-beam absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 transition-all duration-200 "+(rating===5?'opacity-100':'opacity-0')}></i>
        <i className={"fa-solid fa-face-laugh-beam absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 transition-all repeat-1 fill-mode-forwards "+(rating===5?'opacity-50  animate-ping':'opacity-0')}></i>
        <i className={"fa-solid fa-face-smile-beam absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300 transition-all duration-200 "+(rating===4?'opacity-100':'opacity-0')}></i>
        <i className={"fa-solid fa-face-smile-beam absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300 transition-all repeat-1 fill-mode-forwards "+(rating===4?'opacity-50 animate-ping':'opacity-0')}></i>
        <i className={"fa-solid fa-face-meh absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-green-300 transition-all duration-200 "+(rating===3?'opacity-100':'opacity-0')}></i>
        <i className={"fa-solid fa-face-meh absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-green-300 transition-all repeat-1 fill-mode-forwards "+(rating===3?'opacity-50 animate-ping':'opacity-0')}></i>
        <i className={"fa-solid fa-face-frown absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-neutral-300 transition-all duration-200 "+(rating===2?'opacity-100':'opacity-0')}></i>
        <i className={"fa-solid fa-face-frown absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-neutral-300 transition-all repeat-1 fill-mode-forwards "+(rating===2?'opacity-50 animate-ping':'opacity-0')}></i>
        <i className={"fa-solid fa-face-sad-tear absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-red-300 transition-all duration-200 "+(rating===1?'opacity-100':'opacity-0')}></i>
        <i className={"fa-solid fa-face-sad-tear absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-red-300 transition-all repeat-1 fill-mode-forwards "+(rating===1?'opacity-50 animate-ping':'opacity-0')}></i>
        <i className={"fa-solid fa-face-grin-stars absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-400 transition-all duration-200 repeat-1 "+(rating===0?'opacity-100':'opacity-0')}></i>
        <i className={"fa-solid fa-face-grin-stars absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-400 transition-all repeat-1 fill-mode-forwards "+(rating===0?'opacity-50 animate-ping':'opacity-0')}></i>
    </div>
    <div className="w-full flex items-center justify-center text-5xl gap-2 relative">
        <div className="relative">
        <i className={"fa-solid fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-1000 repeat-1 absolute fill-mode-forwards "+(rating===1?'animate-ping  opacity-80':' opacity-0 -z-10')}></i>
        <i onClick={()=>setRating(1)} className={"fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-100 "+(rating>=1?'fa-solid ':'fa-regular ')+(rating===1?'scale-125':'')}></i>
        </div>

        <div className="relative">
        <i className={"fa-solid fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-1000 repeat-1 absolute fill-mode-forwards "+(rating===2?'animate-ping opacity-80':' opacity-0 -z-10')}></i>
        <i onClick={()=>setRating(2)} className={"fa-star cursor-pointer text-emerald-500 hover:scale-125 transition-all duration-100 "+(rating>=2?'fa-solid ':'fa-regular ')+(rating===2?'scale-125':'')}></i>
        </div>

        <div className="relative">
        <i className={"fa-solid fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-1000 repeat-1 absolute fill-mode-forwards "+(rating===3?'animate-ping opacity-80':' opacity-0 -z-10')}></i>
        <i onClick={()=>setRating(3)} className={"fa-star cursor-pointer text-emerald-600 hover:scale-125 transition-all duration-100 "+(rating>=3?'fa-solid ':'fa-regular ')+(rating===3?'scale-125':'')}></i>
        </div>

        <div className="relative">
        <i className={"fa-solid fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-1000 repeat-1 absolute fill-mode-forwards "+(rating===4?'animate-ping opacity-50':' opacity-0 -z-10')}></i>
        <i onClick={()=>setRating(4)} className={"fa-star cursor-pointer text-emerald-700 hover:scale-125 transition-all duration-100 "+(rating>=4?'fa-solid ':'fa-regular ')+(rating===4?'scale-125':'')}></i>
        </div>

        <div className="relative">
        <i className={"fa-solid fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-1000 repeat-1 absolute fill-mode-forwards "+(rating===5?'animate-ping opacity-80':' opacity-0 -z-10')}></i>
        <i onClick={()=>setRating(5)} className={"fa-star cursor-pointer text-emerald-800 hover:scale-125 transition-all duration-100 "+(rating>=5?'fa-solid ':'fa-regular ')+(rating===5?'scale-125':'')}></i>
        </div>

    </div>
    </div>
    <div className="flex gap-5 items-start justify-end">
        <button className="hover:scale-125 transition-all duration-100 font-bold text-red-600" onClick={()=>{for(let i = rating; i >= 0; i--)setTimeout(()=>setRating(i),(5-i)*50);}}> <i className="fa-solid fa-ban font-bold"></i> Reset </button>
        <button className="hover:scale-125 transition-all duration-100 font-bold text-emerald-600" onClick={rateRide}><i className="fa-solid fa-check"></i> Submit</button>
    </div>
    </>;
    
    const [report,setReport] = useState('');
    const [reportModal,setReportModal] = useState(false);
    const REPORT = <>
    </>;

    function CancelRide(){
        axios({
            method:'POST',
            url:`http://localhost:${env.SERVER_PORT}/`,
            headers:{'Content-Type':'application/json'},
            data:{cancelRide:true,_id:props.data._id}
        }).then(()=>{
            setCancelModal(false);
            RIDE.current.className+=` opacity-0 blur-3xl max-h-0`;
            setTimeout(()=>{RIDE.current.remove();_props.setReloadTrigger((prev)=>prev+1);},1000);
        }).catch((reason)=>{console.log('error');})
    }
    const [cancelModal,setCancelModal] = useState(false);
    const [cancelText,setCancelText] = useState('');
    const CANCEL = <>
        <h1>To Cancel The Ride Type <code className="bg-white p-1 rounded-md font-bold text-emerald-800 select-none">{props.data.fromPlace} to {props.data.toPlace}</code> In The Text Box To Confirm.</h1>
        <div className="flex gap-2">
        <input onChange={(event)=>setCancelText(event.target.value)} value={cancelText} className="p-2 w-full border-2 border-emerald-800 rounded-md"/>
        <div className="w-full flex items-center justify-end">
            <button onClick={CancelRide} className="bg-gradient-to-r from-emerald-700 to-emerald-400 p-2 rounded-md text-white font-bold disabled:text-black disabled:from-neutral-700 disabled:to-neutral-400" disabled={(props.data.fromPlace+' to '+props.data.toPlace).toLowerCase() !== cancelText.toLowerCase()}><i className="fa-solid fa-check"></i> Confirm</button>
        </div>
        </div>
    </>

    return (
        <div key={props.data.key} className="w-full">
        {props.data.rideRating===0?<Modal modalStatus={rateModal} setModal={setRateModal} content={RATE} title={<div className="font-bold text-emerald-700">=<i className="fa-solid fa-star"></i> Rate Your Ride Experience</div>} />:null}
        {props.data.isRideActive?<Modal modalStatus={cancelModal} setModal={setCancelModal} content={CANCEL} title={<div className="font-bold text-emerald-700"><i className="fa-solid fa-ban"></i> Cancel Your Ride</div>} />:null}
        <Modal modalStatus={reportModal} setModal={setReportModal} content={REPORT} title={<div className="font-bold text-emerald-700"><i className="fa-solid fa-flag"></i> Report About Your Ride</div>} />

        <div ref={RIDE} className="relative w-full transition-all duration-1000 max-h-96 ">
        <div className="z-20 relative overflow-hidden w-full h-72 bg-gradient-to-r from-emerald-200 to-transparent hover:to-emerald-50 p-5 rounded hover:scale-105 transition-all duration-100 hover:border-2 hover:border-emerald-600">
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
                    <p className={"w-1/6 "+(props.data.isRideStart?'animate-pulse':'')}>{props.data.isRideActive===false?'Ride Ended':props.data.isRideStart?'Riding...':props.data.isDriverAssigned?props.data.dateTimeType==='now'?'Driver Is Arriving':'Driver Is Assigned':'Waiting For Driver'} </p>
                    {props.data.failedRideReason!=='None'?<p className="w-full">{props.data.isRideSuccess===false?`Reason: ${props.data.failedRideReason}`:''}</p>:null}
                    <p className={"w-1/12 text-end transition-all duration-150 "+(fetch?'opacity-100':'opacity-0')}><i className="fa-solid fa-circle-notch fa-spin"></i></p>

                    <div className="w-5/6 flex items-center justify-end gap-2">
                        {props.data.rideRating===0?<button onClick={()=>setRateModal(true)} className="group w-7 hover:w-auto transition-all duration-100 overflow-hidden bg-gradient-to-r from-emerald-300 to-emerald-400 hover:to-transparent p-1 text-emerald-700 rounded-md hover:from-emerald-500 hover:border-2 hover:border-emerald-700 hover:scale-105">
                            <p className="w-2 h-6 group-hover:w-auto group-hover:h-auto"><i className="fa-solid fa-star"></i> Rate Ride</p>
                        </button>:
                        <div className="w-14 h-6 flex items-center">
                            <p className="p-1 text-emerald-700 font-bold text-xl"><i className="fa-solid fa-star"></i>{props.data.rideRating}</p>
                        </div>
                        }
                        <button onClick={()=>setReportModal(true)} className="group w-6 hover:w-auto transition-all duration-100 overflow-hidden bg-gradient-to-r from-neutral-300 to-neutral-400 hover:to-transparent p-1 text-neutral-700 rounded-md hover:from-neutral-500 hover:border-2 hover:border-neutral-700 hover:scale-105">
                            <p className="w-2 h-6 group-hover:w-auto group-hover:h-auto"><i className="fa-solid fa-flag"></i> Report</p>
                        </button>
                       {props.data.isRideActive?<button onClick={()=>setCancelModal(true)} className="group w-6 hover:w-auto transition-all duration-100 overflow-hidden bg-gradient-to-r from-red-300 to-red-400 hover:to-transparent p-1 text-red-700 rounded-md hover:from-red-500 hover:border-2 hover:border-red-700 hover:scale-105">
                            <p className="w-2 h-6 group-hover:w-auto group-hover:h-auto"><i className="fa-solid fa-ban"></i> Cancel</p>
                        </button>:null}
                    </div>
                </div>
            </div>
            
            {/* <pre>{JSON.stringify(props.data,null,4)}</pre> */}
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
            <img className="w-full opacity-20" src="./images/sampleMap.jpg" alt="map"/>
        </div>
        </div>
        </div>
    );
}