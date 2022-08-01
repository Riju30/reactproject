import React from 'react'

const ContactArea = () => {
  return (
    <>
        <section className="contact_area section_gap_bottom">
		<div className="container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14565.457154858901!2d88.53618887206909!3d24.12384163425933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f95f44939f23d7%3A0x8068a47605c1734a!2sDomkal%2C%20West%20Bengal%20742303!5e0!3m2!1sen!2sin!4v1658482524416!5m2!1sen!2sin" width="600" height="450" style={{border:"0",width:"100%",margin:"40px 0 30px 0"}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			<div className="row">
				<div className="col-lg-3">
					<div className="contact_info">
						<div className="info_item">
							<i className="lnr lnr-home"></i>
							<h6>California, United States</h6>
							<p>Santa monica bullevard</p>
						</div>
						<div className="info_item">
							<i className="lnr lnr-phone-handset"></i>
							<h6><a href="#">00 (440) 9865 562</a></h6>
							<p>Mon to Fri 9am to 6 pm</p>
						</div>
						<div className="info_item">
							<i className="lnr lnr-envelope"></i>
							<h6><a href="#">support@colorlib.com</a></h6>
							<p>Send us your query anytime!</p>
						</div>
					</div>
				</div>
				<div className="col-lg-9">
					<form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
						<div className="col-md-6">
							<div className="form-group">
								<input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"/>
							</div>
							<div className="form-group">
								<input type="email" className="form-control" id="email" name="email" placeholder="Enter email address"   />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject"/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
							</div>
						</div>
						<div className="col-md-12 text-right">
							<button type="submit" value="submit" className="primary-btn">Send Message</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default ContactArea