import React from 'react'

import fIcon1 from '../../../../assets/img/features/f-icon1.png'
import fIcon2 from '../../../../assets/img/features/f-icon2.png'
import fIcon3 from '../../../../assets/img/features/f-icon3.png'
import fIcon4 from '../../../../assets/img/features/f-icon4.png'

const Features = () => {
    return (
        <>
            <section className="features-area section_gap" style={{marginTop:"10px"}}>
                <div className="container">
                    <div className="row features-inner">
                        {/* <!-- single features --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src={fIcon1} alt="..." />
                                </div>
                                <h6>Free Delivery</h6>
                                <p>Free Shipping on all order</p>
                            </div>
                        </div>
                        {/* <!-- single features --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src={fIcon2} alt="..." />
                                </div>
                                <h6>Return Policy</h6>
                                <p>Free Shipping on all order</p>
                            </div>
                        </div>
                        {/* <!-- single features --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src={fIcon3} alt="..." />
                                </div>
                                <h6>24/7 Support</h6>
                                <p>Free Shipping on all order</p>
                            </div>
                        </div>
                        {/* <!-- single features --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src={fIcon4} alt="..." />
                                </div>
                                <h6>Secure Payment</h6>
                                <p>Free Shipping on all order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features