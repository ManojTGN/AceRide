import React, { useEffect, useState } from 'react';
import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";

export default function Dashboard(props){
    const [selectedPage,setPage] = useState('HOME');//HOME | BOOK | RIDES | PROFILE | SETTINGS | LOGOUT
    const [navBar,setNavBar] = useState(true);
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
            <div className="w-full h-full flex gap-2">
                <SideBar selectedPage={selectedPage} data={props.data} navBar={navBar} setNavBar={setNavBar}/>
                <div className='w-full h-full flex justify-end'>
                <div className='h-full' style={{width:(navBar?'calc( 100% - 16.6% )':'calc( 100% - 100px )')}}>
                    <MainContent selectedPage={selectedPage} data={props.data}/>
                </div>
                </div>
            </div>
            }
        </>
    );
}