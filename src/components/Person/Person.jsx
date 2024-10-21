const Person = ({ person, handleClick }) => {
  return (
    <li>
      {person.name} {person.number}
      <button onClick={() => handleClick(person.id)}>delete</button>
    </li>
  );
};

export default Person;
