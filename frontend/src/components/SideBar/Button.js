export default function Button(props){
    return(
    <div onClick={props.onClick} className={`w-full h-12 ${props.active?"bg-gradient-to-r from-emerald-400 to-emerald-50  cursor-auto":"bg-transparent cursor-pointer"} flex items-center gap-4 p-2 rounded`}>
        {props.icon?props.icon:null}
        <p>{props.value}</p>
    </div>
    );
}