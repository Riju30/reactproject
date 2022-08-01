import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { signUp } from '../../../../helper/api/User'
import { validate } from '../../../../helper/formValidate/FormValidate'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../../../../redux/user/AuthSlice'


const RegistrationForm = () => {
    let [validForm, setValidForm] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => ({ ...state.auth }));

    // const toastMsg = () => toast.success('Registered Successfully ', {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    // });

    const [formData, setFormData] = useState({
        uname: "",
        uemail: "",
        upin: "",
        uphone: "",
        upass: "",
        ucpass: ""
    })

    const getFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validateFormData = (e) => {
        e.preventDefault()
        setValidForm(validate(formData))
        setIsSubmit(true)
        
    }

    useEffect(()=>{
        error && toast.error(error)
    
      },[error])

    const finalDataSubmit = async () => {
        dispatch(register({ formData, toast }));
        setFormData({
            uname: "",
            uemail: "",
            upin: "",
            uphone: "",
            upass: "",
            ucpass: ""
        })
    }

    useEffect(() => {
        if (Object.keys(validForm).length === 0 && isSubmit) {
            finalDataSubmit()
        }
    }, [validForm])

    return (
        <>
            {/* <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer /> */}
            <div className="login_form_inner">
                <h3>Register to Login</h3>
                <form className="row login_form" id="contactForm">
                    <div className="col-md-12 form-group" style={{ marginBottom: "20px" }}>
                        <input value={formData.uname} type="text" className={`form-control ${validForm.name && "is-invalid"}`} onChange={getFormData} id="uname" name="uname" placeholder="Enter your name" />
                        <div className="invalid-feedback">
                            {validForm.name}
                        </div>
                    </div>
                    <div className="col-md-12 form-group" style={{ marginBottom: "20px" }}>
                        <input value={formData.uemail} type="text" className={`form-control ${validForm.email && "is-invalid"}`} onChange={getFormData} id="uemail" name="uemail" placeholder="Enter your email" />
                        <div className="invalid-feedback">
                            {validForm.email}
                        </div>
                    </div>
                    <div className="col-md-12 form-group" style={{ marginBottom: "20px" }}>
                        <input value={formData.upin} type="number" className={`form-control ${validForm.pin && "is-invalid"}`} onChange={getFormData} id="upin" name="upin" placeholder="Enter your PIN" />
                        <div className="invalid-feedback">
                            {validForm.pin}
                        </div>
                    </div>
                    <div className="col-md-12 form-group" style={{ marginBottom: "20px" }}>
                        <input value={formData.uphone} type="number" className={`form-control ${validForm.phone && "is-invalid"}`} onChange={getFormData} id="uphone" name="uphone" placeholder="Enter your mobile no" />
                        <div className="invalid-feedback">
                            {validForm.phone}
                        </div>
                    </div>
                    <div className="col-md-12 form-group" style={{ marginBottom: "20px" }}>
                        <input value={formData.upass} type="password" className={`form-control ${validForm.pass && "is-invalid"}`} onChange={getFormData} id="upass" name="upass" placeholder="Password" />
                        <div className="invalid-feedback">
                            {validForm.pass}
                        </div>
                    </div>
                    <div className="col-md-12 form-group" style={{ marginBottom: "20px" }}>
                        <input value={formData.ucpass} type="password" className="form-control" onChange={getFormData} id="ucpass" name="ucpass" placeholder="Confirm Password" />
                        <div className="invalid-feedback">
                            Password length must be 4-8
                        </div>
                    </div>
                    {/* <div className="col-md-12 form-group">
                        <div className="creat_account">
                            <input type="checkbox" id="f-option2" name="selector" />
                            <label for="f-option2">Keep me logged in</label>
                        </div>
                    </div> */}
                    <div className="col-md-12 form-group">
                        <button value="submit" className="primary-btn" onClick={validateFormData}>Register</button>
                        {/* <a href="#">Forgot Password?</a> */}
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegistrationForm