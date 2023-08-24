import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import env from "react-dotenv";
import Translate from "../../Translate";

function reducer(staticText,action){
    if(action.type === 'changeLanguage')
        return action.payload;
    return staticText;
}

export default function Settings(props){

    const [langs,setLangs] = useState([{name:'Getting Languages...',language:'loading'}]);
    const [localSetting,setLocalSetting] = useState({...props.data.settings});
    const [localUser,setLocalUser] = useState({...props.data.user});

    useEffect(()=>{
        axios({
            method: 'POST',
            url:`http://localhost:${env.SERVER_PORT}/`,
            headers:{"Content-Type": "application/json" },
            data:{setSettings:true,settings:localSetting,user:localUser}
        }).then((res)=>{
            if(JSON.stringify(localUser) === JSON.stringify(props.data.user) && res.status === 200){
                window.location.reload();
            }else{
                props.data.user = {...localUser};
            }
        }).catch((reason)=>{
            // throw reason;
        });
    },[localSetting,localUser]);

    const [staticText,dipatchText] = useReducer(reducer,{
        Settings:"Settings",
        Profile:"Profile",
        UserName:"Username",
        Email:"Email",
        ProfilePicture:"Profile Picture",
        Themes:"Themes",
        SelectYourPreferrableTheme:"Select Your Preferrable Theme",
        Default:"Default",
        EmeraldGreen:"Emerald Green",
        SunShine:"Sun Shine",
        BlueHorizon:"Blue Horizon",
        Neutral:"Neutral",
        Language:"Language",
        YourPreferredLanguage:"Your Preferred Language",
        AlsoChangeTheSettingsPage:"Also Change The Settings Page",
        DangerZone:"Danger Zone",
        DeleteAccount:"Delete Account",
        DisableAccount:"Disable Account",
        DeleteYourAccount:"Delete Your Account",
        DisableYourAccount:"Disable Your Account",
        DeleteAccountInfo:"Once you delete your account, there is no going back. Please be certain",
        DisableAccountInfo:"Disable your account and every features is disabled untill account is enabled back",
    });

    useEffect(()=>{
        axios({
            url:'https://translation.googleapis.com/language/translate/v2/languages',
            params:{
                key:env.GOOGLE_TRANSLATE_API,
                target:'en'
            },
            headers:{"Content-Type":"application/json"},
            withCredentials:false
        }).then((res)=>{
            setLangs(res.data.data.languages);
        }).catch((err)=>{
            
        });

        if(localSetting.affectSettingLang && localSetting.language !== 'en')
            Translate(staticText, dipatchText, localSetting.language);

    },[]);

    return(
        
        <div className="w-full flex items-start justify-center">
        <div className="w-4/6">
            <div className="fixed backdrop-blur-lg w-full">
                <p className="text-4xl font-bold py-2">{staticText.Settings}</p>
                <br/>
                <hr className="w-1/2"/>
            </div>
            <br/><br/><br/>
            <br/><br/>
    
        <div className="w-full flex">
            <div className="text-neutral-600 font-bold text-2xl justify-start w-full">{staticText.Profile}</div>
            <div className="text-neutral-400 w-full">
                <p>{staticText.UserName}</p>
                <input type="text" className={`group w-full p-2 border-2 rounded-md font-bold text-${localSetting.theme}-800 border-${localSetting.theme}-800`} value={localUser.name} onChange={(event)=>setLocalUser({...localUser,name:event.target.value})}/>
                <br/><br/>

                <p>{staticText.Email}</p>
                <input type="text" className={`group w-full p-2 border-2 border-${localSetting.theme}-800 rounded-md text-${localSetting.theme}-800 font-bold`} value={localUser.email} disabled={true}/>
                <br/><br/>

                <p className="py-2">{staticText.ProfilePicture}</p>
                <div className={`w-32 rounded-md h-32 outline outline-2 outline-offset-4 outline-${localSetting.theme}-800`}>
                    <img src={localUser.picture} className="w-full" alt="profilePicture" draggable={false}/>
                </div>
            </div>
        </div>
        <br/>
        <br/>

        <div className="w-full flex">
            <div className="text-neutral-600 font-bold text-2xl justify-start w-full">{staticText.Language}</div>
            <div className="text-neutral-400 w-full">
                <p>{staticText.YourPreferredLanguage}</p>
                <select value={localSetting.language} onChange={(event)=>setLocalSetting({...localSetting,language:event.target.value})} className={`w-full h-12 border-2 border-${localSetting.theme}-700 rounded placeholder-shown:h-16 text-${localSetting.theme}-700`}>
                    {langs.map((element)=><option className="h-12" key={element.language} value={element.language}>{element.name}</option>)}
                </select>
                <br/>
                <div className="flex gap-2 py-2">
                <input type="checkbox" onChange={(event)=>setLocalSetting({...localSetting,affectSettingLang:event.target.checked})} checked={localSetting.affectSettingLang} className={`w-5 h-5 cursor-pointer accent-${localSetting.theme}-700`}/>
                <label>{staticText.AlsoChangeTheSettingsPage}</label>
                </div>
            </div>
        </div>
        <br/>
        <br/>

        <div className="w-full flex">
            <div className="text-neutral-600 font-bold text-2xl justify-start w-full">{staticText.Themes}</div>
            <div className="text-neutral-400 w-full">
                <p>{staticText.SelectYourPreferrableTheme}</p>
                <br/>
                <div>
                    <p className="p-1">{staticText.EmeraldGreen} ({staticText.Default})</p>
                    <div className="flex gap-2">
                        <input type="radio" name="theme" id="emeraldgreen" className="w-0 h-0 peer" onChange={(event)=>{setLocalSetting({...localSetting,theme:event.target.id})}} checked={localSetting.theme==='emeraldgreen'}/>
                        <label htmlFor="emeraldgreen" className="rounded-sm flex gap-2 peer-checked:outline outline-2 outline-offset-4 outline-emerald-700 cursor-pointer">
                            <div className="w-10 h-10 rounded-md bg-emerald-300"></div>
                            <div className="w-10 h-10 rounded-md bg-emerald-500"></div>
                            <div className="w-10 h-10 rounded-md bg-emerald-600"></div>
                            <div className="w-10 h-10 rounded-md bg-emerald-700"></div>
                            <div className="w-10 h-10 rounded-md bg-emerald-800"></div>
                        </label>
                        <div className="w-10 h-10 flex items-center justify-center invisible peer-checked:visible"> <i className="fa-solid fa-square-check fa-xl text-emerald-800"></i> </div>
                    </div>
                    <br/>
                    <p className="p-1">{staticText.SunShine}</p>
                    <div className="flex gap-2">
                        <input type="radio" name="theme" id="sunshine" className="w-0 h-0 peer" onChange={(event)=>{setLocalSetting({...localSetting,theme:event.target.id})}} checked={localSetting.theme==='sunshine'}/>
                        <label htmlFor="sunshine" className="rounded-sm flex gap-2 peer-checked:outline outline-2 outline-offset-4 outline-orange-700 cursor-pointer">
                            <div className="w-10 h-10 rounded-md bg-yellow-300"></div>
                            <div className="w-10 h-10 rounded-md bg-yellow-500"></div>
                            <div className="w-10 h-10 rounded-md bg-yellow-600"></div>
                            <div className="w-10 h-10 rounded-md bg-orange-700"></div>
                            <div className="w-10 h-10 rounded-md bg-orange-800"></div>
                        </label>
                        <div className="w-10 h-10 flex items-center justify-center invisible peer-checked:visible"> <i className="fa-solid fa-square-check fa-xl text-orange-700"></i> </div>
                    </div>
                    <br/>
                    <p className="p-1">{staticText.BlueHorizon}</p>
                    <div className="flex gap-2">
                        <input type="radio" name="theme" id="bluehorizon" className="w-0 h-0 peer" onChange={(event)=>{setLocalSetting({...localSetting,theme:event.target.id})}} checked={localSetting.theme==='bluehorizon'}/>
                        <label htmlFor="bluehorizon" className="rounded-sm flex gap-2 peer-checked:outline outline-2 outline-offset-4 outline-sky-700 cursor-pointer">
                            <div className="w-10 h-10 rounded-md bg-sky-300"></div>
                            <div className="w-10 h-10 rounded-md bg-sky-500"></div>
                            <div className="w-10 h-10 rounded-md bg-blue-600"></div>
                            <div className="w-10 h-10 rounded-md bg-indigo-700"></div>
                            <div className="w-10 h-10 rounded-md bg-indigo-800"></div>
                        </label>
                        <div className="w-10 h-10 flex items-center justify-center invisible peer-checked:visible"> <i className="fa-solid fa-square-check fa-xl text-indigo-700"></i> </div>
                    </div>
                    <br/>
                    <p className="p-1">{staticText.Neutral}</p>
                    <div className="flex gap-2">
                        <input type="radio" name="theme" id="neutral" className="w-0 h-0 peer" onChange={(event)=>{setLocalSetting({...localSetting,theme:event.target.id})}} checked={localSetting.theme==='neutral'}/>
                        <label htmlFor="neutral" className="rounded-sm flex gap-2 peer-checked:outline outline-2 outline-offset-4 outline-neutral-700 cursor-pointer">
                            <div className="w-10 h-10 rounded-md bg-neutral-300"></div>
                            <div className="w-10 h-10 rounded-md bg-neutral-500"></div>
                            <div className="w-10 h-10 rounded-md bg-neutral-600"></div>
                            <div className="w-10 h-10 rounded-md bg-neutral-700"></div>
                            <div className="w-10 h-10 rounded-md bg-neutral-800"></div>
                        </label>
                        <div className="w-10 h-10 flex items-center justify-center invisible peer-checked:visible"> <i className="fa-solid fa-square-check fa-xl text-neutral-950"></i> </div>
                    </div>
                    <br/>

                </div>
            </div>
        </div>
        <br/><br/>

        <div className="w-full flex">
            <div className="text-neutral-600 font-bold text-2xl justify-start w-full">{staticText.DangerZone}</div>
            <div className="text-neutral-400 w-full p-2 outline outline-2 rounded-lg outline-red-400">
                <p className="text-red-900 font-bold"><span className="">*</span>{staticText.DeleteYourAccount}</p>
                <div className="px-5">
                <p className="text-sm py-1">{staticText.DeleteAccountInfo}</p>
                <button className="p-2 rounded-md bg-gradient-to-r from-rose-400 to-rose-300 text-red-900 font-bold hover:scale-110 transition-all duration-150">{staticText.DeleteAccount}</button>
                </div>
                <br/>
                <br/>

                <p className="text-red-900 font-bold"><span className="">*</span>{staticText.DisableYourAccount}</p>
                <div className="px-5">
                <p className="text-sm py-1">{staticText.DisableAccountInfo}</p>
                <button className="p-2 rounded-md bg-gradient-to-r from-rose-400 to-rose-300 text-red-900 font-bold hover:scale-110 transition-all duration-150">{staticText.DisableAccount}</button>
                </div>
                <br/>
            </div>
        </div>
        <br/>
        <br/>

        </div>
        </div>
    );
}