/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect } from 'react'
import { useState } from 'react'
export default function Text_Reader(props) {
    const [width, setWidth] = useState()
    let w = window.innerWidth
    useEffect(() => {
        window.addEventListener("resize", () => {
            w = window.innerWidth
            setWidth(w)
        })
        console.log(width)
    }, [width])

    const uppercase = () => {
        setText(text.toUpperCase());
        toast.success("convert to uppercase!");
    }
    const lowercase = () => {
        setText(text.toLowerCase());
        toast.success("convert to lowercase!");
    }
    const ReverseText = () => {
        setText(text.split(' ').reverse().join(" "));
        toast.success("convert to Reverse Text!");
    }
    const copyclipbord = () => {
        navigator.clipboard.writeText(text);
        document.execCommand("Copy")
        toast.success("text Copied !");
    }
    const ClearSpaces = () => {
        setText(text.split(/[ ]+/).join(" "));
        toast.success('clear text spaces')
    }
    const sliceoneword = () => {
        setText(text.split(" ").slice(0, Text.length - 1).join(' '))
        toast.success("Clear word!");
    }
    const clear = () => {
        setText("")
        toast.success("Clear texteria");
    }
    const searchcontent = () => {
        if (text.includes(val)) {
            setval(val)
            toast.success("Matched result!");
        }
        else {
            setval("")
            toast.success("Don't match result!");
        }
    }
    const [val, setval] = useState("");
    const inputvalue = (event) => {
        setval(event.target.value)
    }
    const [text, setText] = useState("");
    const editable = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <ToastContainer />
            <div className={`${width <= 768 ? "container-fuild d-block min-width" : "container d-flex "}`}>
                <div className={`my-5 ${width <= 768 || width <= 1199 && width >=769 ? "container-fluid" : "container w-75"}`}>
                    <h1 className='text-light my-1 fs-1'>Text Editer !</h1>
                    <textarea className="form-control border1 my-2 fs-5" value={text} onChange={editable} id="exampleFormControlTextarea1 mytext" rows="9"></textarea>
                    <div className={`text-center py-3 ${width <= 768 ? "container-fluid": "container"}`}>
                        <div className="boxshadow mb-3 py-2 px-2 btn-group" role="group" aria-label="Basic mixed styles example">
                            <button disabled={text.length === 0} type="button" className="btn btnU btn-success mx-1" onClick={uppercase}>UPP</button><br />
                            <button disabled={text.length === 0} type="button" className="btn btnL btn-primary" onClick={lowercase}>LOW</button><br />
                            <button disabled={text.length === 0} type="button" className="btn btnclipbord mx-1" onClick={copyclipbord}><i className="fa-regular fa-copy"></i></button><br />
                            <button disabled={text.length === 0} type="button" className="btn btnS btn-light mx-1" onClick={ClearSpaces}>[ ]</button><br />
                            <button disabled={text.length === 0} type="button" className="btn btnC btn-danger mx-1 fw-bold" onClick={clear}>C</button><br />
                        </div>
                        <div className="boxshadow btn-group mb-3 py-2 px-2" role="group" aria-label="Basic mixed styles example">
                            <input disabled={text.length === 0} type="text" className='mx-1 btn btnsearch' value={val} onChange={inputvalue} name="" id="searchinputval" placeholder='Search Text' /> <br />
                            <button disabled={text.length === 0} type="button" className="btn btnC btn-dark mx-1" onClick={searchcontent}><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <div className="boxshadow btn-group py-2 px-2" role="group" aria-label="Basic mixed styles example">
                            <button disabled={text.length === 0} type="button" className="btn mx-1 reverse bg-secondary" onClick={ReverseText}>Reverse Text</button><br />
                            <button disabled={text.length === 0} type="button" className="btn btnO btn-warning mx-1" onClick={sliceoneword}>Clear Word</button><br />
                        </div>
                    </div>
                    <div className={`boxshadow my-3 ${width <= 768 ? "container-fluid" : "container"}`} >
                        <h1 className='fs-3 text-light'>preview</h1>
                        <p className='mt-2 pb-2 text-light fs-5'>{text}</p>
                    </div>
                </div>
                <div className={`position-relative ${width <= 768 ? "w-100" : "w-25"}  ${width <= 768 ? "container-fluid" : "container mx-5"}`}>
                    <div className={`px-2 boxshadow ${width <= 768 ? "w-100" : "sticky w-25 container mx-5"}`}>
                        <h1 className='fs-3 mt-4 text-light'>Details</h1>
                        <p className='mt-2 text-light fs-5'>{text.split(" ").filter((element) => { return element.length !== 0 }).length} Words</p>
                        <p className='mt-2 text-light fs-5'>{text.length} Charecters</p>
                        <p className='mt-2 text-light fs-5'>{0.008 * text.split(" ").length - 0.008} Minutes in read</p>
                        <p className='mt-2 pb-2 text-light search_result  fs-5'>Your search result {val} </p>
                    </div>
                </div>
            </div>
        </>
    )
}
