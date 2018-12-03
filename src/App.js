import React, { Component } from 'react';
import "./resources/styles.css";
import Header from './components/header_footer/header';
import Featured from './components/featured';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ background: 'cornflowerblue' }}>
        <Header></Header>
        <Featured />
      </div>
    );
  }
}

export default App;
