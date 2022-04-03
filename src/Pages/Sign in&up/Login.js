import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login (){
    let navigate =useNavigate();
 
    return (
     
       <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-6 d-none d-md-flex bg-image"></div>
                
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">
                       
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-4">Welcome Again!</h3>
                                    <p class="text-muted mb-4">Enter your Email and Password</p>
                                    <form>
                                        <div class="form-group mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                            <label for="customCheck1" class="custom-control-label">Remember password</label>
                                        </div>
                                        <button onClick={()=>{
                                            navigate("/");
                                        }} 
                                        type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                        <div class="text-center d-flex justify-content-between mt-4"><p>Cheesy <a href="#" class="font-italic text-muted"> 
                                                <u>Omar</u></a></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
)
}


export default Login


