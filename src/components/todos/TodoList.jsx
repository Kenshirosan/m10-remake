import { Component } from "react";
import Loader from "../blog/Loader";
import Task from "./Task";
import data from "./data";
/*
*
* CRUD
CREATE
READ
UPDATE
DELETE*/
/*
RESTFul API

INDEX => Récupérer les données et les afficher. (maybe...)
CREATE => Montre un formulaire pour créer une resource.
STORE => Créer une resource : Besoin des données du formulaire.
SHOW => Montre une resource : On a besoin d'identifier la resource : il faut un identifiant unique.
EDIT => Montre un formulaire pré-rempli : On a besoin d'un identifiant unique, on a besoin de l'objet à mettre à jour.
UPDATE => Met à jour la resource : Besoin des données du formulaire et d'un identifiant unique.
DESTROY => Efface la resource : besoin d'un identifiant unique.

*/

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      tasks: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });

      this.setState({ tasks: data });
    }, 500);
  }

  updateTask(id) {
    console.log(id);
    // Trouver la tache dans le state
    // Mettre à jour la tâche
    // Mettre à jour le state
  }

  render() {
    const { isLoading, tasks } = this.state;

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
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    updateTask={this.updateTask}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}

export default TodoList;
