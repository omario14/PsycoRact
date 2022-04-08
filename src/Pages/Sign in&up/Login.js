
import './Login.css';

import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {
  
  Navigate
} from 'react-router-dom';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  class Login extends Component {
    constructor(props) {
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.state = {
        email: "",
        password: "",
        loading: false,
      };
    }
    onChangeEmail(e) {
      this.setState({
        email: e.target.value,
      });
    }
    onChangePassword(e) {
      this.setState({
        password: e.target.value,
      });
    }
    handleLogin(e) {
      e.preventDefault();
      this.setState({
        loading: true,
      });
      this.form.validateAll();
      const { dispatch, history } = this.props;
      if (this.checkBtn.context._errors.length === 0) {
        let isMounted = true;
        dispatch(login(this.state.email, this.state.password))
          .then(() => {
            if(isMounted ){
            history.push("/dashboardpsy");
            window.location.reload();}
          })
          .catch(() => {
            this.setState({
              loading: false
            });
          });
          return isMounted = false;
      } else {
        this.setState({
          loading: false,
        });
      }
    }
render() {
    const { isLoggedIn, message } = this.props;
    if (isLoggedIn) {
      return <Navigate  to="/dashboardpsy" />;
    }

  
    return (
     
       <div className="maincontainer">
        <div className="container-fluid">
            <div className="row no-gutter">
               
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
                
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                       
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4">Welcome Again!</h3>
                                    <p className="text-muted mb-4">Enter your Email and Password</p>
                                    <Form onSubmit={this.handleLogin} 
                          ref={c => {
                            this.form = c;
                          }}>
                              <label htmlFor="email">Email</label>
                                        <div className="form-group mb-3">
                                            <Input id="inputEmail" type="email" placeholder="Email address"  value={this.state.email}
                              onChange={this.onChangeEmail}
                              validations={[required]}
                               className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <label htmlFor="password" >Password</label>
                                        <div className="form-group mb-3">
                                            <Input id="inputPassword" type="password" placeholder="Password"  value={this.state.password}
                              onChange={this.onChangePassword}
                              validations={[required]}
                               className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox"  className="custom-control-input" />
                                            <label htmlFor="customCheck1" className="custom-control-label">Remember password</label>
                                        </div>
                                        <button disabled={this.state.loading} 
                                        type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                                             {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                              )}
                              <span>Sign in</span></button>
                                        
                                                {message && (
                            <div className="form-group">
                              <div className="alert alert-danger" role="alert">
                                {message}
                              </div>
                            </div>
                          )}
                          <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                              this.checkBtn = c;
                            }}
                          />
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
);
}

}


function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
      isLoggedIn,
      message
    };
  }
  export default connect(mapStateToProps)(Login);






