import Person from "../Person/Person";

const Persons = (props) => {
  return (
    <ul>
      {props.persons
        .filter((person) =>
          person.name.toLowerCase().includes(props.searchTerm.toLowerCase())
        )
        .map((person) => (
          <Person key={person.name} person={person} />
        ))}
    </ul>
  );
};

export default Persons;
