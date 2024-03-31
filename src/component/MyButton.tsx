import React from 'react';

const MyButton = () =>{
    function handleClick(){
        alert('Button clicked');
    }

    return (
        <button onClick = {handleClick}>I'm a button</button>
    );
};

export default MyButton;