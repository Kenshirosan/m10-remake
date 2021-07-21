import PropTypes from "prop-types";
import { Component } from "react";

class Task extends Component {
  render() {
    const { task, updateTask } = this.props;

    return (
      <tr>
        <td>{task.id}</td>
        <td>{task.title}</td>
        {/*  Si done === true j'affiche oui, sinon j'affiche non*/}
        <td>{task.done ? "Oui" : "Non"}</td>
        <td>
          <button
            onClick={() => updateTask(task)}
            style={task.done ? btnDoneStyle : null}
          >
            Modifier
          </button>
        </td>
        <td>
          <button style={btnDangerStyle}>Supprimer</button>
        </td>
      </tr>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired,
};

const btnDangerStyle = {
  background: "red",
};

const btnDoneStyle = {
  backgroundColor: "green",
};

export default Task;
