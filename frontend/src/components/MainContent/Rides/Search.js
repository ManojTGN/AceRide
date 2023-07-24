export default function SearchBar(props){
    return(
        <div className="w-full flex h-14 bg-gradient-to-r from-emerald-300 to-emerald-100 border-2 border-emerald-900 rounded">
            <div className="h-full flex items-center">
                <i className="p-5 fa-solid fa-magnifying-glass text-emerald-700 fa-2xl"></i>
            </div>
            <div className="h-full w-full flex items-center rounded p-1">
                <input className="w-full h-5/6 font-bold bg-gradient-to-r to-emerald-100 from-emerald-300 border-2 border-emerald-600 rounded placeholder:text-emerald-700" type="text" placeholder={props.placeholder} value={props.value} onChange={(event)=>props.set(event.target.value)}/>
            </div>
            <div className="w-1/6 flex items-center justify-center p-2">
                <button className="border-2 border-emerald-600 w-full h-full rounded text-emerald-800 font-bold bg-gradient-to-r to-emerald-500 from-emerald-300 transition-all duration-100 ease-in-out hover:scale-105 active:scale-95">Search</button>
            </div>
        </div>
    )
}