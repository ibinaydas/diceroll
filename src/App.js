import React from 'react';
import RollDice from './RollDice';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div data-testid='app' className='App'>
        <RollDice count={2} />
      </div>
    );
  }
}

export default App;
