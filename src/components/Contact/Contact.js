import ContactList from "./ContactList";

function Contact({ data, onDeleteNameItem }) {
  return (
    <>
      <ul>
        <ContactList
          data={data}
          onDeleteNameItem={onDeleteNameItem}
        ></ContactList>
      </ul>
    </>
  );
}

export default Contact;
