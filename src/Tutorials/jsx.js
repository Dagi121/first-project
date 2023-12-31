import React from 'react';
const Welcome = () => {
    // return (
    // <div>
    //     <h1>This is about jsx</h1>
    // </div>
    // )

        //Without jsx

    return React.createElement(
        'div', 
        {id: "Natty", className: "Bini"}, "dagim sime", React.createElement('h1', null, "This is about jsx"))
}
 
export default Welcome;