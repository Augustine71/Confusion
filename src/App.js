
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import './App.css';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';

const store = ConfigureStore();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    </Provider>
      
    );
  }

}
export default App;
