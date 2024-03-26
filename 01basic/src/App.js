import React from "react"


function Header() {
  const handleClick=()=>{
    console.log('Please click on the button')
  }
  return (
    <div>
      <button onClick={handleClick}>Click on me</button>
    </div>
   
  );
}

export default Header;
