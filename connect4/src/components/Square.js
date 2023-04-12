import { useState } from 'react';

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: 0,
            button: {
                label: 'Click me',
                onClick: () =>  console.log("Button Clicked!")
            }
        };
    }

    handleButtonClick(player) {
        this.setState({ player: this.state.player = player });
    }
    
    render() {
        const { button } = this.state;
        return (
            <button onClick={button.onClick}>{button.label}</button>
        )
    }
}