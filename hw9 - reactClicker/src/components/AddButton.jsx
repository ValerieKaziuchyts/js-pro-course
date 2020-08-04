import React from 'react';

class AddButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnclick = () => {
        this.props.onClick();
    }

    render() {
        return (
            <div className="buttonContainer">
                <button className="addComponentBtn" onClick={this.handleOnclick}>Add Clicker</button>
            </div>
        );
    }
}

export {AddButton};
