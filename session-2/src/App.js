import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from  "./redux/store";
import Header from "./components/Nav";

function App () {
  return ( 
    <>
      <Provider store={store}>
          <Header />
      </Provider>
    </>
  )
}
export default App; 