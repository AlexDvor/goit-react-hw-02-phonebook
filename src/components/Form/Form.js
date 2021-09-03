// import PropTypes from 'prop-types';
import { Component } from "react";

class Form extends Component {

    state = {
        name: '',
        id: ''
    }

    render() {
        return (
        <>
            <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
        </>
        )
    }

}

export default Form;