import { Button } from "./ContactList.styled";

function ContactList({ data, onDeleteNameItem }) {
  return (
    <>
      {data.map(({ name, id, number }) => (
        <li key={id}>
          {name} : {number}
          <Button onClick={() => onDeleteNameItem(id)}>Delete</Button>
        </li>
      ))}
    </>
  );
}

export default ContactList;
