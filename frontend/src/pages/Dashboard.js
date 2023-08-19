import React, { useEffect, useState } from 'react';
import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";

export default function Dashboard(props){
    const [selectedPage,setPage] = useState('HOME');//HOME | BOOK | RIDES | PROFILE | ADDRESS | SETTINGS
    useEffect(() => { 
        if(props.page) setPage(props.page);
    },[props.page]);
    
    return (
        <>
            {props.data === null?
            <div className='w-full h-full flex items-center justify-center gap-5 animate-fade duration-500 transition-all'>
                <i className="fa-regular fa-compass fa-spin fa-2xl text-8xl text-emerald-700 font-bold"></i>
                <p className='text-5xl text-emerald-700 font-bold'>Ace Ride</p>
            </div>
            :
            <div className={"w-full h-full flex"}>
                <SideBar selectedPage={selectedPage}/>
                <div className='w-full h-full flex justify-end'>
                <div className='w-5/6 h-full'>
                    <MainContent selectedPage={selectedPage} data={props.data}/>
                </div>
                </div>
            </div>
            }
        </>
    );
}