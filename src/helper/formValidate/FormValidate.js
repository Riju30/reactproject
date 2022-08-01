export const validate = (formdata)=>{
    const errors={}
    const {uname,uemail,upin,uphone,upass,ucpass}=formdata

    let nameRegex = /^[A-Z]([a-zA-Z_ ]){2,20}$/;
    let pinRegex = /^[0-9]([0-9]){6}$/
    let phnoRegex = /^[6-9]([0-9]){9}$/
    let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    let passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if(!nameRegex.test(uname)){
        errors.name="Name first character must be Capital and name length 3 to 20 and can take only character"
    }
    if(!emailRegex.test(uemail)){
        errors.email="Invalid Email"
    }
    if(!pinRegex.test(upin)){
        errors.pin="Invalid PIN"
    }
    if(!phnoRegex.test(uphone)){
        errors.phone="Invalid Mobile No"
    }
    if(upass===ucpass){
        if(!passRegex.test(upass)){
            errors.pass="Password must have at least a number, and at least a special character and lenght 6-16"
        }
    }else{
        errors.pass="Password and Confirm password mismatch"
    }

    return errors

}