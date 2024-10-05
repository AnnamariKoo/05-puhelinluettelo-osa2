import { useState } from "react";
import Persons from "./components/Persons/Persons";
import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";

// const PersonForm = (props) => {
//   return (
//     <form onSubmit={props.addPerson}>
//       <div>
//         name: <input value={props.newName} onChange={props.handleNameChange} />
//       </div>
//       <div>
//         number:
//         <input value={props.newNumber} onChange={props.handleNumberChange} />
//       </div>
//       <div>
//         <button type="submit">add</button>
//       </div>
//     </form>
//   );
// };

// const Filter = (props) => {
//   return (
//     <form>
//       filter shown with:
//       <input value={props.searchTerm} onChange={props.handleSearchChange} />
//     </form>
//   );
// };

// const Persons = (props) => {
//   return (
//     <ul>
//       {props.persons
//         .filter((person) =>
//           person.name.toLowerCase().includes(props.searchTerm.toLowerCase())
//         )
//         .map((person) => (
//           <Person key={person.name} person={person} />
//         ))}
//     </ul>
//   );
// };

// const Person = ({ person }) => {
//   return (
//     <li>
//       {person.name} {person.number}
//     </li>
//   );
// };

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
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
