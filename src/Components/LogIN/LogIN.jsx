import React, { Component } from "react"
import './login.css'
import { Button, FormGroup, Label, Input } from "reactstrap";

export class LogIN extends Component {
  render() {
    return (
      <div style={{ paddingTop: 100, paddingLeft: 100, paddingRight: 100,minHeight:400 }}>
        <div className="bb">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter your email"
              type="email"
              // style={{backgroundColor:'skyblue',color:'white',}}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="Password"
              name="password"
              placeholder="Enter your password"
              type="password"
              // style={{backgroundColor:'skyblue',color:'white',}}
            />
          </FormGroup>
          <Button style={{alignItems:'end',justifyContent:'end',backgroundColor:"green"}} color="primary">Log In</Button>
        </div>
      </div>
    );
  }
}

export default LogIN;
