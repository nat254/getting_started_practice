import React from 'react';

const user = {
    name: 'Natalie Ndetei',
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const Profile = () =>{
    return (
        <div>
            <h1>Hello {user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt = {'Photo of'+ user.name}
                style = {{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            />
        </div>
    );
};

export default Profile;