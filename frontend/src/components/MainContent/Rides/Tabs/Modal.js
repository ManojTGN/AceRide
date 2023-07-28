import { useEffect, useState } from "react";

export default function Modal(props){
    const [modal,setModal] =  useState(props.modalStatus);

    // useEffect(()=>{
    //     console.log(modal,props.modalStatus)
    //     if(props.modalStatus !== modal){
    //         setModal(props.modalStatus);
    //     }
    // },[props.modalStatus]);

    return(
        <>
        {modal?
        <div className="z-30 fixed top-0 left-0 overflow-hidden w-screen h-screen  flex items-center justify-center">
            <div className="h-72 w-3/6 rounded bg-white shadow-xl p-5">
                <div className="flex items-center">
                    <p className="w-full text-2xl">Modal Title</p>
                    <div onClick={()=>setModal(false)} className="w-full flex justify-end cursor-pointer text-2xl">
                    <i className="fa-regular fa-circle-xmark"></i>
                    </div>
                </div>
                <br/>
                <hr className="border-2 border-emerald-500"/>
            {props.content}
            </div>
        </div>
        :null}
        </>
    );
}