import Form from "./components/Form";
import { Container } from "./components/Container/Container";
import { Component } from "react";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }



  render() {
    return (
      <Container>
        <Form></Form>
      </Container>
    );
  }
}

export default App;
