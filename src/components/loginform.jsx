import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
      
        {this.renderInput('username','Username')}
        {this.renderInput('password','Password',"password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

    {/* <Input
            name="username"
            value={this.state.data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          /> */}

export default LoginForm;
