import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm  extends Form {
    state = {
        data: { username: "", password: "" ,name:""},
        errors: {},
      };
    
      schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().min(5).required().label("Password"),
        name:Joi.string().required().label("Name")
      };
    
      doSubmit = () => {
        console.log("submitted");
      };
    render() { 
        return (
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
      
        {this.renderInput('username','Username',"email")}
        {this.renderInput('password','Password',"password")}
        {this.renderInput('name','Name',)}
          

          {this.renderButton("Register")}
        </form>
            </div>
        );
    }
}
 
export default RegisterForm;