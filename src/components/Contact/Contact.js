import ContactList from "./ContactList";

function Contact({ data }) {
  return (
    <>
      <ul>
        <ContactList data={data}></ContactList>
      </ul>
    </>
  );
}

export default Contact;
