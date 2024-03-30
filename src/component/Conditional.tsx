import React from 'react';

const Conditional = () => {
    let isGood = true;
    if (isGood) {
        return <div>Good</div>;
    } else{
        return <div>Bad</div>;
    };
};

export default Conditional;