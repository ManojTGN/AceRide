import Map from "./Map";
import SideBar from "./SideBar/SideBar";

export default function Book(){
    return (
        <div className="w-full h-full bg-emerald-50 relative">
            <Map />
            <SideBar />
        </div>
    )
}