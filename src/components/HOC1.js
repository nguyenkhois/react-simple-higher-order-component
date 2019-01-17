import React, { Component } from 'react';

// STEP 1
function hoc(WrappedComponent) {
    return function (props) {
        return (
            <div>
                <WrappedComponent {...props}>
                    {props.text}
                    {props.children.toUpperCase()}
                </WrappedComponent>
            </div>
            
        );
    }
}
/* const hoc = (WrappedComponent) => (props) => (
    <WrappedComponent {...props}>
        {props.children.toUpperCase()}
    </WrappedComponent>
); */

// STEP 2
function name(props) {
    return (
        <div>
            {props.text}
            {props.children}
        </div>
    );
}

// STEP 3
const UpperCaseName = hoc(name);

// Step 4
class HOC1 extends Component {
    render(){
        return(
            <div>
                <UpperCaseName text={'Classic props'}>
                    Props.children content
                </UpperCaseName>
            </div>
        );
    }
}

export default HOC1;