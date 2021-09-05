import { Button } from "./ContactList.styled";

function ContactList({ data }) {
  return (
    <>
      {data.map(({ name, id, number }) => (
        <li key={id}>
          {name} : {number}
          <Button>Delete</Button>
        </li>
      ))}
    </>
  );
}

export default ContactList;
