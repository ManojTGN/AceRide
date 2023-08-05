export default function Button(props){
    return(
    <div onClick={props.onClick} className={`w-full h-12 ${props.active?"bg-gradient-to-r from-emerald-400 to-transparent cursor-auto font-bold":"bg-transparent cursor-pointer hover:px-10 hover:from-emerald-100 hover:bg-gradient-to-r"} flex items-center gap-4 p-2 rounded transition-all duration-100 hover:scale-120 hover:font-bold`}>
        {props.icon?props.icon:null}
        <p>{props.value}</p>
    </div>
    );
}