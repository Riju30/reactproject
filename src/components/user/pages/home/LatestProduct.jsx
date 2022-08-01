import React from 'react'

import p1 from '../../../../assets/img/product/p1.jpg'
import p2 from '../../../../assets/img/product/p2.jpg'
import p3 from '../../../../assets/img/product/p3.jpg'
import p4 from '../../../../assets/img/product/p4.jpg'
import p5 from '../../../../assets/img/product/p5.jpg'
import p6 from '../../../../assets/img/product/p6.jpg'
import p7 from '../../../../assets/img/product/p7.jpg'
import p8 from '../../../../assets/img/product/p8.jpg'

import { BsFillBagCheckFill,BsArrowsMove } from "react-icons/bs";

import { FaHeart,FaSync } from "react-icons/fa";


const LatestProduct = () => {
  return (
    <>
        <section className="owl-carousel active-product-area section_gap owl-theme owl-loaded">
        <div className="single-product-slider">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h1>Latest Products</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                            <img className="img-fluid" src={p1} alt="..."/>
                            <div className="product-details">
                                <h6>addidas New Hammer sole for Sports person</h6>
                                <div className="price">
                                    <h6>$150.00</h6>
                                    <h6 className="l-through">$210.00</h6>
                                </div>
                                <div className="prd-bottom">

                                    <a href="" className="social-info">
                                        <span><BsFillBagCheckFill/></span>
                                        <p className="hover-text">add to bag</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaHeart/></span>
                                        <p className="hover-text">Wishlist</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaSync/></span>
                                        <p className="hover-text">compare</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><BsArrowsMove/></span>
                                        <p className="hover-text">view more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                            <img className="img-fluid" src={p2} alt="..."/>
                            <div className="product-details">
                                <h6>addidas New Hammer sole for Sports person</h6>
                                <div className="price">
                                    <h6>$150.00</h6>
                                    <h6 className="l-through">$210.00</h6>
                                </div>
                                <div className="prd-bottom">

                                    <a href="" className="social-info">
                                    <span><BsFillBagCheckFill/></span>
                                        <p className="hover-text">add to bag</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaHeart/></span>
                                        <p className="hover-text">Wishlist</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaSync/></span>
                                        <p className="hover-text">compare</p>
                                    </a>
                                    <a href="" className="social-info">
                                         <span><BsArrowsMove/></span>
                                        <p className="hover-text">view more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                            <img className="img-fluid" src={p3} alt="..."/>
                            <div className="product-details">
                                <h6>addidas New Hammer sole for Sports person</h6>
                                <div className="price">
                                    <h6>$150.00</h6>
                                    <h6 className="l-through">$210.00</h6>
                                </div>
                                <div className="prd-bottom">
                                    <a href="" className="social-info">
                                    <span><BsFillBagCheckFill/></span>
                                        <p className="hover-text">add to bag</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaHeart/></span>
                                        <p className="hover-text">Wishlist</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaSync/></span>
                                        <p className="hover-text">compare</p>
                                    </a>
                                    <a href="" className="social-info">
                                         <span><BsArrowsMove/></span>
                                        <p className="hover-text">view more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                            <img className="img-fluid" src={p4} alt="..."/>
                            <div className="product-details">
                                <h6>addidas New Hammer sole for Sports person</h6>
                                <div className="price">
                                    <h6>$150.00</h6>
                                    <h6 className="l-through">$210.00</h6>
                                </div>
                                <div className="prd-bottom">

                                    <a href="" className="social-info">
                                    <span><BsFillBagCheckFill/></span>
                                        <p className="hover-text">add to bag</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaHeart/></span>
                                        <p className="hover-text">Wishlist</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaSync/></span>
                                        <p className="hover-text">compare</p>
                                    </a>
                                    <a href="" className="social-info">
                                         <span><BsArrowsMove/></span>
                                        <p className="hover-text">view more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                            <img className="img-fluid" src={p5} alt="..." />
                            <div className="product-details">
                                <h6>addidas New Hammer sole for Sports person</h6>
                                <div className="price">
                                    <h6>$150.00</h6>
                                    <h6 className="l-through">$210.00</h6>
                                </div>
                                <div className="prd-bottom">

                                    <a href="" className="social-info">
                                    <span><BsFillBagCheckFill/></span>
                                        <p className="hover-text">add to bag</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaHeart/></span>
                                        <p className="hover-text">Wishlist</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaSync/></span>
                                        <p className="hover-text">compare</p>
                                    </a>
                                    <a href="" className="social-info">
                                         <span><BsArrowsMove/></span>
                                        <p className="hover-text">view more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                            <img className="img-fluid" src={p6} alt="..." />
                            <div className="product-details">
                                <h6>addidas New Hammer sole for Sports person</h6>
                                <div className="price">
                                    <h6>$150.00</h6>
                                    <h6 className="l-through">$210.00</h6>
                                </div>
                                <div className="prd-bottom">

                                    <a href="" className="social-info">
                                    <span><BsFillBagCheckFill/></span>
                                        <p className="hover-text">add to bag</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaHeart/></span>
                                        <p className="hover-text">Wishlist</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaSync/></span>
                                        <p className="hover-text">compare</p>
                                    </a>
                                    <a href="" className="social-info">
                                         <span><BsArrowsMove/></span>
                                        <p className="hover-text">view more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                            <img className="img-fluid" src={p7} alt="..." />
                            <div className="product-details">
                                <h6>addidas New Hammer sole for Sports person</h6>
                                <div className="price">
                                    <h6>$150.00</h6>
                                    <h6 className="l-through">$210.00</h6>
                                </div>
                                <div className="prd-bottom">

                                    <a href="" className="social-info">
                                    <span><BsFillBagCheckFill/></span>
                                        <p className="hover-text">add to bag</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaHeart/></span>
                                        <p className="hover-text">Wishlist</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaSync/></span>
                                        <p className="hover-text">compare</p>
                                    </a>
                                    <a href="" className="social-info">
                                         <span><BsArrowsMove/></span>
                                        <p className="hover-text">view more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="single-product">
                            <img className="img-fluid" src={p8} alt="..." />
                            <div className="product-details">
                                <h6>addidas New Hammer sole for Sports person</h6>
                                <div className="price">
                                    <h6>$150.00</h6>
                                    <h6 className="l-through">$210.00</h6>
                                </div>
                                <div className="prd-bottom">

                                    <a href="" className="social-info">
                                    <span><BsFillBagCheckFill/></span>
                                        <p className="hover-text">add to bag</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaHeart/></span>
                                        <p className="hover-text">Wishlist</p>
                                    </a>
                                    <a href="" className="social-info">
                                        <span><FaSync/></span>
                                        <p className="hover-text">compare</p>
                                    </a>
                                    <a href="" className="social-info">
                                         <span><BsArrowsMove/></span>
                                        <p className="hover-text">view more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default LatestProduct