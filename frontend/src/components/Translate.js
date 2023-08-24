import axios from "axios";
import env from "react-dotenv";

export default async function Translate( staticText, dispatch, target){
    
    let params = new URLSearchParams({target,key:env.GOOGLE_TRANSLATE_API});
    Object.values(staticText).map(element => params.append('q',element));

    axios(
    {
        url:`https://translation.googleapis.com/language/translate/v2`,
        method:'POST',
        params,
        withCredentials:false
    })
    .then((res)=>{
        let tmpStaticText = {...staticText};
        Object.keys(tmpStaticText).map((element,index)=>tmpStaticText[element]=res.data.data.translations[index].translatedText);
        dispatch({type:'changeLanguage',payload:tmpStaticText});
    }).catch((reason)=>{
        console.log(reason);
    });
}