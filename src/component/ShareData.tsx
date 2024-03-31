import React, { useState } from 'react';
import ParentMyButton from './ParentMyButton';

const ShareData = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    };

  return (
    <div>
        <h1>Buttons that update together</h1>
        <ParentMyButton count = {count} onClick = {handleClick}/>
        <ParentMyButton count = {count} onClick = {handleClick}/>
    </div>
  );
};

export default ShareData;