import { useState } from "react";
// import env from "react-dotenv";
// import axios from "axios";
// import Modal from "../Components/Modal";

export default function Ride(_props){
    // const [fetch,setFetch] =  useState(false);
    const [props    ] = useState(_props);

    // useEffect(() => {
    //     if(props.data.isRideActive){
    //         setInterval(() => {
    //             if(!fetch)
    //                 setFetch(true);
    //             axios({
    //                 method: 'POST',
    //                 url:`http://localhost:${env.SERVER_PORT}/`,
    //                 headers:{"Content-Type": "application/json" },
    //                 data:{getRide:true,rideType:'SINGLE',_id:props.data._id}
    //             }).then((res)=>{
    //                 if(res.data) setProps({data:res.data});
    //                 setFetch(false);
    //             }).catch((reason)=>{setFetch(false);}); 

    //         }, 2000);
    //     }

    //     //     return () => clearInterval(timer);
    // }, []);


    // function rateRide(){
    //     axios({
    //         method: 'POST',
    //         url:`http://localhost:${env.SERVER_PORT}/`,
    //         headers:{"Content-Type": "application/json" },
    //         data:{rateRide:true,rideRating:rating,_id:props.data._id}
    //     }).then((res)=>{
    //         setRateModal(false);
    //     }).catch((reason)=>{}); 
    // }
    // const [rating,setRating] = useState(0);
    // const [rateModal,setRateModal] = useState(false);
    // const RATE = <>
    // <div className="flex h-48">
    // <div className="w-full relative text-9xl text-center my-5">
    //     <i className={"fa-solid fa-face-laugh-beam absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 transition-all duration-200 "+(rating===5?'opacity-100':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-laugh-beam absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 transition-all repeat-1 fill-mode-forwards "+(rating===5?'opacity-50  animate-ping':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-smile-beam absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300 transition-all duration-200 "+(rating===4?'opacity-100':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-smile-beam absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300 transition-all repeat-1 fill-mode-forwards "+(rating===4?'opacity-50 animate-ping':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-meh absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-green-300 transition-all duration-200 "+(rating===3?'opacity-100':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-meh absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-green-300 transition-all repeat-1 fill-mode-forwards "+(rating===3?'opacity-50 animate-ping':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-frown absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-neutral-300 transition-all duration-200 "+(rating===2?'opacity-100':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-frown absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-neutral-300 transition-all repeat-1 fill-mode-forwards "+(rating===2?'opacity-50 animate-ping':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-sad-tear absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-red-300 transition-all duration-200 "+(rating===1?'opacity-100':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-sad-tear absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-red-300 transition-all repeat-1 fill-mode-forwards "+(rating===1?'opacity-50 animate-ping':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-grin-stars absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-400 transition-all duration-200 repeat-1 "+(rating===0?'opacity-100':'opacity-0')}></i>
    //     <i className={"fa-solid fa-face-grin-stars absolute drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-400 transition-all repeat-1 fill-mode-forwards "+(rating===0?'opacity-50 animate-ping':'opacity-0')}></i>
    // </div>
    // <div className="w-full flex items-center justify-center text-5xl gap-2 relative">
    //     <div className="relative">
    //     <i className={"fa-solid fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-1000 repeat-1 absolute fill-mode-forwards "+(rating===1?'animate-ping  opacity-80':' opacity-0 -z-10')}></i>
    //     <i onClick={()=>setRating(1)} className={"fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-100 "+(rating>=1?'fa-solid ':'fa-regular ')+(rating===1?'scale-125':'')}></i>
    //     </div>

    //     <div className="relative">
    //     <i className={"fa-solid fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-1000 repeat-1 absolute fill-mode-forwards "+(rating===2?'animate-ping opacity-80':' opacity-0 -z-10')}></i>
    //     <i onClick={()=>setRating(2)} className={"fa-star cursor-pointer text-emerald-500 hover:scale-125 transition-all duration-100 "+(rating>=2?'fa-solid ':'fa-regular ')+(rating===2?'scale-125':'')}></i>
    //     </div>

    //     <div className="relative">
    //     <i className={"fa-solid fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-1000 repeat-1 absolute fill-mode-forwards "+(rating===3?'animate-ping opacity-80':' opacity-0 -z-10')}></i>
    //     <i onClick={()=>setRating(3)} className={"fa-star cursor-pointer text-emerald-600 hover:scale-125 transition-all duration-100 "+(rating>=3?'fa-solid ':'fa-regular ')+(rating===3?'scale-125':'')}></i>
    //     </div>

    //     <div className="relative">
    //     <i className={"fa-solid fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-1000 repeat-1 absolute fill-mode-forwards "+(rating===4?'animate-ping opacity-50':' opacity-0 -z-10')}></i>
    //     <i onClick={()=>setRating(4)} className={"fa-star cursor-pointer text-emerald-700 hover:scale-125 transition-all duration-100 "+(rating>=4?'fa-solid ':'fa-regular ')+(rating===4?'scale-125':'')}></i>
    //     </div>

    //     <div className="relative">
    //     <i className={"fa-solid fa-star cursor-pointer text-emerald-400 hover:scale-125 transition-all duration-1000 repeat-1 absolute fill-mode-forwards "+(rating===5?'animate-ping opacity-80':' opacity-0 -z-10')}></i>
    //     <i onClick={()=>setRating(5)} className={"fa-star cursor-pointer text-emerald-800 hover:scale-125 transition-all duration-100 "+(rating>=5?'fa-solid ':'fa-regular ')+(rating===5?'scale-125':'')}></i>
    //     </div>

    // </div>
    // </div>
    // <div className="flex gap-5 items-start justify-end">
    //     <button className="hover:scale-125 transition-all duration-100 font-bold text-red-600" onClick={()=>{for(let i = rating; i >= 0; i--)setTimeout(()=>setRating(i),(5-i)*50);}}> <i className="fa-solid fa-ban font-bold"></i> Reset </button>
    //     <button className="hover:scale-125 transition-all duration-100 font-bold text-emerald-600" onClick={rateRide}><i className="fa-solid fa-check"></i> Submit</button>
    // </div>
    // </>;
    
    // const [report,setReport] = useState('');
    // const [reportModal,setReportModal] = useState(false);
    // const REPORT = <>
    // </>;

    // function CancelRide(){
    //     axios({
    //         method:'POST',
    //         url:`http://localhost:${env.SERVER_PORT}/`,
    //         headers:{'Content-Type':'application/json'},
    //         data:{cancelRide:true,_id:props.data._id}
    //     }).then(()=>{
    //         setCancelModal(false);
    //         RIDE.current.className+=` opacity-0 blur-3xl max-h-0`;
    //         setTimeout(()=>{RIDE.current.remove();_props.setReloadTrigger((prev)=>prev+1);},1000);
    //     }).catch((reason)=>{console.log('error');})
    // }
    // const [cancelModal,setCancelModal] = useState(false);
    // const [cancelText,setCancelText] = useState('');
    // const CANCEL = <>
    // <h1>To Cancel The Ride Type <code className="bg-white p-1 rounded-md font-bold text-emerald-800 select-none">{props.data.fromPlace} to {props.data.toPlace}</code> In The Text Box To Confirm.</h1>
    // <div className="flex gap-2">
    // <input onChange={(event)=>setCancelText(event.target.value)} value={cancelText} className="p-2 w-full border-2 border-emerald-800 rounded-md"/>
    // <div className="w-full flex items-center justify-end">
    //     <button onClick={CancelRide} className="bg-gradient-to-r from-emerald-700 to-emerald-400 p-2 rounded-md text-white font-bold disabled:text-black disabled:from-neutral-700 disabled:to-neutral-400" disabled={(props.data.fromPlace+' to '+props.data.toPlace).toLowerCase() !== cancelText.toLowerCase()}><i className="fa-solid fa-check"></i> Confirm</button>
    // </div>
    // </div>
    // </>;

    // {props.data.rideRating===0?<Modal modalStatus={rateModal} setModal={setRateModal} content={RATE} title={<div className="font-bold text-emerald-700">=<i className="fa-solid fa-star"></i> Rate Your Ride Experience</div>} />:null}
    // {props.data.isRideActive?<Modal modalStatus={cancelModal} setModal={setCancelModal} content={CANCEL} title={<div className="font-bold text-emerald-700"><i className="fa-solid fa-ban"></i> Cancel Your Ride</div>} />:null}
    // <Modal modalStatus={reportModal} setModal={setReportModal} content={REPORT} title={<div className="font-bold text-emerald-700"><i className="fa-solid fa-flag"></i> Report About Your Ride</div>} />

    return (
        <>
        <div className="w-full flex cursor-pointer">
            <div className="w-9 items-center justify-center flex bg-emerald-100 rounded-md font-mono font-bold">
                {_props.index}
            </div>
            <div key={props.data.key} className="w-full flex p-5 bg-gradient-to-r from-emerald-600 to-emerald-200 rounded-md hover:scale-105 transition-all duration-100 hover:outline hover:outline-offset-4 outline-2  outline-offset-2 outline-emerald-700">
                <div className="px-10 font-bold text-emerald-50">
                    <i className="fa-solid fa-location-dot"></i> {props.data.fromPlace} To <i className="fa-solid fa-location-crosshairs"></i> {props.data.toPlace}
                </div>
                <span className="h-full bg-white w-px"></span>
                <div className="px-10 font-bold text-white">
                {
                    props.data.vehicle==='motorcycle'?<i className="fa-solid fa-motorcycle"></i>:
                    props.data.vehicle==='car'?<i className="fa-solid fa-car-side"></i>:
                    props.data.vehicle==='van'?<i className="fa-solid fa-van-shuttle"></i>:
                    props.data.vehicle==='bus'?<i className="fa-solid fa-bus"></i>:
                    <i className="fa-solid fa-circle-exclamation"></i>
                } {props.data.vehicle}
                </div>
                <div className="px-10 font-bold text-white">
                {
                    props.data.totalPeople===1?<i className="fa-solid fa-user"></i>:
                    props.data.totalPeople===2?<i className="fa-solid fa-user-group"></i>:
                    props.data.totalPeople>=3?<i className="fa-solid fa-users"></i>:
                    <i className="fa-solid fa-circle-exclamation"></i>
                } {props.data.totalPeople>=4?<i className="fa-solid fa-plus fa-2xs"></i>:null} {props.data.totalPeople}
                </div>
                <span className="h-full bg-white w-px"></span>

            </div>
        </div>
        </>
    );
}