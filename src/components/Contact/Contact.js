import ContactList from "./ContactList";

function Contact({ data }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        <ContactList name="Alex" data={data}></ContactList>
      </ul>
    </>
  );
}

export default Contact;
