import React, { useState } from 'react'

const Pracice = () => {
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting(prev=>{
      return{...prev , place:"fdsfs"}
    });
    // setGreeting(prev => { 
    //     return {...prev, place: "World-Wide Web"} 
    // }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 

export default Pracice