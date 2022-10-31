import React from 'react'
import { useState } from 'react'
export default function Text_Reader(props) {
    const uppercase = () => {
        setText(text.toUpperCase());
        props.shouAlert("convert to uppercase!", "success");
    }
    const lowercase = () => {
        setText(text.toLowerCase());
        props.shouAlert("convert to lowercase!", "success");
    }
    const ReverseText = () => {
        setText(text.split(' ').reverse().join(" "));
        props.shouAlert("Reverse Text!", "success");
    }
    const copyclipbord = () => {
        navigator.clipboard.writeText(text);
        document.execCommand("Copy")
        props.shouAlert("Copied!!", "success");
    }
    const ClearSpaces = () => {
        setText(text.split(/[ ]+/).join(" "));
        props.shouAlert("Clear Spaces!", "success");
    }
    const sliceoneword = () => {
        setText(text.split(" ").slice(0, Text.length - 1).join(' '))
        props.shouAlert("Clear word!", "success");
    }
    const clear = () => {
        setText("")
        props.shouAlert("Clear texteria!", "success");
    }
    const searchcontent = () => {
        if (text.includes(val)) {
            setval(val)
            props.shouAlert("Matched result!", "success");
        }
        else {
            setval("")
            props.shouAlert("Don't match result!", "success");
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
            <div className="container my-5 d-flex">
                <div className="container-sm mt-4 boxshadow" style={{ width: '25%' }}>
                    <h1 className='fs-3 mt-4 text-light'>Your Summary Information</h1>
                    <p className='mt-2 text-light fs-5'>{text.split(" ").filter((element) => { return element.length !== 0 }).length} Words</p>
                    <p className='mt-2 text-light fs-5'>{text.length} Charecters</p>
                    <p className='mt-2 text-light fs-5'>{0.008 * text.split(" ").length - 0.008} Minutes in read</p>
                    <p className='mt-2 pb-2 text-light search_result  fs-5'>Your search result {val} </p>

                </div>
                <div className='container-sm mt-4 texrt-cente mx-5' style={{ width: '50%' }}>
                    <h1 className='text-light fs-1'>Text Editer !</h1>
                    <textarea className="form-control border1 my-2 fs-5"value={text} onChange={editable} id="exampleFormControlTextarea1 mytext" rows="9"></textarea>
                </div>
                <div className='container-sm mt-5 text-center boxshadow' style={{ width: '25%' }}>
                    <div className="boxshadow btn-group mt-5" role="group" aria-label="Basic mixed styles example">
                        <button disabled={text.length === 0} type="button" className="btn btnU btn-success mx-1" onClick={uppercase}>UPP</button><br />
                        <button disabled={text.length === 0} type="button" className="btn btnL btn-primary" onClick={lowercase}>LOW</button><br />
                        <button disabled={text.length === 0} type="button" className="btn btnclipbord mx-1" onClick={copyclipbord}><i className="fa-regular fa-copy"></i></button><br />
                        <button disabled={text.length === 0} type="button" className="btn btnS btn-light mx-1" onClick={ClearSpaces}>[ ]</button><br />
                        <button disabled={text.length === 0} type="button" className="btn btnC btn-danger mx-1 fw-bold" onClick={clear}>C</button><br />
                    </div>
                    <div className="boxshadow btn-group mt-5" role="group" aria-label="Basic mixed styles example">
                        <input disabled={text.length === 0} type="text" className='mx-1 btn btnsearch' value={val} onChange={inputvalue} name="" id="searchinputval" placeholder='Search Text' /> <br />
                        <button disabled={text.length === 0} type="button" className="btn btnC btn-dark mx-1" onClick={searchcontent}><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className="boxshadow btn-group mt-5" role="group" aria-label="Basic mixed styles example">
                        <button disabled={text.length === 0} type="button" className="btn mx-1 reverse bg-secondary" onClick={ReverseText}>Reverse Text</button><br />
                        <button disabled={text.length === 0} type="button" className="btn btnO btn-warning mx-1" onClick={sliceoneword}>Clear Word</button><br />
                    </div>
                </div>
            </div>
            <div className="container-sm boxshadow" >
                <h1 className='fs-3 mt-2 text-light'>preview</h1>
                <p className='mt-2 pb-2 text-light fs-5'>{text}</p>
            </div>
        </>
    )
}
