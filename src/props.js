import React from 'react';
export const Fullname = (props) => {
    return (
    <div>
        <h1>
            {props.name} Sime {props.age}
        </h1>
        {props.children}
    </div>
    )
    
}