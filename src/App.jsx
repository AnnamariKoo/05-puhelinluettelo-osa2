import { useState } from "react";

const Person = ({ person }) => {
  return <li>{person.name}</li>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };
    const sameName = (person) => person.name === newName;
    console.log(persons.findIndex(sameName));
    if (persons.findIndex(sameName) !== -1) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    console.log("button clicked", event.target);

    setPersons(persons.concat(personObject));
    setNewName("");
    console.log("person name", {
      persons,
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
