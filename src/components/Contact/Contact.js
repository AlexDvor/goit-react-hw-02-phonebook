import ContactList from "./ContactList";

function Contact({ data }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        <ContactList data={data}></ContactList>
      </ul>
    </>
  );
}

export default Contact;
