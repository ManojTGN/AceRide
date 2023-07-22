import Button from "./Button";

export default function SideBar(props){
    return(
        <div className="w-1/6 h-full bg-neutral-100 ">
            <div className="w-full p-2 flex items-center justify-center">
            <div className="w-full box-border h-8 gap-5 bg-emerald-700 rounded text-white flex items-center justify-center">
                <i className="fa-solid fa-car-rear"></i> AceRide
            </div>
            </div>
            <hr className="border-2 border-dashed border-b-neutral-300"/>
            <br/>
            <div className="flex flex-col gap-2">
                <p className="mx-2 font-bold">Navigation</p>
                <Button onClick={()=>props.setPage('HOME')} value="Home" icon={<i className="fa-solid fa-hashtag"></i>} active={props.selectedPage === 'HOME'}></Button>
                <Button onClick={()=>props.setPage('BOOK')} value="Book New Ride" icon={<i className="fa-solid fa-location-dot"></i>} active={props.selectedPage === 'BOOK'}></Button>
                <Button onClick={()=>props.setPage('RIDES')} value="Your Rides" icon={<i className="fa-solid fa-taxi"></i>} active={props.selectedPage === 'RIDES'}></Button>
            </div>
            <br/>
            <hr className="border-2 border-dashed border-b-neutral-300"/>
            <br/>
        </div>
    );
}