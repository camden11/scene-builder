import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../configureStore";
import ResponseForm from "./ResponseForm";
import Results from "./results/Results";
import { Container, GridParent } from "../style";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container className="App">
          <GridParent>
            <Results />
            <ResponseForm />
          </GridParent>
        </Container>
      </Provider>
    );
  }
}

export default App;
