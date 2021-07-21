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
          <button>Complete</button>
        </td>
        <td>
          <button style={btnDangerStyle}>Supprimer</button>
        </td>
      </tr>
    );
  }
}

const btnDangerStyle = {
  background: "red",
};

export default Task;
