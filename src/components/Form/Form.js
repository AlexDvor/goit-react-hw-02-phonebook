// import PropTypes from 'prop-types';
import { Component } from "react";
import Button from "../Button";

class Form extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      name: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { data } = this.props;
    const contactName = this.state;
    data(contactName);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.onSubmitForm}>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              placeholder="Name"
            />
            <Button text="Add contact" onS />
          </form>
        </div>
      </>
    );
  }
}

export default Form;
