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

  handleFilterByName = (e) => {
    const value = e.target.value;
    this.setState({
      filter: value,
    });
  };

  render() {
    // console.log(this.state.contacts);
    const { contacts, filter } = this.state;
    const filterByName = contacts.filter((item) => item.name.includes(filter));

    return (
      <Container>
        <Form getData={this.getData} />
        <p>Find Contacts by name</p>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleFilterByName}
        ></input>
        <Contact data={filterByName}></Contact>
      </Container>
    );
  }
}

export default App;
