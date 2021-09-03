import { Container } from "./components/Container/Container";
import { Component } from "react";
import Form from "./components/Form";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }



  render() {
    return (
      <Container>
        <Form></Form>
        <Contact></Contact>
      </Container>
    );
  }
}

export default App;
