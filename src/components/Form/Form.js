// import PropTypes from 'prop-types';
import { Component } from "react";
import Button from "../Button";

class Form extends Component {

    state = {
        name: '',
        id: ''
    }

    render() {
        return (
        <>  
            <div>
                 <h2>Phonebook</h2>
                 <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    />
                    <Button text='Add contact'></Button>
             </div>
        </>
        )
    }

}

export default Form;