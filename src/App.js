import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AddForm from "./components/AddForm";
import SmurfDisplay from "./components/SmurfDisplay";

import { reducer } from "./reducers/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand">Smurf Village Database</a>
          </nav>
          <main>
            <AddForm />
            <SmurfDisplay dispatch={store.dispatch}/>
          </main>
        </div>
      </Provider>
    );
  }
}
export default App;

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.