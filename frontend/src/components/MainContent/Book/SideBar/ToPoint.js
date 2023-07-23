export default function ToPoint(props){
    return (
        <div className="font-bold text-black text-left px-10">
            <i className="fa-solid fa-thumbtack"></i> Drop Point
            <br/>
            <br/>
            <input value={props.data.to?props.data.to:''} onChange={(event)=>{props.setData({...props.data,to:event.target.value})}} className="w-full h-12 border-2 border-emerald-700 rounded" placeholder="   To?" style={{fontFamily:"Arial, FontAwesome"}} />
            <br/>
            <br/>
            <div className="h-72 flex flex-col gap-2">{/*overflow-scroll no-scrollbar::-webkit-scrollbar no-scrollbar*/}
                <div data-place="Mettur" onClick={(event)=>{props.setData({...props.data,to:event.target.dataset.place})}} className="w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105">
                    <i className="fa-solid fa-location-dot"></i> Mettur
                </div>
                <div data-place="Mecheri" onClick={(event)=>{props.setData({...props.data,to:event.target.dataset.place})}} className="w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105">
                    <i className="fa-solid fa-location-dot"></i> Mecheri
                </div>
                <div data-place="Salem" onClick={(event)=>{props.setData({...props.data,to:event.target.dataset.place})}} className="w-full h-10 p-2 bg-gradient-to-r from-emerald-200 to-transparent rounded cursor-pointer hover:from-emerald-400 transition-all duration-100 ease-in-out hover:scale-105">
                    <i className="fa-solid fa-location-dot"></i> Salem
                </div>
            </div>
            <div className="h-60">
                <p><i className="fa-solid fa-house-circle-check"></i> Choose From Saved Address</p>
            </div>
            <div className="w-full flex gap-2">
                {props.prev !== null?<button className="w-full p-4 bg-gradient-to-r from-emerald-600 to-transparent text-white text-left rounded hover:from-emerald-700 transition-all duration-100 ease-in-out hover:scale-105" onClick={()=>{props.setPage(props.prev)}}><i className="fa-solid fa-angle-left fa-2xs"></i> Prev</button>:null}
                <button className="w-full p-4 bg-gradient-to-r from-transparent to-emerald-600 text-white text-right rounded disabled:to-neutral-600 disabled:cursor-not-allowed hover:to-emerald-700 transition-all duration-100 ease-in-out hover:scale-105  disabled:hover:scale-100" disabled={!props.data.to || props.data.to.trim() === ''} onClick={()=>{props.setPage(props.next)}}>Next <i className="fa-solid fa-angle-right fa-2xs"></i></button>
            </div>
            <br/>
        </div>
    );
}