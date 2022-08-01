import React from 'react'

import b1 from '../../../../assets/img/brand/1.png'
import b2 from '../../../../assets/img/brand/2.png'
import b3 from '../../../../assets/img/brand/3.png'
import b4 from '../../../../assets/img/brand/4.png'
import b5 from '../../../../assets/img/brand/5.png'

const Brand = () => {
  return (
    <>
        <section className="brand-area section_gap">
        <div className="container">
            <div className="row">
                <a className="col single-img" href="#">
                    <img className="img-fluid d-block mx-auto" src={b1} alt="..."/>
                </a>
                <a className="col single-img" href="#">
                    <img className="img-fluid d-block mx-auto"  src={b2} alt="..."/>
                </a>
                <a className="col single-img" href="#">
                    <img className="img-fluid d-block mx-auto"  src={b3} alt="..."/>
                </a>
                <a className="col single-img" href="#">
                    <img className="img-fluid d-block mx-auto"  src={b4} alt="..."/>
                </a>
                <a className="col single-img" href="#">
                    <img className="img-fluid d-block mx-auto"  src={b5} alt="..."/>
                </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Brand