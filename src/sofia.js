import React from 'react';

function Madegoal() {
    return <p>shoot on target</p>
}
function Missedgoal() {
    return <p>shoot off target</p>
}
function Sofia(){
    const x = false;
return(
    <>
    {x ? <Madegoal /> : <Missedgoal />}
</>
)
// if (x){
//     return <h1>madegoal</h1>
// }
// {
//     return <h1>missed</h1>
// }
// const Martiye = (x) =>{
//    alert(x)
// }

//return(

    //<button onClick={() => Martiye("Goal!")}>Take the shot!</button>
//)
}
export default Sofia;