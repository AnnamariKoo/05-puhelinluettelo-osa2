import Person from "../Person/Person";

const Persons = (props) => {
  // const handleClick = (person) => {
  //   console.log("person", person);
  // };
  // const handleClick = (id) => {
  //   props.deletePerson(id);
  //   // console.log("e:", e);
  //   console.log("id:", id);
  // };

  return (
    <ul>
      {props.persons
        .filter((person) =>
          person.name.toLowerCase().includes(props.searchTerm.toLowerCase())
        )
        .map((person) => (
          <Person
            key={person.name}
            id={person.id}
            person={person}
            handleClick={props.deletePerson}
          />
        ))}
    </ul>
  );
};

export default Persons;
