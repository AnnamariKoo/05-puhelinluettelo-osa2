import { useState } from "react";

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

const Person = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
      { name: "Arto Hellas", number: "040-123456" },
      { name: "Ada Lovelace", number: "39-44-5323523" },
      { name: "Dan Abramov", number: "12-43-234345" },
      { name: "Mary Poppendieck", number: "39-23-6423122" },
    ]),
    [newName, setNewName] = useState(""),
    [newNumber, setNewNumber] = useState(""),
    [searchTerm, setSearchTerm] = useState("");

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

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
      <form>
        filter shown with:
        <input value={searchTerm} onChange={handleSearchChange} />
      </form>
      <h2>Add a new</h2>
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
      <Persons persons={persons} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
