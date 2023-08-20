import React from "react";

function Form() {
    const data={name:"",email:"",password:""}
  return (
    <form className="container">
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div>
        <input type="text" placeholder="Enter Your Name" name="name"></input>
      </div>
      <div>
        <input type="text" placeholder="Enter Your Email" name="email"></input>
      </div>
      <div>
        <input type="text" placeholder="Enter Your Password" name="password"></input>
      </div>
      <div>
        <button type="submit">Submit Here</button>
      </div>
    </form>
  )
}

export default Form