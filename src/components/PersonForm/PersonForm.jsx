const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div className="addForm">
        name: <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div className="addForm">
        number:
        <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button className="addButton" type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
