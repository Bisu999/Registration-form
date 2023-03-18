import { useEffect } from "react";
import React from "react";
import Tasks from "./Tasks";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
    const usenavigate=useNavigate();
    useEffect(()=>{
        let username=sessionStorage.getItem('username');
        if(username===''|| username===null){
            usenavigate('/login');
        }
    },[]);
    
    return ( 
        <div className="row">
    <div className="header">
        <Link to={'/'}>Home</Link>
        <Link style={{float:'right',}} to={'/login'}>Logout</Link>
      <h1 className="text-center">  Welcome to Cognisite Thechnology</h1>
      
    </div>

    <div>
       
        <Tasks></Tasks>
    </div>
    </div>
     ) ;
}
 
export default Home;