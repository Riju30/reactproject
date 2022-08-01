import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaEllipsisH } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

import { BsFillBagCheckFill, BsArrowsMove } from "react-icons/bs";

import { FaHeart, FaSync } from "react-icons/fa";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllProduct } from '../../../../redux/product/Allproduct';
import { fetchProductCategory } from '../../../../redux/product/ProductCategory';
import { useState } from 'react';
import { categoryData } from '../../../../redux/product/Allproduct';

const Sidebar = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selectorValue = useSelector((state) => [state.allProduct, state.productCategory])
    const [allProduct, productCategory] = selectorValue
    // const [product , setProduct] = useState({})
    useEffect(() => {
        dispatch(fetchAllProduct())
        dispatch(fetchProductCategory())
    }, [])



    // console.log(product);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const catData = async (catgory) => {
        console.log(catgory);
        const res = await fetch(`https://fakestoreapi.com/products/category/${catgory}`)
        const data = await res.json()
        dispatch(categoryData(data))
    }

    const productDetail = (id)=>{
        navigate(`/product-details/${id}`)
    }


    return (

        <>
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="sidebar-categories">
                            <div className="head">Browse Categories</div>
                            <ul className="main-categories">
                                <li className="main-nav-list" style={{ cursor: "pointer" }} onClick={()=>dispatch(fetchAllProduct())}><a data-toggle="collapse" aria-expanded="true" aria-controls="am"><span
                                    className="lnr lnr-arrow-right"></span>All<span className="number">(53)</span></a>

                                </li>
                                {
                                    productCategory.data.map((category, index) => {
                                        return <li className="main-nav-list" key={index} style={{ cursor: "pointer" }}onClick={()=>catData(category)}><a data-toggle="collapse" aria-expanded="true"><span
                                            className="lnr lnr-arrow-right"></span>{capitalizeFirstLetter(category)}<span className="number">(53)</span></a>

                                        </li>
                                    })
                                }

                            </ul>
                        </div>
                        <div className="sidebar-filter mt-50">
                            <div className="top-filter-head">Product Filters</div>
                            <div className="common-filter">
                                <div className="head">Brands</div>
                                <form action="#">
                                    <ul>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand" /><label htmlFor="apple">Apple<span>(29)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand" /><label htmlFor="asus">Asus<span>(29)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand" /><label htmlFor="gionee">Gionee<span>(19)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand" /><label htmlFor="micromax">Micromax<span>(19)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand" /><label htmlFor="samsung">Samsung<span>(19)</span></label></li>
                                    </ul>
                                </form>
                            </div>
                            <div className="common-filter">
                                <div className="head">Color</div>
                                <form action="#">
                                    <ul>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color" /><label htmlFor="black">Black<span>(29)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color" /><label htmlFor="balckleather">Black
                                            Leather<span>(29)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color" /><label htmlFor="blackred">Black
                                            with red<span>(19)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color" /><label htmlFor="gold">Gold<span>(19)</span></label></li>
                                        <li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color" /><label htmlFor="spacegrey">Spacegrey<span>(19)</span></label></li>
                                    </ul>
                                </form>
                            </div>
                            {/* <div className="common-filter">
                        <div className="head">Price</div>
                        <div className="price-range-area">
                            <div id="price-range"></div>
                            <div className="value-wrapper d-flex">
                                <div className="price">Price:</div>
                                <span>$</span>
                                <div id="lower-value"></div>
                                <div className="to">to</div>
                                <span>$</span>
                                <div id="upper-value"></div>
                            </div>
                        </div>
                    </div> */}
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        {/* <!-- Start Filter Bar --> */}
                        <div className="filter-bar d-flex flex-wrap align-items-center">
                            <div className="sorting">
                                <select className='nice-select'>
                                    <option value="1">Default sorting</option>
                                    <option value="1">Default sorting</option>
                                    <option value="1">Default sorting</option>
                                </select>
                            </div>
                            <div className="sorting mr-auto" style={{ marginRight: "auto" }}>
                                <select className='nice-select'>
                                    <option value="1">Show 12</option>
                                    <option value="1">Show 12</option>
                                    <option value="1">Show 12</option>
                                </select>
                            </div>
                            <div className="pagination">
                                <a href="#" className="prev-arrow"><i aria-hidden="true"><FaLongArrowAltLeft /></i></a>
                                <a href="#" className="active">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#" className="dot-dot"><i aria-hidden="true"><FaEllipsisH /></i></a>
                                <a href="#">6</a>
                                <a href="#" className="next-arrow"><i aria-hidden="true"><FaLongArrowAltRight /></i></a>
                            </div>
                        </div>
                        {/* <!-- End Filter Bar --> */}
                        {/* <!-- Start Best Seller --> */}
                        <section className="lattest-product-area pb-40 category-list" style={{ marginTop: "30px" }}>
                            <div className="row">
                                {/* <!-- single product --> */}
                                {
                                    allProduct?.data?.map((currelem) => {
                                        return <div className="col-lg-4 col-md-6" key={currelem.id}>
                                            <div className="single-product">
                                                <img className="img-fluid" src={currelem.image} alt="..." style={{ height: "250px" }} />
                                                <div className="product-details">
                                                    <h6>{currelem.title}</h6>
                                                    <div className="price">
                                                        <h6>${currelem.price}</h6>
                                                        <h6 className="l-through">$210.00</h6>
                                                    </div>
                                                    <div className="prd-bottom">

                                                        <a href="" className="social-info">
                                                            <span><BsFillBagCheckFill /></span>
                                                            <p className="hover-text">add to bag</p>
                                                        </a>
                                                        <a href="" className="social-info">
                                                            <span><FaHeart /></span>
                                                            <p className="hover-text">Wishlist</p>
                                                        </a>
                                                        <a href="" className="social-info">
                                                            <span><FaSync /></span>
                                                            <p className="hover-text">compare</p>
                                                        </a>
                                                        <a className="social-info" onClick={()=>productDetail(currelem.id)} style={{ cursor: "pointer" }}>
                                                            <span><BsArrowsMove /></span>
                                                            <p className="hover-text">Details</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </section>
                        {/* <!-- End Best Seller --> */}
                        {/* <!-- Start Filter Bar --> */}
                        <div className="filter-bar d-flex flex-wrap align-items-center" style={{ marginBottom: "30px" }}>
                            <div className="sorting" style={{ marginRight: "auto" }}>
                                <select className='nice-select'>
                                    <option value="1">Show 12</option>
                                    <option value="1">Show 12</option>
                                    <option value="1">Show 12</option>
                                </select>
                            </div>
                            <div className="pagination">
                                <a href="#" className="prev-arrow"><i aria-hidden="true"><FaLongArrowAltLeft /></i></a>
                                <a href="#" className="active">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#" className="dot-dot"><i aria-hidden="true"><FaEllipsisH /></i></a>
                                <a href="#">6</a>
                                <a href="#" className="next-arrow"><i aria-hidden="true"><FaLongArrowAltRight /></i></a>
                            </div>
                        </div>
                        {/* // <!-- End Filter Bar --> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar