import React from 'react';
import ReactDOM from 'react-dom';

export default class TestFalseObj extends React.Component {
    constructor (props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput () {
        this.textInput.current.focus();
    }

    render () {
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <input type="button" value="click to focus" onClick={this.focusTextInput} />
            </div>
        )
    }
}