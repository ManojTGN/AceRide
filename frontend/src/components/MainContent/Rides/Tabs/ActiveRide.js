import { useState } from "react";
import SearchBar from "../Search";

export default function ActiveRides(props){
    const [search,setSearch] = useState('');

    return (
        <>
        <div className="p-2 w-full flex gap-5">
            <SearchBar value={search} set={setSearch} placeholder={'Search Your Active Rides...'}/>
        </div>
        <div className="p-2 flex gap-3 w-full">

        </div>
        <br/>
        <hr className="border-2 border-emerald-500 border-dashed"/>
        </>
    )
}