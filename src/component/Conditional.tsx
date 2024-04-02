import React from 'react';

function Food({name, isGood}: any) {
    return(
        <li className = "item">
            {name} {isGood && '✔'} {!isGood && '❌'}
        </li>
    );
};

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
    
    // let isGood = false;
    // return(
    //     <div>
    //         {isGood && <p>Good</p>}
    //         {!isGood && <p>Bad</p>}
    //     </div>
    // );

    return(
        <div>
            <h1> Healthy and Unhealthy Food</h1>
            <ul>
               <Food 
                name = "Apple"
                isGood = {true}
                />

                <Food
                name = "Pizza"
                isGood = {false}
                />

                <Food
                name = "Banana"
                isGood = {true}
                />

                <Food
                name = "Burger"
                isGood = {false}
                />
            </ul>
        </div>
    )
};

export default Conditional;