import { useState } from "react";
import FilterButton from "../FilterButton";
import SearchBar from "../Search";

export default function OlderRide(props){
    const [search,setSearch] = useState('');
    const [filter,setFilter] = useState([
        {selected:false,type:'today',value:'Today',icon:<i className="fa-solid fa-calendar-day"></i>},
        {selected:false,type:'lastWeek',value:'Last Week',icon:<i className="fa-solid fa-calendar-week"></i>},
        {selected:false,type:'lastMonth',value:'Last Month',icon:<i className="fa-solid fa-calendar-days"></i>},
        {selected:false,type:'customRange',value:'CustomRange',icon:<i className="fa-solid fa-calendar"></i>},
        {selected:false,type:'driver',value:'Driver',icon:<i className="fa-solid fa-id-badge"></i>},
    ]);

    return (
        <>
        <div className="p-2 w-full flex gap-5">
            <SearchBar value={search} set={setSearch} placeholder={'Search Your Old Rides...'}/>
        </div>
        <div className="p-2 flex gap-3 w-full">
            {filter.map((comp,index)=>{
                if(comp.selected)
                return <FilterButton key={index} data={comp} onClick={()=>{let tmpFilter=[...filter];tmpFilter[index][`selected`]=!tmpFilter[index][`selected`];setFilter(tmpFilter)}} />;
                return null;
            })}
            <span className="w-5"></span>
            {filter.map((comp,index)=>{
                if(!comp.selected)
                return <FilterButton key={index} data={comp} onClick={()=>{let tmpFilter=[...filter];tmpFilter[index][`selected`]=!tmpFilter[index][`selected`];setFilter(tmpFilter)}} />;
                return null
            })}
        </div>
        <br/>
        <hr className="border-2 border-emerald-500 border-dashed"/>
        </>
    )
}