import React from 'react'
import { Link } from 'react-router-dom'

export default function TextUtils(props) {
    return (
        <nav className="navbar sticky-top mynav">
            <form className="container-fluid justify-content-start">
                <button className="btn btn-outline-success me-2" type="button"><Link className='text-light fs-4' to="/"><strong >Text Editer !</strong></Link></button>
                <button className="btn btn-sm btn-outline-secondary" type="button"><Link className="nav-link text-light text-sm fw-bold" to="/about">Go to About Page!</Link></button>
            </form>
        </nav>
    )
}
