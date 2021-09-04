import { Container } from "./components/Container/Container";
import { Component } from "react";
import Form from "./components/Form";
import Contact from "./components/Contact";
import Filter from "./components/Filter";

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

  handleFilterByName = (e) => {
    const value = e.target.value;
    this.setState({
      filter: value,
    });
  };

  renderListName = ({ contacts, filter }) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    // console.log(this.state.contacts);
    const { contacts, filter } = this.state;

    // const filterByName = contacts.filter((item) =>
    //   item.name.toLowerCase().includes(filter.toLowerCase())
    // );

    return (
      <Container>
        <h2>Phonebook</h2>
        <Form getData={this.getData} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterByName} />
        <Contact data={this.renderListName(this.state)}></Contact>
      </Container>
    );
  }
}

export default App;
