import React from "react";
 
import Camera from "./Camera";
import Login from './Login'

import './index.css'; 
export default function App() {
    
 
  return (
    <div Name="App">
      <Camera />
      
      <div Name="form signup">
            <div Name="form-content">
                <header>Signup</header>
                <form action="#">
                    <div Name="field input-field">
                        <input type="text" placeholder="Name" Name="input"/>
                    </div>
                    <div Name="field input-field">
                        <input type="text" placeholder="Registration No." Name="input"/>
                    </div>
                    <div Name="field input-field">
                        <input type="text" placeholder="Address" Name="input"/>
                    </div>
                    <div Name="field input-field">
                        <input type="number" placeholder="Phone number" Name="input"/>
                    </div>
                    <div>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                    </div>
                    <div Name="field input-field">
                        <input type="email" placeholder="VIT Email" Name="input"/>
                    </div>
                    
                    <div Name="field button-field">
                        <a href="file:///C:/Users/Riya%20Bansal/Documents/webprojects/vtredz/newindex.html">
                        <button>Submit</button>
                        </a>
                    </div>
                    
                </form>
                
            </div>
            
            
        </div>
    </div>
    
  );
}