
export default function FilterButton(props){
    return(
        <button className={(props.data.type==='customRange'?`group `:``)+`w-64 h-10 flex p-2 bg-gradient-to-r to-emerald-100 rounded cursor-pointer transition-all duration-100 ease-in-out hover:scale-105 font-bold text-start ${props.data.selected===true?"from-emerald-500 hover:from-emerald-600 border-2 border-emerald-900":"hover:from-emerald-400 from-emerald-300"}`} onClick={props.onClick}>
            <p className="text-left w-full">
                {props.data.icon} {props.data.value}
            </p>
            {props.data.selected?
            <p className="text-right w-1/6 p-1 flex items-center justify-end">
                <i className="fa-solid fa-square-xmark"></i>
            </p>:null}
        </button>
    )
}