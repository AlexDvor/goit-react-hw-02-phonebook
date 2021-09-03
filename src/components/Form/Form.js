// import PropTypes from 'prop-types';
import { Component } from "react";
import Button from "../Button";

class Form extends Component {

    state = {
        name: ''
    }

    onChangeState = e => {
        const targetValue = e.target.value; 
        this.setState({
         name: targetValue,
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const { data } = this.props;
        const contactName = this.state;
        data(contactName);
        this.resetForm();
    }


    resetForm = () => {
        this.setState({
         name:'',
  })
}


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
                    onChange = {this.onChangeState}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    />
                    <Button text='Add contact' onS/>
                    </form>
             </div>
        </>
        )
    }
}

export default Form;