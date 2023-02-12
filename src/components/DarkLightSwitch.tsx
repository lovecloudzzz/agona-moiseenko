import React, { Component } from 'react';
import '../styles/App.css'

interface DarkLightSwitchState {
    darkSwitch: boolean;
}

class DarkLightSwitch extends Component<{}, DarkLightSwitchState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            darkSwitch: false
        };
    }

    toggleDarkLightSwitch = () => {
        this.setState(prevState => ({
            darkSwitch: !prevState.darkSwitch
        }));
    };

    render() {
        return (
            <div className={`App ${this.state.darkSwitch ? 'dark-switch' : 'light-switch'}`}>
                <button className={'MyBtn'} onClick={this.toggleDarkLightSwitch}>Toggle Dark/Light Background</button>
            </div>
        );
    }
}

export default DarkLightSwitch;