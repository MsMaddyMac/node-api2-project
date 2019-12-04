import React from 'react'
import "./App.css";
// // Redux imports
import { applyMiddleware, createStore } from 'redux';
// react-redux imports
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// component imports
import reducer from '../reducers';
import PostCard from './PostCard';





const store = createStore(
  reducer, 
  (applyMiddleware(thunk, logger))
);

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>See the Posts!</h1>
        </header>
        <div className="container"> 
          <PostCard />
        </div>
      </div>
    </Provider>
  )
}


export default App;

