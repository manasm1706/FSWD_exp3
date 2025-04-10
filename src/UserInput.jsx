import React, { useState } from 'react'; 

const UserInput = ({ setCoffeeName }) => { 
    const [inputValue, setInputValue] = useState(''); 

    const handleChange = (e) => { 
        setInputValue(e.target.value);
    } 

    return ( 
        <div> 
            <label>Enter your name: </label> 
            <input type="text" value={inputValue} onChange={handleChange} /> 
            <p> Greetings {inputValue}</p> 
        </div> 
    ); 
}  

export default UserInput;
