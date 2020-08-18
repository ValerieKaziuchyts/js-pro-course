import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Home } from './Home.jsx';
import { Clickers } from './Clickers.jsx';
import { AddButton } from './AddButton.jsx';
import { Emoji } from './Emoji.jsx';
import { Weather } from './Weather.jsx';
import { NotFound } from './NotFound.jsx';

const clickersArray = [
  { id: 1, component: 'Clicker' },
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
        <header>
          <Link to="/" className="headerLinks">Home</Link>
          <Link to="/clicker" className="headerLinks">Clicker</Link>
          <img className="logo" src="./assets/img/Logo.png" />
          <Link to="/emoji" className="headerLinks">Emoji</Link>
          <Link to="/weather" className="headerLinks">Weather</Link>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/clicker">
            <AddButton onClick={this.addClicker} />
            <Clickers clickersArray={this.state.clickersArray} />
          </Route>
          <Route path="/emoji">
            <Emoji />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </>
    )
  }
}

export { App };
