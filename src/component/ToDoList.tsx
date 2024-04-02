import React from 'react';

const ToDoList = () => {
    return (
        <div>
            <h1>Hedy Lamarr's Todos</h1>

            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
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