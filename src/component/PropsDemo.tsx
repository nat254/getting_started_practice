import React from 'react';
import { getImageUrl } from '../utils';


function Card({ children }: React.PropsWithChildren<{}> ) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

function Avatar({ person, size}: any) {
    return (
        <img 
            className = "avatar"
            src = {getImageUrl(person)}
            alt = {person.name}
            width = {size}
            height = {size}
        />
    );
    
};

export default function PropsDemo(){
    return (
        <Card>
            <Avatar
                size = {100}
                person = {{
                    name: 'Katsuko Saruhashi',
                    imageId: 'Yfe0qp2'
                }}
            />
        </Card>
    );
};

