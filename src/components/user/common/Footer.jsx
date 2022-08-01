import React, { useState } from 'react'

import i1 from '../../../assets/img/i1.jpg'
import i2 from '../../../assets/img/i2.jpg'
import i3 from '../../../assets/img/i3.jpg'
import i4 from '../../../assets/img/i4.jpg'
import i5 from '../../../assets/img/i5.jpg'
import i6 from '../../../assets/img/i6.jpg'
import i7 from '../../../assets/img/i7.jpg'
import i8 from '../../../assets/img/i8.jpg'

import { FaFacebookF,FaTwitter,FaDribbble,FaBehance,FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
    const [cYear , setCYear] = useState(new Date().getFullYear())
  return (
    <>
        <footer className="footer-area section_gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-3  col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                        <h6>About Us</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4  col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                        <h6>Newsletter</h6>
                        <p>Stay update with our latest</p>
                        <div className="" id="mc_embed_signup">

                            <form target="_blank" noValidate={true} action="" method="get" className="form-inline">

                                <div className="d-flex flex-row">

                                    <input className="form-control" name="EMAIL" placeholder="Enter Email" required="" type="email"/>


                                    <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"><FaLongArrowAltRight/></i></button>
                                    <div style={{position: "absolute", left: "-5000px"}}>
                                        <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" value="" type="text"/>
                                    </div>

                                    {/* <!-- <div className="col-lg-4 col-md-4">
												<button className="bb-btn btn"><span className="lnr lnr-arrow-right"></span></button>
											</div>  --> */}
                                </div>
                                <div className="info"></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3  col-md-6 col-sm-6">
                    <div className="single-footer-widget mail-chimp">
                        <h6 className="mb-20">Instragram Feed</h6>
                        <ul className="instafeed d-flex flex-wrap">
                            <li><img src={i1} alt=".."/></li>
                            <li><img src={i2} alt=".."/></li>
                            <li><img src={i3} alt=".."/></li>
                            <li><img src={i4} alt=".."/></li>
                            <li><img src={i5} alt=".."/></li>
                            <li><img src={i6} alt="..."/></li>
                            <li><img src={i7} alt="..."/></li>
                            <li><img src={i8} alt=".."/></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                        <h6>Follow Us</h6>
                        <p>Let us be social</p>
                        <div className="footer-social d-flex align-items-center">
                            <a href="#"><i><FaFacebookF/></i></a>
                            <a href="#"><i><FaTwitter/></i></a>
                            <a href="#"><i><FaDribbble/></i></a>
                            <a href="#"><i><FaBehance/></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                <p className="footer-text m-0">
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy; 
                     {cYear} All rights reserved | This template is made by <a style={{color:"orange"}}>Riju</a>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer