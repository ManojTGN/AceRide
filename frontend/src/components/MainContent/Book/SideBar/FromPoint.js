
export default function FromPoint(props){

    return (
        <div className="font-bold text-black text-left px-10">
            <i className="fa-solid fa-thumbtack"></i> Pickup Point
            <br/>
            <br/>
            <input value={props.data.from?props.data.from:''} onChange={(event)=>{props.setData({...props.data,from:event.target.value})}} className="w-full h-12 border-2 border-emerald-700 rounded" placeholder="   From?" style={{fontFamily:"Arial, FontAwesome"}} />
            <br/>
            <br/>
            <div className="h-72 flex flex-col gap-2 ">{/*overflow-scroll no-scrollbar::-webkit-scrollbar no-scrollbar*/}
                <div data-place="Mettur" onClick={(event)=>{props.setData({...props.data,from:event.target.dataset.place})}} className="cursor-pointer w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105">
                    <i className="fa-solid fa-location-dot"></i> Mettur
                </div>
                <div data-place="Mecheri" onClick={(event)=>{props.setData({...props.data,from:event.target.dataset.place})}} className="cursor-pointer w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105">
                    <i className="fa-solid fa-location-dot"></i> Mecheri
                </div>
                <div data-place="Salem" onClick={(event)=>{props.setData({...props.data,from:event.target.dataset.place})}} className="cursor-pointer w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105">
                    <i className="fa-solid fa-location-dot"></i> Salem
                </div>
            </div>
            <div className="h-60">
                <p><i className="fa-solid fa-house-circle-check"></i> Choose From Saved Address</p>
            </div>
            <div className="w-full">
                <button className="cursor-pointer w-full p-4 bg-gradient-to-r from-transparent to-emerald-600 text-white text-right rounded disabled:to-neutral-600 disabled:cursor-not-allowed hover:to-emerald-700 transition-all duration-100 ease-in-out hover:scale-105  disabled:hover:scale-100" disabled={!props.data.from || props.data.from.trim() === ''} onClick={()=>{props.setPage(props.next)}}>Next <i className="fa-solid fa-angle-right fa-2xs"></i></button>
            </div>
            <br/>
        </div>
    );
}