import React from 'react'
import { useState } from 'react'

import loginImg from '../../../../assets/img/login.jpg'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const LoginBoxArea = () => {
    const [registered, setRegistered] = useState(true)
    const handleForm = (arg)=>{
        if(arg=="reg"){
            setRegistered(false)
        }
        if(arg=="log"){
            setRegistered(true)
        }
    }
    return (
        <>
            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <img className="img-fluid" src={loginImg} alt="..." />
                                <div className="hover">
                                    <h4>New to our website?</h4>
                                    <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                    {registered && <button className="primary-btn" onClick={()=>handleForm("reg")}>Create an Account</button>}
                                    {!registered && <button className="primary-btn" onClick={()=>handleForm("log")}>Login </button>}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {registered && <LoginForm />}
                            {!registered && <RegistrationForm />}
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default LoginBoxArea