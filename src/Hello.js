import React from 'react';
import "./Hello.css"
const Hello = (props) => {
    return (<>
        <h1>Hello {props.name} {props.age}!<br/></h1>
    </>);
}
export default Hello;