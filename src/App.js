import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

class App extends Component {
  state = {
    selected: 1,
    choices: [1, 2, 3]
  };

  clickHandle = (event) => {
    const value = event.target.value;
    event.preventDefault();
    this.setState({
      selected: value
    })
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <header className="App-header">
            {
              this.state.choices.map((choice) => (
                <button
                  value={choice}
                  onClick={(event) => this.clickHandle(event)}
                >
                  button {choice}
                </button>
              ))
            }
          </header>

          <div>{this.state.selected}</div>

          <div className="pageBody">
            <Switch>
              <Route exact path="/" render={() => (
                <p>1</p>
              )}/>
              <Route exact path="/2" render={() => (
                <p>2</p>
              )}/>
              <Route exact path="/3" render={() => (
                <p>3</p>
              )}/>
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
