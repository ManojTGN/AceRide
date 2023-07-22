import React, { useState } from 'react';
import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";

export default function Dashboard(){
    const [selectedPage,setPage] = useState('HOME');//HOME | BOOK | RIDES
    return (
        <div className="w-full h-full flex">
            <SideBar selectedPage={selectedPage} setPage={setPage} />
            <MainContent selectedPage={selectedPage}/>
        </div>
    );
}