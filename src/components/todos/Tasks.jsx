import { Component } from "react";

class Task extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.task.id}</td>
        <td>{this.props.task.title}</td>
        {/*  Si done === true j'afffiche oui, sinon j'affiche non*/}
        <td>{this.props.task.done}</td>
      </tr>
    );
  }
}

export default Task;
