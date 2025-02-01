import React from 'react'
import './swiggy.css'



function Swiggy() {
  return (
    <div>
      <div class="one">
        <nav class="navigate">
        
            <header className="head">
                {/* <img alt="logo" src="src/swiggywhite.png"/> */}
                <h1 className="h1">Swiggy</h1>
                <h3 className="h3" >Swiggy Corporate</h3>
                <h3 className="h3">Partner with us</h3>
                <button className="appbtn">Get the App ↗</button>
                <button className="signbtn">Signin</button>
            </header>
            <h1 className="hce">Order food & groceries. Discover best restaurants. Swiggy it!</h1>
            <form className="select">
    
            <select>
                <option>Enter your delivery location</option>
                <option>Use My Current Location</option>
            </select>
            </form>
        </nav>
     </div>
    </div>
  )
}

export default Swiggy
