import React from 'react';

const Conditional = () => {
    // let isGood = true;
    // if (isGood) {
    //     return <div>Good</div>;
    // } else{
    //     return <div>Bad</div>;
    // };
    // let isGood = true;
    // return(
    //    <div>
    //     {isGood? (<p>Good</p>) : (<p>Bad</p>)}
    //    </div>
    // );
    let isGood = false;
    return(
        <div>
            {isGood && <p>Good</p>}
            {!isGood && <p>Bad</p>}
        </div>
    );
};

export default Conditional;