import ContactList from "./ContactList";

function Contact({title}) {
    return (
        <>
            <h2>{title}</h2>
            <ul><ContactList name='Alex'></ContactList></ul>
        </>
    )
}

export default Contact;