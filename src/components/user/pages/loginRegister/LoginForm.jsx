import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { login } from '../../../../redux/user/AuthSlice';


const LoginForm = () => {

    const [formValue, setFormValue] = useState({ uemail: "", upass: "" })
    const dispatch = useDispatch()

    const { loading, error } = useSelector((state) => ({ ...state.auth }))

    const getFormValue = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        error && toast.error(error)
    }, [error])

    const Login = (e) => {
        e.preventDefault()
        if (formValue.uemail && formValue.upass) {
            dispatch(login({ formValue, toast }))
            setFormValue({ uemail: "", upass: "" })
        } else {
            toast.error("Fill all fields")
        }
    }
    return (
        <>

            <div className="login_form_inner">
                <h3>Log in to enter</h3>
                <form className="row login_form" id="contactForm">
                    <div className="col-md-12 form-group">
                        <input type="text" className="form-control" id="uemal" name="uemail" placeholder="Enter your Email" onChange={getFormValue} value={formValue.uemail} />
                    </div>
                    <div className="col-md-12 form-group">
                        <input type="password" className="form-control" id="upass" name="upass" placeholder="Password" onChange={getFormValue} value={formValue.upass} />
                    </div>
                    {/* <div className="col-md-12 form-group">
                        <div className="creat_account">
                            <input type="checkbox" id="f-option2" name="selector" />
                            <label for="f-option2">Keep me logged in</label>
                        </div>
                    </div> */}
                    <div className="col-md-12 form-group">
                        <button value="submit" className="primary-btn" onClick={Login}>Log In</button>
                        {/* <a href="#">Forgot Password?</a> */}
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm