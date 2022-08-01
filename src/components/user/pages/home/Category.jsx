import React from 'react'

import c1 from '../../../../assets/img/category/c1.jpg'
import c2 from '../../../../assets/img/category/c2.jpg'
import c3 from '../../../../assets/img/category/c3.jpg'
import c4 from '../../../../assets/img/category/c4.jpg'
import c5 from '../../../../assets/img/category/c5.jpg'

const Category = () => {
    return (
        <>
            <section className="category-area"  style={{marginTop:"70px"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-8 col-md-8">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src={c1} alt="..." />
                                        <a href={c1} className="img-pop-up" target="_blank" rel="noreferrer">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Sneaker for Sports</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src={c2} alt="..." />
                                        <a href={c2} className="img-pop-up" target="_blank" rel="noreferrer">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Sneaker for Sports</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src={c3} alt="..." />
                                        <a href={c3} className="img-pop-up" target="_blank" rel="noreferrer">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Product for Couple</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src={c4} alt="..." />
                                        <a href={c4} className="img-pop-up" target="_blank" rel="noreferrer">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Sneaker for Sports</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-deal">
                                <div className="overlay"></div>
                                <img className="img-fluid w-100" src={c5} alt="..." />
                                <a href={c5} className="img-pop-up" target="_blank" rel="noreferrer">
                                    <div className="deal-details">
                                        <h6 className="deal-title">Sneaker for Sports</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category