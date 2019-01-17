import React, { Component } from 'react';

function hoc(WrappedComponent) {
    class withHOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                timestamp: Date.now()
            };
        }

        render() {
            return (
                <WrappedComponent state={this.state}>
                    {this.props.children.toUpperCase()}
                </WrappedComponent>
            );
        }
    }

    return withHOC;
}

function inputText(props) {
    return (
        <div>
            {props.children}
            {props.state.timestamp}
        </div>
    );
}

const UpperCaseText = hoc(inputText);

class HOC2 extends Component {
    render() {
        return (
            <div>
                <UpperCaseText>
                    hoc2 text
                </UpperCaseText>
            </div>
        );
    }
}

export default HOC2;