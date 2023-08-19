export default function Home(props){
    console.log(props.data);
    return (
        <>
        {props.data?
        <div className="w-full h-screen bg-emerald-50 transition-all duration-700 overflow-hidden">
            <div className="w-full p-5">
                <h1 className="text-5xl font-bold text-emerald-700 flex gap-5 items-center">Hello <p className="text-emerald-800 hover:scale-110 hover:underline hover:text-emerald-950 transition-all duration-100 cursor-pointer text-6xl">{props.data.user.name}</p><p className="text-4xl hover:animate-bounce">{['💖','🚗','✨','👋','🎀','😀'][Math.floor(Math.random()*5)]}</p> </h1>
            </div>
            <div className="w-full h-3/4 flex gap-6">
                <div className="w-2/6 h-full p-4 rounded-md bg-gradient-to-r from-emerald-300 to-emerald-100 shadow-md"></div>
                <div className="w-4/6 flex flex-col gap-6">
                    <div className="w-full h-2/6 rounded-md bg-gradient-to-r from-emerald-300 to-emerald-100"></div>
                    <div className="w-full h-4/6 rounded-md bg-gradient-to-r from-emerald-300 to-emerald-100"></div>
                </div>
            </div>
            <div className="w-full h-24 my-5 bg-gradient-to-r from-emerald-300 to-emerald-100 gap-1 rounded-md"></div>
        </div>
        :null}
        {/* <pre>
        {JSON.stringify(props,null,4)}
        </pre> */}
        {/* <img className="rounded-md drop-shadow-md" src={"images/poster.jpg"} alt="Poster"/> */}
        </>
    )
}