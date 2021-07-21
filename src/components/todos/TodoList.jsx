import { Component } from "react";
import Loader from "../blog/Loader";
import Task from "./Tasks";
import data from "./data";

class TodoList extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <section className="container">
        <h2>TodoList</h2>

        {isLoading ? (
          <Loader />
        ) : (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Title</th>
                <th>Done</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/*  Afficher data */}
              {data.map((task) => {
                return <Task key={task.id} task={task} />;
              })}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}

export default TodoList;
