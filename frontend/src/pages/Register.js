import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import env from "react-dotenv";
import axios from "axios";

export default function Register(){
    let navigate = useNavigate();
    return (
        <div className="w-full h-full flex">
            <div className="w-full h-full flex items-center justify-center" style={{backgroundColor:"#27c66a"}}>
                <img className="w-full" src="./images/registration.gif" alt="RegistrationImage"/>
            </div>
            <div className="w-full h-full text-center flex items-center justify-center">
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold">AceRide</h1>
                    <p>Elevate Your Ride Experience</p>
                    <br/>
                    <hr className="border-2 border-dashed" />
                    <br/>
                    <div className="w-full flex items-center justify-center">
                    <GoogleOAuthProvider clientId={env.CLIENT_ID}>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            return axios({
                                method: 'POST',
                                url:`http://localhost:${env.SERVER_PORT}/register`,
                                headers:{"Content-Type": "application/json" },
                                data:credentialResponse
                            }).then((res)=>{
                                if(res.status === 200){
                                    navigate('../');
                                    window.location.reload();
                                }else{
                                    navigate('../register');
                                }
                            });
                        }}
                        onError={(err) => {
                            console.log(err);
                        }}
                    />
                    </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}