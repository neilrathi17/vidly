import React, { Component } from "react";

class LoginForm extends Component {
  
    state={
        account:{username:"",password:""}
    }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("lol");
  };

  handleChange=({currentTarget:input})=>
  {
    const account={...this.state.account};
    account[input.name]=input.value;
    this.setState({account})
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
            name="username"
            value={this.state.account.username}
            onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              autoFocus
              value={this.state.account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
