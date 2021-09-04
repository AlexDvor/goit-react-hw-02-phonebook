function ContactList({ name, data }) {
  return (
    <>
      {data.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </>
  );
}

export default ContactList;
