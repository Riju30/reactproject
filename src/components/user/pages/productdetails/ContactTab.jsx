import React from 'react'
import review1 from '../../../../assets/img/product/review-1.png'
import review2 from '../../../../assets/img/product/review-2.png'
import review3 from '../../../../assets/img/product/review-3.png'
// import { FaStar } from "react-icons/fa";

const ContactTab = (props) => {
  return (
    <>
        <div className={`tab-pane fade ${(props.showTab==="3")?"active show":""}`} id="contact" role="tabpanel" aria-labelledby="contact-tab">
					<div className="row">
						<div className="col-lg-6">
							<div className="comment_list">
								<div className="review_item">
									<div className="media" style={{display:"flex"}}>
										<div className="d-flex">
											<img src={review1} alt="...."/>
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item reply">
									<div className="media" style={{display:"flex"}}>
										<div className="d-flex">
											<img src={review2} alt="..." />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item">
									<div className="media" style={{display:"flex"}}>
										<div className="d-flex">
											<img src={review3} alt="..." />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="review_box">
								<h4>Post a comment</h4>
								<form className="row contact_form"  method="post" id="contactForm" noValidate="novalidate">
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
										</div>
									</div>
									<div className="col-md-12 text-right">
										<button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
    </>
  )
}

export default ContactTab