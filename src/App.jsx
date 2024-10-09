import { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./components/Persons/Persons";
import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]),
    [newName, setNewName] = useState(""),
    [newNumber, setNewNumber] = useState(""),
    [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

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
