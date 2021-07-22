import { Component, Fragment } from "react";
import Loader from "../blog/Loader";
import Task from "./Task";
import AddTask from "./AddTask";
import data from "./data";
/*
 *
 * CRUD
 * CREATE
 * READ
 * UPDATE
 * DELETE
 *
 * RESTFul API
 *
 * INDEX => Récupérer les données et les afficher. (maybe...)
 * CREATE => Montre un formulaire pour créer une resource.
 * STORE => Créer une resource : Besoin des données du formulaire.
 * SHOW => Montre une resource : On a besoin d'identifier la resource : il faut un identifiant unique.
 * EDIT => Montre un formulaire pré-rempli : On a besoin d'un identifiant unique, on a besoin de l'objet à mettre à jour.
 * UPDATE => Met à jour la resource : Besoin des données du formulaire et d'un identifiant unique.
 * DESTROY => Efface la resource : besoin d'un identifiant unique.
 *
 */

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      tasks: [],
    };

    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  // Méthode du cycle de vie du composant
  // est appelée automatiquement après le constructeur
  componentDidMount() {
    setTimeout(() => {
      this.setState({ tasks: data });

      this.setState({ isLoading: false });
    }, 500);
  }

  deleteTask(id) {
    if (window.confirm("Etes vous sur de vouloir effacer cette tâche ?")) {
      //
      this.setState({
        tasks: this.state.tasks.filter((task) => task.id !== id),
      });
    }
  }

  updateTask(updatedTask) {
    // Trouver la tache dans le state : On la reçu en paramètre
    // Mettre à jour la tâche : La propriété done doit prendre la valeur inverse de ce qu'elle est maintenant
    updatedTask.done = !updatedTask.done;

    // map retourne un tableau modifié selon une condition,
    // Ce tableau contient le même nombre d'éléments que le tableau original
    //
    // Mettre a jour le tableau contacts
    // Avec map : si on trouve sur un contact la même id que l'on a dans updateContact, on remplace l'objet.
    // Sinon on retourne l'objet en place sans modifications.
    let newTasks = this.state.tasks.map((task) => {
      return updatedTask.id === task.id ? updatedTask : task;

      // On compare l'id de la tâche qu'on a mis à jour avec les id des tâches du state
      // if (updatedTask.id === task.id) {
      //   return updatedTask;
      // }
      // return task;
    });

    // Mettre à jour le state
    this.setState({ tasks: newTasks });
  }

  render() {
    const { isLoading, tasks } = this.state;

    return (
      <section className="container">
        <h2>TodoList</h2>

        {isLoading ? (
          <Loader />
        ) : (
          <Fragment>
            <AddTask />
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
                {tasks.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    updateTask={this.updateTask}
                    deleteTask={this.deleteTask}
                  />
                ))}
              </tbody>
            </table>
          </Fragment>
        )}
      </section>
    );
  }
}

export default TodoList;
