import React, { useState } from 'react'
import {Link} from 'react-router-dom'              //is se hi Link vala chlega
export default function Signup() {
  const [credentials, setcredentials]= useState({name:"", email:"", password:"", geolocation:""}) 
  const handleSubmit= async(e)=>{
      e.preventDefault();                      //It is a synthetic event
      try {
        console.log(JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation
      }))
          const response = await fetch("http://localhost:5000/api/creatuser", {                     //yha se fetch kro
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({                                     //jo data arha use string ki form me store
                  name: credentials.name,
                  email: credentials.email,
                  password: credentials.password,
                  location: credentials.geolocation
              })
          });
      
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
      
          const json = await response.json();
          console.log(json);
      
          if (json.success) {
              alert("Successfully signed up");
          } else {
              alert("Failed to sign up. Please try again.");
          }
      } catch (error) {
          console.error('Error:', error);
          alert("An error occurred. Please try again.");
      }
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})  ;      //jese hi usestate vala email activate hoga event activate ho jayega or sidha onChange event call krdega
  }
  return (
    <>
      <div className="container">
        <form onSubmit= {handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label> 
           <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>               {/* jb b kush enter krenge to ye function chll pdega */}

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control"name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp"onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password}id="exampleInputPassword1"onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="eexampleInputPassword1" className="form-label">Address</label>
            <input type="text" className="form-control" name='geolocation' value={credentials.geolocation}id="eexampleInputPassword1" onChange={onChange}/>   
          </div>

          <button type="submit" className=" m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 btn btn-danger"> Already a user then Login</Link>
        </form >
      </div>
    
    </>
  )
}
