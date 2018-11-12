import React, { Component } from 'react';
import Header from '../containers/Header';
import Menu from '../containers/Menu';
import Content from '../containers/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
