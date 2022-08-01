import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = (props) => {
  return (
    <>
        <section className="banner-area organic-breadcrumb">
        <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                <div className="col-first">
                    <h1>{props.title}</h1>
                    <nav className="d-flex align-items-center">
                        <a href="#">{props.root}<span><FaLongArrowAltRight/></span></a>
                        <a href="#">{props.parent} {!props.child==''?<span><FaLongArrowAltRight/></span>:""}</a>
                        <a href="#">{props.child}</a>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner