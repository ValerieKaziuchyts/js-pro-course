import React from 'react';

class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
    }

    increaseVariable = () => {
        this.setState((state) => {
            return {number: state.number + 1}
        });
    }

    resetVariable = () => {
        this.setState({
            number: 0,
        });
    }

    decreaseVariable = () => {
        this.setState((state) => {
            return {number: state.number - 1}
        });
    }

    render() {
        return (
            <div className="counterBorderBlock">
                <div className="numberCounterBlock">
                    {this.state.number}
                </div>
                <div className="horizontalOptionBlock">
                    <button className="plusOption" onClick={this.increaseVariable}>
                        <img src="./assets/img/whh_plus.png" />
                    </button>
                    <button className="refreshOption" onClick={this.resetVariable}>
                        <img src="./assets/img/dashicons_update-alt.png" />
                    </button>
                    <button className="minusOption" onClick={this.decreaseVariable}>
                        <img src="./assets/img/fa-solid_minus.png" />
                    </button>
                </div>
            </div>
        );
    }
}

export {Clicker};
