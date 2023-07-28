import React, { useEffect, useState } from 'react';
import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";

export default function Dashboard(props){
    const [selectedPage,setPage] = useState('HOME');//HOME | BOOK | RIDES | PROFILE | ADDRESS | SETTINGS
    useEffect(() => { 
        if(props.page) setPage(props.page);
    },[props.page]);
    
    return (
        <div className="w-full h-full flex">
            <SideBar selectedPage={selectedPage}/>
            <div className='w-full h-full flex justify-end'>
            <div className='w-5/6 h-full'>
                <MainContent selectedPage={selectedPage}/>
            </div>
            </div>
        </div>
    );
}