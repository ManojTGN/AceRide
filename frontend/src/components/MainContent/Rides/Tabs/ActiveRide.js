import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import Ride from "./ride";
import axios from "axios";
import Translate from "../../../Translate";

function reducer(staticText,action){
    if(action.type === 'changeLanguage')
        return action.payload;
    return staticText;
}

export default function ActiveRides(props){

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

    const [staticText,dipatchText] = useReducer(reducer,{
        StartYourJourneyNow:"Start Your Journey Now!",
        StartJourneyParagraph:"\"Start a New Journey Now\" - Your gateway to thrilling rides, scenic routes, and unforgettable adventures! ",
        BookRideNow:"Book Ride Now",
    });

    useEffect(()=>{
        if(props.data.settings.language!=='en')
        Translate(staticText, dipatchText, props.data.settings.language);
    },[]);

    return (
        <>
        <div className={"flex flex-col gap-5 items-center h-full"}>
        {
        rides && rides.length !== 0?
            rides.map((component,index)=><Ride key={index} index={(index+1)} data={component} />):
        rides && rides.length === 0?
            <div className={`w-full flex items-center justify-center rounded-l-2xl gap-5 bg-gradient-to-r from-${props.data.settings.theme}-100 to-transparent`}>
                <div className="w-4/6">
                    <img className="w-full rounded-l-2xl" src="images/bookNewRide.jpg" alt="booknewRide" draggable={false}/>
                </div>
                <div className="w-full h-full flex flex-col p-2">
                    <h1 className={`font-bold text-${props.data.settings.theme}-800 text-5xl`}>{staticText.StartYourJourneyNow}</h1>
                    <p className="w-5/6 font-mono my-5 text-lg font-bold">
                    {staticText.StartJourneyParagraph} 🏍️🛣️
                    </p>
                    <div className="h-full flex items-end justify-end relative">
                        <div className="absolute -left-1 duration-1000 transition-all z-0">
                            <i className={`fa-solid fa-car-side text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-50000 -delay-40000`}></i>
                            <i className={`fa-solid fa-van-shuttle text-${props.data.settings.theme}-300 text-4xl absolute -top-7 animate-rideLeft transition-all duration-30000 -delay-7500`}></i>
                            <i className={`fa-solid fa-motorcycle text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-100000 -delay-80000`}></i>
                            <i className={`fa-solid fa-car-side text-${props.data.settings.theme}-300 text-4xl absolute -top-7 animate-rideLeft transition-all duration-40000 -delay-25000`}></i>
                            <i className={`fa-solid fa-van-shuttle text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-70000 -delay-10000`}></i>
                            <i className={`fa-solid fa-motorcycle text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-40000 -delay-7500`}></i>
                            <i className={`fa-solid fa-car-side text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-40000 -delay-25000`}></i>
                            <i className={`fa-solid fa-van-shuttle text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideLeft transition-all duration-30000 -delay-7500`}></i>

                            <i className={`fa-solid fa-car-side fa-flip-horizontal text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-30000 -delay-7500`}></i>
                            <i className={`fa-solid fa-van-shuttle fa-flip-horizontal text-${props.data.settings.theme}-300 text-4xl absolute -top-7 animate-rideRight transition-all duration-50000 -delay-25000`}></i>
                            <i className={`fa-solid fa-motorcycle fa-flip-horizontal text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-40000 -delay-25000`}></i>
                            <i className={`fa-solid fa-car-side fa-flip-horizontal text-${props.data.settings.theme}-300 text-4xl absolute -top-7 animate-rideRight transition-all duration-100000 -delay-40000`}></i>
                            <i className={`fa-solid fa-van-shuttle fa-flip-horizontal text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-40000 -delay-7500`}></i>
                            <i className={`fa-solid fa-motorcycle fa-flip-horizontal text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-70000 -delay-40000`}></i>
                            <i className={`fa-solid fa-car-side fa-flip-horizontal text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-30000 -delay-7500`}></i>
                            <i className={`fa-solid fa-van-shuttle fa-flip-horizontal text-${props.data.settings.theme}-200 text-4xl absolute -top-7 animate-rideRight transition-all duration-25000 -delay-25000`}></i>
                        </div>
                        <button onClick={()=>navigate('../newRide')} className={`z-1 relative mx-32 my-4 p-2 bg-gradient-to-r from-${props.data.settings.theme}-700 to-${props.data.settings.theme}-500 rounded-md text-white font-bold`}><i className="fa-solid fa-car-rear"></i> {staticText.BookRideNow}</button>
                    </div>
                </div>
            </div>:

        rides === null?
            <div className={`w-full h-1/2 flex items-center justify-center text-${props.data.settings.theme}-700 text-2xl gap-2`}>
                <i className="fa-solid fa-circle-notch fa-spin fa-2xl text-2xl"></i> Getting Your Active Rides
            </div>:

        rides === undefined?
            <div className={`w-full flex items-center justify-center text-${props.data.settings.theme}-700 animate-pulse`}>
                <div className="w-1/6 flex justify-end"> <i className="fa-solid fa-circle-exclamation fa-2xl text-9xl"></i> </div>
                <div className="w-full flex justify-center text-7xl font-bold"> Something went wrong </div>
            </div>
        :null}

        </div>
        </>
    )
}