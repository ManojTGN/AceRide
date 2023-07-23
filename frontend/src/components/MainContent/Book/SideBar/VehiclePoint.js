export default function VehiclePoint(props){
    return (
        <div className="font-bold text-black text-left px-10">
            {
            isNaN(props.data.people) || props.data.people === 0?<i className="fa-solid fa-person-circle-exclamation"></i>:
            props.data.people === 1?<i className="fa-solid fa-user"></i>:
            props.data.people === 2?<i className="fa-solid fa-user-group"></i>:
            props.data.people >= 3?<i className="fa-solid fa-users"></i>:null
            }{props.data.people > 3?<i className="fa-solid fa-plus fa-2xs"></i>:null} Choose Total People
            <br/>
            <br/>
            <input value={props.data.people?props.data.people:0} onChange={
                (event)=>{
                    if(isNaN(event.target.value) || event.target.value < 0 || event.target.value > 10) event.target.value = 0; 
                    props.setData({
                        ...props.data,
                        people:parseInt(event.target.value),
                        vehicle:null//(props.data.vehicle&&document.getElementById(props.data.vehicle).disabled)?null:props.data.vehicle
                    })
                }} 
                type="number" min={0} max={10} className="text-center w-full h-12 border-2 border-emerald-700 rounded" placeholder="   How Many People?" style={{fontFamily:"Arial, FontAwesome"}} />
            <br/>
            <br/>
            <div className="h-72 flex flex-col gap-2">
                <p><i className="fa-solid fa-stroopwafel fa-spin"></i> Choose Your Vehicle</p>
                <div className="w-full flex">
                    <input onChange={()=>props.setData({...props.data,vehicle:'motorcycle'})} type="radio" name="vehicle" id="motorcycle" className="peer hidden w-0" disabled={props.data.people !== 1} checked={props.data.vehicle === 'motorcycle'}/>
                    <label htmlFor="motorcycle" className="w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer peer-disabled:from-neutral-600 peer-checked:cursor-auto peer-checked:border-2 peer-checked:border-emerald-900 hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105 peer-disabled:hover:scale-100 peer-checked:hover:scale-100"><i className="fa-solid fa-motorcycle"></i> Motorcycle</label>
                    <label htmlFor="motocycle" className="text-right hidden items-center p-1 text-green-800 peer-checked:flex"><i className="fa-solid fa-circle-check"></i></label>
                    <label htmlFor="motocycle" className="text-right hidden items-center p-1 peer-disabled:flex"><i className="fa-solid fa-circle-xmark"></i></label>
                </div>
                <div className="w-full flex">
                    <input onChange={()=>props.setData({...props.data,vehicle:'car'})} type="radio" name="vehicle" id="car" className="peer hidden w-0" disabled={isNaN(props.data.people) || props.data.people < 1 || props.data.people > 4} checked={props.data.vehicle === 'car'}/>
                    <label htmlFor="car" className="w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer peer-disabled:from-neutral-600 peer-checked:cursor-auto peer-checked:border-2 peer-checked:border-emerald-900 hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105 peer-disabled:hover:scale-100 peer-checked:hover:scale-100"><i className="fa-solid fa-car-side"></i> Car</label>
                    <label htmlFor="car" className="text-right hidden items-center p-1 text-green-800 peer-checked:flex"><i className="fa-solid fa-circle-check"></i></label>
                    <label htmlFor="car" className="text-right hidden items-center p-1 peer-disabled:flex"><i className="fa-solid fa-circle-xmark"></i></label>
                </div>
                <div className="w-full flex">
                    <input onChange={()=>props.setData({...props.data,vehicle:'van'})} type="radio" name="vehicle" id="van" className="peer hidden w-0" disabled={isNaN(props.data.people) || props.data.people < 1 || props.data.people > 8} checked={props.data.vehicle === 'van'}/>
                    <label htmlFor="van" className="w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer peer-disabled:from-neutral-600 peer-checked:cursor-auto peer-checked:border-2 peer-checked:border-emerald-900 hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105 peer-disabled:hover:scale-100 peer-checked:hover:scale-100"><i className="fa-solid fa-van-shuttle"></i> Van</label>
                    <label htmlFor="van" className="text-right hidden items-center p-1 text-green-800 peer-checked:flex"><i className="fa-solid fa-circle-check"></i></label>
                    <label htmlFor="van" className="text-right hidden items-center p-1 peer-disabled:flex"><i className="fa-solid fa-circle-xmark"></i></label>
                </div>
                <div className="w-full flex">
                    <input onChange={()=>props.setData({...props.data,vehicle:'bus'})} type="radio" name="vehicle" id="bus" className="peer hidden w-0" disabled={isNaN(props.data.people) || props.data.people < 1} checked={props.data.vehicle === 'bus'}/>
                    <label htmlFor="bus" className="w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer peer-disabled:from-neutral-600 peer-checked:cursor-auto peer-checked:border-2 peer-checked:border-emerald-900 hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105 peer-disabled:hover:scale-100 peer-checked:hover:scale-100"><i className="fa-solid fa-bus"></i> Bus</label>
                    <label htmlFor="bus" className="text-right hidden items-center p-1 text-green-800 peer-checked:flex"><i className="fa-solid fa-circle-check"></i></label>
                    <label htmlFor="bus" className="text-right hidden items-center p-1 peer-disabled:flex"><i className="fa-solid fa-circle-xmark"></i></label>
                </div>
            </div>

            <div className="h-60 flex flex-col gap-2">
                <p><i className="fa-solid fa-calendar-day"></i> Choose Time</p>
                <select value={props.data.dt_type} onChange={(event)=>props.setData({...props.data,dt_type:event.target.value})} className=" w-full h-12 border-2 border-emerald-700 rounded placeholder-shown:h-16">
                    <option className="h-12" value="now"> Now</option>
                    <option className="h-12" value="today"> Today</option>
                    <option className="h-12" value="otherDay"> Other Day</option>
                </select>
                {props.data.dt_type==='otherDay'?<input value={props.data.date} onChange={ (event)=>{ props.setData({...props.data,date:event.target.value}) }} type="date" className="w-full h-12 border-2 border-emerald-700 rounded" placeholder="   How Many People?" style={{fontFamily:"Arial, FontAwesome"}} />:null}
                {props.data.dt_type==='today'|| props.data.dt_type==='otherDay'?<input value={props.data.time} onChange={ (event)=>{ props.setData({ ...props.data, time:event.target.value }) }} type="time" className="w-full h-12 border-2 border-emerald-700 rounded" placeholder="   How Many People?" style={{fontFamily:"Arial, FontAwesome"}} />:null}
            </div>
            <div className="w-full flex gap-2">
                {props.prev !== null?<button className="w-full p-4 bg-gradient-to-r from-emerald-600 to-transparent text-white text-left rounded hover:from-emerald-700 transition-all duration-100 ease-in-out hover:scale-105" onClick={()=>{props.setPage(props.prev)}}><i className="fa-solid fa-angle-left fa-2xs"></i> Prev</button>:null}
                <button className="w-full p-4 bg-gradient-to-r from-transparent to-emerald-600 text-white text-right rounded disabled:to-neutral-600 disabled:cursor-not-allowed hover:to-emerald-700 transition-all duration-100 ease-in-out hover:scale-105  disabled:hover:scale-100" disabled={(isNaN(props.data.people) || props.data.people <= 0 || props.data.people > 10) || (!props.data.vehicle) || (props.data.dt_type==='today' && !props.data.time) || (props.data.dt_type==='otherDay' && (!props.data.time||!props.data.date))} onClick={()=>{props.setPage(props.next)}}>Next <i className="fa-solid fa-angle-right fa-2xs"></i></button>
            </div>
            <br/>
        </div>
    );
}