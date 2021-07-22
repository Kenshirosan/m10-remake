import React, { Component } from "react";

class AddTask extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <ul>
            <li>
              <legend>Ajoutez une tâche </legend>
              <input type="text" name="title" />
              <button style={btnStyle} type="submit">
                Créer une tâche
              </button>
            </li>
          </ul>
        </fieldset>
      </form>
    );
  }
}

const btnStyle = {
  marginLeft: "1em",
};

export default AddTask;
