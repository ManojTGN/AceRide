export default function FinalDetail(props){
    
    return (
        <div className="font-bold text-black text-left px-10">
            <i className="fa-solid fa-paperclip"></i> Ride Info
            <br/>
            <br/>
            <div className="flex gap-2 items-center">
                <i className="fa-regular fa-circle-dot"></i>
                <input value={"  "+props.data.from} disabled={true} className="w-full h-12 border-2 border-emerald-700 rounded" style={{fontFamily:"Arial, FontAwesome"}}/>
            </div>
            <i className="fa-solid fa-ellipsis-vertical px-1"></i>
            <div className="flex gap-2 items-center">
                <i className="fa-regular fa-circle-dot"></i>
                <input value={"  "+props.data.to} disabled={true} className="w-full h-12 border-2 border-emerald-700 rounded" style={{fontFamily:"Arial, FontAwesome"}}/>
            </div>
            <div className="h-64 flex flex-col gap-2 overflow-scroll no-scrollbar::-webkit-scrollbar no-scrollbar">
                <br/>
                <div className="flex w-full">
                    <p className=" w-full text-left"><i className="fa-solid fa-road"></i> Distance</p>
                    <p className="w-full text-emerald-900 text-right">0 miles</p>
                </div>
                <div className="flex w-full">
                    <p className=" w-full text-left">
                        {
                         props.data.people===1?<i className="fa-solid fa-user"></i>:
                         props.data.people===2?<i className="fa-solid fa-user-group"></i>:
                         props.data.people>=3?<i className="fa-solid fa-users"></i>:
                         <i className="fa-solid fa-circle-exclamation"></i>
                        }
                        {props.data.people>=4?<i className="fa-solid fa-plus fa-2xs"></i>:null} People
                    </p>
                    <p className="w-full text-emerald-900 text-right">{props.data.people}</p>
                </div>
                <div className="flex w-full">
                    <p className=" w-full text-left">
                        {
                         props.data.vehicle==='motorcycle'?<i className="fa-solid fa-motorcycle"></i>:
                         props.data.vehicle==='car'?<i className="fa-solid fa-car-side"></i>:
                         props.data.vehicle==='van'?<i className="fa-solid fa-van-shuttle"></i>:
                         props.data.vehicle==='bus'?<i className="fa-solid fa-bus"></i>:
                         <i className="fa-solid fa-circle-exclamation"></i>
                        } Vehicle
                    </p>
                    <p className="w-full text-emerald-900 text-right">{props.data.vehicle}</p>
                </div>
                <br/>
                <div className="flex w-full">
                    <p className=" w-full text-left"><i className="fa-solid fa-clipboard-question"></i> When</p>
                    <p className="w-full text-emerald-900 text-right">{props.data.dt_type==='now'?'RIGHT NOW':null}</p>
                </div>
                {props.data.dt_type==='otherDay'?
                <div className="flex w-full">
                    <p className=" w-full text-left"><i className="fa-solid fa-calendar-week"></i> Date</p>
                    <p className="w-full text-emerald-900 text-right">{props.data.date}</p>
                </div>
                :null}
                {props.data.dt_type==='today'||props.data.dt_type==='otherDay'?
                <div className="flex w-full">
                    <p className=" w-full text-left"><i className="fa-solid fa-clock"></i> Time</p>
                    <p className="w-full text-emerald-900 text-right">{props.data.time}</p>
                </div>
                :null}
                
            </div>
            <div className="h-60 flex flex-col gap-2">
                <p><i className="fa-solid fa-tag"></i> Total Price</p>
                <div className="flex gap-5 items-center text-emerald-800">
                    <i className="text-4xl fa-solid fa-indian-rupee-sign fa-2xl"></i>
                    <p className="text-4xl">{isNaN(props.data.price)?0.00:props.data.price.toLocaleString(undefined, {style: 'currency',currency: 'IND',minimumFractionDigits: 2,maximumFractionDigits: 2,}).replace('IND','')}</p>
                </div>
                <br/>
                <div className="w-full flex">
                    <input onChange={()=>props.setData({...props.data,paymentType:'gpay'})} type="radio" name="payment" id="gpay" className="peer hidden w-0"/>
                    <label htmlFor="gpay" className="w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer peer-disabled:from-neutral-600 peer-checked:cursor-auto peer-checked:border-2 peer-checked:border-emerald-900 hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105 peer-disabled:hover:scale-100 peer-checked:hover:scale-100"><i className="fa-brands fa-google-pay fa-2xl"></i> Google Pay</label>
                    <label htmlFor="gpay" className="text-right hidden items-center p-1 text-green-800 peer-checked:flex"><i className="fa-solid fa-circle-check"></i></label>
                </div>
                <div className="w-full flex">
                    <input onChange={()=>props.setData({...props.data,paymentType:'cor'})} type="radio" name="payment" id="cor" className="peer hidden w-0"/>
                    <label htmlFor="cor" className="w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer peer-disabled:from-neutral-600 peer-checked:cursor-auto peer-checked:border-2 peer-checked:border-emerald-900 hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105 peer-disabled:hover:scale-100 peer-checked:hover:scale-100"><i className="fa-solid fa-wallet"></i> Cash On Ride</label>
                    <label htmlFor="cor" className="text-right hidden items-center p-1 text-green-800 peer-checked:flex"><i className="fa-solid fa-circle-check"></i></label>
                </div>
            </div>
            <div className="w-full flex gap-2">
                {props.prev !== null?<button className="w-full p-4 bg-gradient-to-r from-emerald-600 to-transparent text-white text-left rounded hover:from-emerald-700 transition-all duration-100 ease-in-out hover:scale-105" onClick={()=>{props.setPage(props.prev)}}><i className="fa-solid fa-angle-left fa-2xs"></i> Prev</button>:null}
                <button className="w-full p-4 bg-gradient-to-r from-transparent to-emerald-600 text-white text-right rounded disabled:to-neutral-600 disabled:cursor-not-allowed hover:to-emerald-700 transition-all duration-100 ease-in-out hover:scale-105  disabled:hover:scale-100" disabled={!props.data.paymentType} onClick={()=>{props.setPage(props.next)}}>Book Now <i className="fa-regular fa-square-check"></i></button>
            </div>
            
        </div>
    );
}