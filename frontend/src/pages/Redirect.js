import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
export default function Redirect(props){
    let navigate = useNavigate();
    useEffect(()=>{ navigate(props.redirect);});
    return ( <div>You Will Be Redirected To {props.redirect}. If Not <a href={props.redirect}>Click Me</a></div>)
}