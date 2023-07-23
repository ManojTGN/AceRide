import axios from 'axios';
import env from "react-dotenv";
import {useNavigate} from 'react-router-dom'

export default function Payment(props){
    let navigate = useNavigate();
    if(props.paymentType === 'cor'){
        axios({
            method: 'POST',
            url:`http://localhost:${env.SERVER_PORT}/register`,
            headers:{"Content-Type": "application/json" },
            data:{bookRide:true,...props.data}
        }).then((res)=>{
            console.log(res);
        });
    }
    return (
        <div className="font-bold text-black text-left px-10 flex flex-col">
            <div className="h-80 flex flex-col gap-2 overflow-scroll no-scrollbar::-webkit-scrollbar no-scrollbar">
                <p className="text-center">{props.data.paymentType==='cor'?<i className="fa-solid fa-heart"></i>:<i className="fa-brands fa-google-pay fa-2xl"></i>} {props.data.paymentType==='cor'?'Placing Your Ride':'Payment'}</p>
                <img src="./images/exampleQrCode.webp" alt="GooglePay QrCode"/>
            </div>
            <div className="h-52 flex flex-col gap-2">
                Pay By Scaning With Your Gpay QR Scanner
                <button className="w-full text-start h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105">
                    <i className="fa-solid fa-wallet"></i> Pay With GPay Wallet
                </button>
                <button onClick={()=>navigate('/newRide')} className="w-full text-start h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105">
                <i className="fa-solid fa-circle-xmark"></i> Cancel Ride
                </button>
            </div>
            <div className="h-56 w-full flex items-end justify-center">
                <div className="flex w-full p-4 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded">
                    <div className="w-1/6"> <i className="font-bold fa-solid fa-circle-notch fa-spin"></i> </div>
                    <p className="w-full text-right">Booking Your Ride</p>
                </div>
            </div>
        </div>
    );
}