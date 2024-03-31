import React from 'react';

const ParentMyButton = ({count, onClick}: CounterProps) => { 
  return (
    <div>
        <button onClick = {onClick}>You have clicked me {count} times</button>
    </div>
  );
};

export default ParentMyButton;