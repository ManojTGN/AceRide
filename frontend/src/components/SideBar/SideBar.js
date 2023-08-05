import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function SideBar(props){
    let navigate = useNavigate();
    return(
        <div className="w-1/6 h-full bg-neutral-100 fixed">
            <div className="w-full p-2 flex items-center justify-center">
            <div className="w-full box-border h-8 gap-5 bg-emerald-700 rounded text-white flex items-center justify-center">
                <i className="fa-solid fa-car-rear"></i> AceRide
            </div>
            </div>
            <hr className="border-2 border-dashed border-b-neutral-300"/>
            <br/>
            <div className="flex flex-col gap-2">
                <p className="mx-2 font-bold">Navigation</p>
                <Button onClick={()=>navigate('../dashboard')} value="Home" icon={<i className="fa-solid fa-hashtag"></i>} active={props.selectedPage === 'HOME'}></Button>
                <Button onClick={()=>navigate('../newRide')} value="Book New Ride" icon={<i className="fa-solid fa-location-dot"></i>} active={props.selectedPage === 'BOOK'}></Button>
                <Button onClick={()=>navigate('../rides')} value="Your Rides" icon={<i className="fa-solid fa-taxi"></i>} active={props.selectedPage === 'RIDES'}></Button>
            </div>
            <br/>
            <hr className="border-2 border-dashed border-b-neutral-300"/>
            <br/>
            <div className="flex flex-col gap-2">
                <p className="mx-2 font-bold">Preference</p>
                <Button onClick={()=>navigate('../profile')} value="Profile" icon={<i className="fa-solid fa-user"></i>} active={props.selectedPage === 'PROFILE'}></Button>
                <Button onClick={()=>navigate('../address')} value="Address" icon={<i className="fa-solid fa-address-book"></i>} active={props.selectedPage === 'ADDRESS'}></Button>
                <Button onClick={()=>navigate('../settings')} value="Settings" icon={<i className="fa-solid fa-gear"></i>} active={props.selectedPage === 'SETTINGS'}></Button>
            </div>
            <br/>
        </div>
    );
}