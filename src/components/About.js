import React from 'react'

export default function About() {

    return (

        <>
            <div className='container-sm mt-3 flex flex-col text-light  m-auto'>
                <p className='fs-1'>About is Text Editer !</p>
                <hr />
            </div>

            <div className='container-sm text-light '>
                <h1 className='fs-3'>Telling about the text editer function</h1>
            </div>

            <div className='container-sm text-light '>
                <p className='fs-5 mt-2'> 1 .  UPP is ( convert to uppercase ) convert in uppercase your text.</p>
                <p className='fs-5 mt-2'> 2 .  LOW is ( convert to lowercase ) convert in lowercase your text.</p>
                <p className='fs-5 mt-2'> 3 .  <i className="fa-regular fa-copy"></i> is ( copy ) copy your text.</p>
                <p className='fs-5 mt-2'> 4 .  [ ] is ( Spaces ) clear all extra Spaces in your text.</p>
                <p className='fs-5 mt-2'> 5 .  C is ( clear ) clear your textarea.</p>
                <p className='fs-5 mt-2'> 6 .  In input field is type any words matches for search result in your textarea.</p>
                <p className='fs-5 mt-2'> 7 .  <i className="fa-sharp fa-solid fa-magnifying-glass"></i> is (search button) search your input field text to your textarea.</p>
                <p className='fs-5 mt-2'> 8 .  ReverseText is your textarea text to reverse your all text. example ( rahul is / is rahul).</p>
                <p className='fs-5 mt-2'> 9 .  Clear Word is (one word) one word clear from start to last word in your text.</p>
                <hr />
            </div>
            <div className='container-sm text-light my-3 fs-4'>
                <p className='mt-2'>text Editer is a powerful application and useful for users. </p>
                <p className='mt-3'>Many function included this editer and All function working properly.</p>
                <p>Thankyou For visited Text Editer !</p>
            </div>
        </>
    )
}
