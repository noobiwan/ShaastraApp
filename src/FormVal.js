import React, { Component } from 'react'
class FormVal extends Component{
  state={
    name:"",
    email:"",
    password:"",
    mobileNumber:"",
    gender:"",
    nameError:"",
    emailError:"",
    passwordError:"",
    mobileNumberError:"",
    genderError:"",
  }
initialState=this.state;
checkForErr = () =>{
let nameError="";
let emailError="";
let passwordError="";
let mobileNumberError="";
let genderError="";
if(this.state.password.length<5){
  passwordError="Password should be at least 5 characters long";
}
if(!this.state.name){
  nameError="Name cannot be blank";
}
if(!this.state.email.includes('@'))
{
  emailError="Invalid Email";
}
if(this.state.mobileNumber.length!==10)
{
  mobileNumberError="Enter a 10 digit number";
}
if(!this.state.gender){
  genderError="Please Select a Gender";
}
if(passwordError || emailError || nameError || mobileNumberError ||genderError){
  this.setState({nameError,passwordError,emailError,mobileNumberError,genderError});
  return true;
}
return false;
}
handleSubmit= (e) =>{
const err=this.checkForErr();
if(!err){
  console.log(this.state);
  this.setState(this.initialState);
}
else{
  e.preventDefault();
}
}
handleChange= (e) =>{
this.setState({
  [e.target.name]: e.target.value
});
}
render(){
return (
  <div className="formVal">
    <h2>Create Account</h2><br />
    <form onSubmit={this.handleSubmit} id="form">
        <label htmlFor="name">Name: </label><br />
        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} /><br />
        <div className="error">{this.state.nameError}</div><br />
        <label htmlFor="email">Email: </label><br />
        <input type="email" name="email" placeholder="something@example.com" onChange={this.handleChange} /><br />
        <div className="error">{this.state.emailError}</div><br />
        <label htmlFor="password">Password: </label><br />
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} /><br />
        <div className="error">{this.state.passwordError}</div><br />
        <label htmlFor="mobileNumber">Mobile Number(+91):</label><br />
        <input type="number" name="mobileNumber" placeholder="Mobile Number" onChange={this.handleChange} /><br />
        <div className="error">{this.state.mobileNumberError}</div><br />
        <label htmlFor="gender">Gender</label><br/>
        <input type="radio" name="gender" value="male" onChange={this.handleChange}/>Male<br/>
        <input type="radio" name="gender" value="female" onChange={this.handleChange}/>Female<br/>
        <input type="radio" name="gender" value="other" onChange={this.handleChange}/>Other<br/>
        <div className="error">{this.state.genderError}</div><br />
        <button className="button">Submit</button>
    </form>
  </div>
);
}
}

export default FormVal