import React, { Component } from 'react';

function hoc(WrappedComponent) {
    class withHOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                timestamp: Date.now()
            };
        }

        getNewTime() {
            this.setState({ timestamp: Date.now() });
        }

        render() {
            return (
                <WrappedComponent state={this.state} fnGetNewTime={()=>this.getNewTime()}>
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

            <button type="button" onClick={()=>props.fnGetNewTime()}>Get new time</button>
        </div>
    );
}

const UpperCaseText = hoc(inputText);

class HOC3 extends Component {
    render() {
        return (
            <div>
                <UpperCaseText>
                    hoc3 text content
                </UpperCaseText>
            </div>
        );
    }
}

export default HOC3;