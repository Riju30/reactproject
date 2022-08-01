import React from 'react'

import review1 from '../../../../assets/img/product/review-1.png'
import review2 from '../../../../assets/img/product/review-2.png'
import review3 from '../../../../assets/img/product/review-3.png'
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import HomeTab from './HomeTab'
import ProfileTab from './ProfileTab';
import ContactTab from './ContactTab';
import ReviewTab from './ReviewTab';


const Description = () => {

    const [showTab , setShowTab] = useState("1")
    // console.log(showTab);

  return (
    <>
        <section className="product_description_area">
		<div className="container">
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a className={`nav-link ${(showTab==="1")?"active":""}`}  id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" onClick={()=>setShowTab("1")} style={{cursor:"pointer"}}>Description</a>
				</li>
				<li className="nav-item">
					<a className={`nav-link ${(showTab==="2")?"active":""}`} id="profile-tab" data-toggle="tab"  role="tab" aria-controls="profile"
					 aria-selected="false" onClick={()=>setShowTab("2")} style={{cursor:"pointer"}} >Specification</a>
				</li>
				<li className="nav-item">
					<a className={`nav-link ${(showTab==="3")?"active":""}`} id="contact-tab" data-toggle="tab"  role="tab" aria-controls="contact"
					 aria-selected="false" onClick={()=>setShowTab("3")} style={{cursor:"pointer"}}>Comments</a>
				</li>
				<li className="nav-item">
					<a className={`nav-link ${(showTab==="4")?"active":""}`} id="review-tab" data-toggle="tab" role="tab" aria-controls="review"
					 aria-selected="false" onClick={()=>setShowTab("4")} style={{cursor:"pointer"}}>Reviews</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<HomeTab showTab={showTab}/>
				<ProfileTab showTab={showTab}/>
				<ContactTab showTab={showTab}/>
				<ReviewTab showTab={showTab}/>
			</div>
		</div>
	</section>
    </>
  )
}

export default Description