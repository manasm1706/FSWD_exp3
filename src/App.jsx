import React, { useState } from 'react'; 
import Counter from './Counter'; 
import UserInput from './UserInput.jsx'; 
import Greeting from './Greeting'; 

function App() { 
    const [setCoffeeName] = useState(''); 

    return ( 
        <div style={{ textAlign: "center" }}> 
            <h1>☕ Coffee Counter Machine ☕</h1> 
            <Greeting name="Coffee Lover" />
            <UserInput setCoffeeName={setCoffeeName} /> 
            <Counter /> 
        </div> 
    ); 
}  

export default App;
