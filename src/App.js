import { Container } from "./components/Container/Container";
import { Component } from "react";
import Form from "./components/Form";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }


  getDataName = (data) => {
    console.log('appData',data)
    
  }

  render() {
  
    return (
      <Container>
        <Form data={this.getDataName}></Form>
        <Contact title='Contacts'></Contact>
      </Container>
    );
  }
}

export default App;
