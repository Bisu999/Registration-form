import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

const Login = () => {
    const [username, usernameupdate]=useState('');
    const [password, passwordupdate]=useState('');

    const usenavigate=useNavigate();
    useEffect(() => {
        sessionStorage.clear();
    }, []);
    const ProceedLogin=(e)=>{
        e.preventDefault();
        if(validate()){
            console.log('proceed');
            fetch("http://localhost:8000/user/"+username).then((res)=>{
                return res.json();
            }).then((resp)=>{
                console.log(resp);
                if(Object.keys(resp).length===0){
                    toast.error('Please Enter valid User Name');
                }else{
                    if(resp.password===password){
                        toast.success('success');
                        sessionStorage.setItem('username',username)
                        usenavigate('/')
                    }else{
                        toast.error('Please Enter valid Ucredentials');
                    }
                }
            }).catch((err)=>{
                toast.error('Login Failed due to:'+err.message);
            });
        }

    }
    const validate=()=>{
        let result=true;
        if(username === null || username === ''){
            result=false;
            toast.warning('Please Enter User Name')
        }
        if(password === null || password === ''){
            result=false;
            toast.warning('Please Enter Password')
        }
        return result;
    }
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{marginTop:'100px'}}>
                <form onSubmit={ProceedLogin} className='container'>
                    <div className="card">
                    <div className="card-header">
                        <h2>User Login</h2>
                    </div>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>User Name<span className="errmsg">*</span></label>
                            <input value={username} onChange={e=>usernameupdate(e.target.value)} className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Password<span className="errmsg">*</span></label>
                            <input value={password} onChange={e=>passwordupdate(e.target.value)} type="password" className="form-control"></input>
                        </div>
                    </div>
                    <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link className="btn btn-success" to={'/ragister'}>Sign Up</Link>
                    </div>

                </form>

            </div>
        </div>
      );
}
 
export default Login;