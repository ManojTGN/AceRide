import React, { useState } from "react";
import FromPoint from "./FromPoint";
import ToPoint from "./ToPoint";
import FinalDetail from "./FinalDetail";
import VehiclePoint from "./VehiclePoint";
import Payment from "./Payement";

export default function SideBar(){
    
    const [page,setPage] = useState(0);
    const [data,setData] = useState({
        from:null,to:null,
        people:NaN,vehicle:null,price:NaN,
        date:0,time:0,dt_type:"now",
        paymentType:null
    });
    const PAGES = {
        0:<FromPoint setPage={setPage} setData={setData} data={data} prev={null} next={1} />,
        1:<ToPoint setPage={setPage} setData={setData} data={data} prev={0} next={2} />,
        2:<VehiclePoint setPage={setPage} setData={setData} data={data} prev={1} next={3} />,
        3:<FinalDetail setPage={setPage} setData={setData} data={data} prev={2} next={4} />,
        4:<Payment setPage={setPage} setData={setData} data={data} prev={3} next={null}/>
    };

    return(
        <div className="absolute top-5 left-5 w-96 h-11/12 bg-gradient-to-r from-emerald-50 to-transparent backdrop-blur-xl rounded">
            <h1 className="font-bold text-2xl text-center p-4 text-black"><i className="fa-solid fa-map-location-dot"></i> Start Your Journey</h1>
            <br/>
            {PAGES[page]}
        </div>
    );
}