import { GoogleMap } from "@react-google-maps/api";
import { useState } from "react";

export default function Map(){
    const [position,setPosition] = useState({lat:0,lng:0});

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
            setPosition({lat:position.coords.latitude,lng:position.coords.longitude});
        }, (error)=>{
            console.log(error);
        });
    } else {
        console.log("Geolocation not supported");
    }

    return(
        <div className="w-full h-full">
            {/* <iframe title={"map"} className="border-0 w-full h-full" allowFullScreen={false} loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d250032.18782091746!2d77.69944108150023!3d11.711903425049407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1690046398093!5m2!1sen!2sin" /> */}
            <GoogleMap center={{lat:position.lat,lng:position.lng}} zoom={15} mapContainerClassName="w-full h-full">

            </GoogleMap>
        </div>
    );
}