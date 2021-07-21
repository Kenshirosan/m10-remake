import PropTypes from "prop-types";
import { Component } from "react";

class Task extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.task.id}</td>
        <td>{this.props.task.title}</td>
        {/*  Si done === true j'affiche oui, sinon j'affiche non*/}
        <td>{this.props.task.done ? "Oui" : "Non"}</td>
        <td>
          <button onClick={() => this.props.updateTask(this.props.task.id)}>
            Complete
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

export default Task;
