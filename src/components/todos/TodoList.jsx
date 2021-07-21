import { Component } from "react";
import Loader from "../blog/Loader";
import Task from "./Tasks";
import data from "./data";

class TodoList extends Component {
  render() {
    return (
      <section className="container">
        <h2>TodoList</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {/*  Afficher data */}
            {data.map((task) => {
              return <Task key={task.id} task={task} />;
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

export default TodoList;
