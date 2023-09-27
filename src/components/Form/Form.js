import React, { useState } from 'react'
import formstyle from "./Form.module.css";
import { useNavigate } from 'react-router-dom';


function Form() {
    const navigate = useNavigate();
    const [valid, setValid] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        term: ""
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }))
    }

    function validateForm() {
        if (data.name.length === 0 || data.username.length === 0 || data.email.length === 0 || data.mobile.length === 0 || data.term.length === 0) {
            setError(true);
        }
        else {
            setError(false)
            setValid(true)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        validateForm()
        localStorage.setItem("data", JSON.stringify(data))
        if (valid) {
            navigate('/category')
        }
    }
    return (
        <div className={formstyle.rightsection}>
            <form action="" >
                <p className={formstyle.h1}>Super app</p>
                <p className={formstyle.h2}>Create your new account</p>
                <div >
                    <div className={formstyle.card}>
                        <input type="text" placeholder='Name' name="name" value={data.name} onChange={handleChange} />
                        <p className={formstyle.errortext}>{error && data.name.length <= 0 ? "Field is required" : ""}</p>
                    </div>
                </div>
                <div >
                    <div className={formstyle.card}>
                        <input type='text' placeholder='UserName' name="username" value={data.username} onChange={handleChange} />
                        <p className={formstyle.errortext}>{error && data.username.length <= 0 ? "Field is required" : ""}</p>
                    </div>
                </div>
                <div >
                    <div className={formstyle.card}>
                        <input type='email' placeholder='Email' name="email" value={data.email} onChange={handleChange} />
                        <p className={formstyle.errortext}>{error && data.email.length <= 0 ? "Field is required" : ""}</p>
                    </div>
                </div>
                <div >
                    <div className={formstyle.card}>
                        <input type='mobile' placeholder='Mobile' name="mobile" value={data.mobile} onChange={handleChange} minLength="10" maxLength="10" />
                        <p className={formstyle.errortext}>{error && data.mobile.length <= 0 ? "Field is required" : ""}</p>
                    </div>
                </div>
                <div className={formstyle.term} >
                    <input type='checkbox' name="term" value="checked" onChange={handleChange} />
                    <label htmlFor="">Share my registration data with Superapp </label>
                    <div>
                        <p className={formstyle.errortext}>{error && data.term.length === 0 ? "Check this box if you want to proceed" : ""}</p>
                    </div>
                </div>
                <div className={formstyle.btncnf}>
                    <button onClick={handleSubmit} >SIGN UP</button>
                </div>
                <p className={formstyle.p}>By clicking on Sign up. you agree to Superapp <strong style={{ color: "#72DB73" }}>Terms and <br /> Conditions of Use</strong></p>
                <p className={formstyle.p}>To learn more about how Superapp collects, uses, shares and <br /> protects your personal data please head Superapp <strong style={{ color: "#72DB73" }}>Privacy <br /> Policy</strong></p>
            </form>
        </div >
    )
}

export default Form