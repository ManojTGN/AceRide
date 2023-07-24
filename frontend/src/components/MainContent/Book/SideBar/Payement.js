import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import env from "react-dotenv";
import {useNavigate} from 'react-router-dom'

export default function Payment(props){
    let navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [booked,setBooked] = useState(null);
    let iconTick = useRef();

    function bookRide(){
        axios({
            method: 'POST',
            url:`http://localhost:${env.SERVER_PORT}/`,
            headers:{"Content-Type": "application/json" },
            data:{bookRide:true,...props.data}
        }).then((res)=>{
            if(res.status === 200){
                if(!booked) setBooked(true);
                if(loading) setLoading(false);
                setTimeout(()=>{ iconTick.current.className += ' scale-150';},300);
            }else{
                if(!booked) setBooked(false);
                if(loading) setLoading(false);
            }
        });   
        if(!loading) setLoading(true);
    }

    useEffect(()=>{
        if(props.data.paymentType === 'cor') bookRide();
    },[false]);

    return (
        <>
        {booked===true?
        <>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-emerald-100'>
        <i className="fa-solid fa-certificate fa-2xl fa-spin"></i>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-emerald-500'>
            <i ref={iconTick} className={"fa-solid fa-check fa-2xl transition-all duration-500 "}></i>
        </div>
        <div className='absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-emerald-500 font-bold'>
            Ride Booked Successfull
        </div>
        <div>
            <div className='w-full h-96 bg-gradient-to-b from-transparent to-white'></div>
            <div className='w-full h-96 bg-gradient-to-b to-emerald-400 from-white flex items-end'>
                <div onClick={()=>navigate('/yourRides')} className="flex w-full p-4 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded cursor-pointer">
                    <div className="w-1/6"> <i className="fa-regular fa-square-check"></i> </div>
                    <p className="w-full text-right">Ride Booked</p>
                </div>
            </div>
        </div>
        </>
        :booked===false?null:null}
        {booked===null?<div className="font-bold text-black text-left px-10 flex flex-col">
            <div className="h-80 flex flex-col gap-2 overflow-scroll no-scrollbar::-webkit-scrollbar no-scrollbar">
                <p className="text-center">{props.data.paymentType==='cor'?null:<i className="fa-brands fa-google-pay fa-2xl"></i>} {props.data.paymentType==='cor'?null:'Payment'}</p>
                {props.data.paymentType === 'cor'?null:<img src="./images/exampleQrCode.webp" alt="GooglePay QrCode"/>}
            </div>
            <div className="h-52 flex flex-col gap-2">
                {props.data.paymentType === 'cor'?null:<>
                <p>Pay By Scaning With Your Gpay QR Scanner</p>
                <button onClick={()=>bookRide()} className="w-full text-start h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105">
                    <i className="fa-solid fa-wallet"></i> Pay With GPay Wallet
                </button>
                <button onClick={()=>navigate('/dashboard')} className="w-full text-start h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105">
                <i className="fa-solid fa-circle-xmark"></i> Cancel Ride
                </button></>}
            </div>
            <div className="h-56 w-full flex items-end justify-center">
                {loading?
                <div className="flex w-full p-4 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded">
                    <div className="w-1/6"> <i className="font-bold fa-solid fa-circle-notch fa-spin"></i> </div>
                    <p className="w-full text-right">Booking Your Ride</p>
                </div>:null}
            </div>
        </div>:null}
        </>
    );
}