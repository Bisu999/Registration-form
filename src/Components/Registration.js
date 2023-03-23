import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
const Ragistration = () => {
    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[number,numberchange]=useState("");
    const[password,passwordchange]=useState("");
    const navigate=useNavigate();
    const InValidate=()=>{
        let isproceed=true;
        let errormessage='Please enter the value in'
        if(id === null || id === ''){
            isproceed=false;
            errormessage +=' Username';
        }
        if(name === null || name === ''){
            isproceed=false;
            errormessage +=' FullName';
        }
        if(number === null || number === ''){
            isproceed=false;
            errormessage +=' Number';
        }
        if(password === null || password === ''){
            isproceed=false;
            errormessage +=' Password';
        }
        if(!isproceed){
            toast.warning(errormessage);
        }
        return isproceed;
    }

    const handelsubmit=(e)=>{
        if(InValidate()){
        e.preventDefault();
        let regobj={id,name,number,password};
        //console.log(regobj);
        fetch("http://localhost:8000/user",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(regobj)
        }).then((_res)=>{
                toast.success('Registered Successfully')
                navigate('/login')
        }).catch((err)=>{
            toast.error('Failled:'+err.message);
        });
    }
    }
    return ( 
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handelsubmit}>
                    <div className="card">
                        <div className="card-header">
                           <h1>User Register</h1> 
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name<span className="errmsg">*</span></label>
                                        <input value={id} onChange={e=>idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name<span className="errmsg">*</span></label>
                                        <input value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone Number<span className="errmsg">*</span></label>
                                        <input value={number} onChange={e=>numberchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password<span className="errmsg">*</span></label>
                                        <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer"> 
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </div>

                </form>
            </div>
            
        </div>
     );
}
 
export default Ragistration;