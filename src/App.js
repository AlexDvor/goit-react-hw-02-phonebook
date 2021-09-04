import { Container } from "./components/Container/Container";
import { Component } from "react";
import Form from "./components/Form";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  getData = (data) => {
    const newContacts = {
      name: data.name,
      id: data.id,
      number: data.number,
    };
    this.updateContacts(newContacts);
  };

  updateContacts = (newData) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newData],
    }));
  };

  render() {
    console.log(this.state.contacts);
    const { contacts } = this.state;
    return (
      <Container>
        <Form getData={this.getData}></Form>
        <Contact data={contacts}></Contact>
      </Container>
    );
  }
}

export default App;
