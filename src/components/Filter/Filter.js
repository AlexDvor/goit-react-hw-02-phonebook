function Filter({ filter, onChange }) {
  return (
    <>
      <p>Find Contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
    </>
  );
}

export default Filter;
