import { useEffect, useRef } from "react";

export default function Modal(props){
    // const [modal,setModal] =  useState(props.modalStatus);

    // useEffect(()=>{
    //     console.log(modal,props.modalStatus)
    //     if(props.modalStatus !== modal){
    //         setModal(props.modalStatus);
    //     }
    // },[props.modalStatus]);
    
    const modal = useRef();
    useEffect(()=>{
        if(props.modalStatus){
            setTimeout(()=>{
                modal.current.className+=' scale-105';
                setTimeout(()=>{modal.current.className=modal.current.className.replace(' scale-105',' scale-100');},150);
            },50);
        }
    },[props.modalStatus])

    return(
        <>
        {props.modalStatus?
        <div ref={modal} className={"z-30 fixed top-0 left-0 overflow-hidden w-screen h-screen  flex items-center justify-center transition-all duration-150"}>
            <div className="h-screen w-screen bg-emerald-800 absolute opacity-20 backdrop-blur-2xl"></div>
            <div className="h-auto w-3/6 rounded-lg bg-gradient-to-r from-emerald-100 to-emerald-50 shadow-xl drop-shadow-2xl p-5 flex flex-col border-2 border-emerald-700">
                <div className="flex items-center h-20">
                    <p className="w-full text-2xl">{props.title}</p>
                    <div onClick={()=>props.setModal(false)} className="w-full flex justify-end cursor-pointer text-2xl">
                    <i className="fa-regular fa-circle-xmark"></i>
                    </div>
                </div>
                <div className="w-full h-5">
                    <hr className="border-2 border-emerald-500"/>
                </div>
                <div className="w-full h-full">
                {props.content}
                </div>
            </div>
        </div>
        :null}
        </>
    );
}