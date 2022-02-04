
// import { useEffect, useState } from 'react';
// import './App.css';

// const funcionparasaludar = (dato) => {
//   return (
//    <> 
//    <h4> WELCOME {dato}</h4>
//    </> 
//   )
// }


// function App() {
//     const [dato, setDato] = useState('')

//     const [agregar,setAgregar] = useState('')
//     useEffect(() => funcionparasaludar(dato))

//   return (
//     < >
//     <h1> Hello User APP</h1>
//     <input type='text' placeholder='enter your name' value={dato} onChange={(e) => setDato(e.target.value)}></input>
//     <button type='button' onClick={ ()=>{ 
    
      
//       funcionparasaludar(setAgregar([agregar]))
//       }}>Great me!</button>

//     <p>{dato}</p>

//     <div className='card'>

// <h2>
//   please enter you name 
// </h2>
//     </div>
//     </> 
//   );
// }

// export default App;
import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [greet, setGreet] = useState("");
  const [name, setName] = useState("");
  
  useEffect(() => {
    
    setGreet(name);
  }, []);
  const hellofunc = () => {

    alert('thanks for visiting me ')
  }
  const globalfunction = () => {
    setGreet(name === "" ? 'no puedes ingresar un usuario vacio ':`Welcome ${name}  ` )

    // alert('thanks for visiting me ')
  }

  return (
    <div className="App">
      <h1>Hello User App</h1>
      <form className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        ></input>
        <button type="button" onClick={() => {globalfunction()
           alert('thanks for visiting me ')} } >
          Greet Me!!
        </button>

        <p>{ greet ?  greet :'please enter your name'  }</p>
      </form>
    </div>
  );
}

  export default App;