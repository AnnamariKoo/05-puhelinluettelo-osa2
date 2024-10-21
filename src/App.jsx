import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Persons from "./components/Persons/Persons";
import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]),
    [newName, setNewName] = useState(""),
    [newNumber, setNewNumber] = useState(""),
    [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const sameName = (person) => person.name === newName;
    if (persons.findIndex(sameName) !== -1) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }

    personsService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
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
