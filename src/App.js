import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Par } from './Par';

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

  setRoute = () => {
    const {selected} = this.state;
    if (selected === 1) return (<Par number={selected}/>);
    if (selected === 2) return (<Par number={selected}/>);
    if (selected === 3) return (<Par number={selected}/>);
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
              <Route exact path="/" render={() => this.setRoute}/>
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
