function ContactList({ name, data }) {
  return (
    <>
      {data.map(({ name, id, number }) => (
        <li key={id}>
          {name} : {number}
        </li>
      ))}
    </>
  );
}

export default ContactList;
