import React from 'react';

function Profile() {
    return (
        <div>
        <img 
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katy"
        />
        </div>
    );
    
};

const Gallery = () => {
  return (
    <div>
        <h1>Gallery</h1>
    <Profile />
    <Profile />
    <Profile />
    </div>
  );
};

export default Gallery;