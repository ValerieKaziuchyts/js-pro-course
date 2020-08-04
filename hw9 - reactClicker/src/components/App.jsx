import React from 'react';
import { Clickers } from './Clicker.jsx';
import { AddButton } from './AddButton.jsx';

const clickersArray = [
  {id: 1, component: 'Clicker'}
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickersArray: [...clickersArray],
    }
  }

  addClicker = () => {
    this.setState((prevState) => ({
      clickersArray: [...prevState.clickersArray, {id: prevState.clickersArray[prevState.clickersArray.length - 1].id + 1, component: 'Clicker'}]
    }))
  }

  render() {
    return (
    <>
      <AddButton onClick={this.addClicker}/>
      <Clickers clickersArray={this.state.clickersArray} />
    </>
    )
  }
}

export { App };
