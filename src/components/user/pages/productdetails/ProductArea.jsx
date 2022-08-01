import React from 'react'
import sP1 from '../../../../assets/img/category/s-p1.jpg'

import { FaHeart } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { productDetails } from '../../../../helper/api/ProductApi';

const ProductArea = () => {
	const { id } = useParams()
	const [detail, setDetail] = useState({})

	const singleProduct = async () => {
		const data = await productDetails(id)
		setDetail(data)
	}

	useEffect(() => {
		singleProduct()
	},[])

	console.log(detail);

	return (
		<>
			<div className="product_image_area">
				<div className="container">
					<div className="row s_product_inner">
						<div className="col-lg-6">
							<div className="s_Product_carousel">
								<div className="single-prd-item">
									<img className="img-fluid" src={detail.image} alt="..." style={{height:"500px",width:"500px"}} />
								</div>
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							<div className="s_product_text">
								<h3>{detail.title}</h3>
								<h2>${detail.price}</h2>
								<ul className="list">
									<li><a className="active" href="#"><span>Category</span> : {detail.category}</a></li>
									<li><a href="#"><span>Availibility</span> : In Stock</a></li>
								</ul>
								<p>{detail.description}</p>
								<div className="product_count">
									<label htmlFor="qty">Quantity:</label>
									<input type="text" name="qty" id="sst" maxLength="12" value="1" title="Quantity:" className="input-text qty" />
									{/* <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
							 className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
							<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
							 className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button> */}
								</div>
								<div className="card_area d-flex align-items-center">
									<a className="primary-btn" href="#">Add to Cart</a>
									{/* <a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond"></i></a> */}
									<a className="icon_btn" href="#"><i><FaHeart /></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductArea