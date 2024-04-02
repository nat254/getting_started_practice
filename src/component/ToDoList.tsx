import React from 'react';

const properties = {
    name:'Hedy Lamarr',
    theme:{
        backgroundColor: 'lightblue',
        color: 'brown'
    },
    photo: 'https://i.imgur.com/yXOvdOSs.jpg',
   
};

const ToDoList = () => {
    return (
        <div style = {properties.theme}>
            <h1>{properties.name}'s Todos</h1>

            <img
                src={properties.photo}
                alt={properties.name}
                className="photo"
            />

            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>
        </div>
    );
};

export default ToDoList;