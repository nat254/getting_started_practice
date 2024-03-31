import React from 'react';
import { useState } from 'react';

const MyButton = () =>{

    const[count, setCount]= useState(0);

    function handleClick(){
        // alert('Button clicked');
        setCount(count + 1);
    }

    return (
        <button onClick = {handleClick}>You have clicked me {count} times</button>
    );
};

export default MyButton;