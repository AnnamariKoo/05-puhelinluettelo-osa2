import { useState } from "react";

const Person = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
      { name: "Arto Hellas", number: "123" },
    ]),
    [newName, setNewName] = useState(""),
    [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
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
    setNewNumber("");
    console.log("person name", {
      persons,
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
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
