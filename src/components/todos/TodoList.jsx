import { Component, Fragment } from 'react';
import Loader from '../blog/Loader';
import Task from './Task';
import AddTask from './AddTask';
import data from './data';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            tasks: [],
        };

        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    /**
     * componentDidMount() => méthode qui fait partie du cycle de vie du composant et qui est appelée juste après le constructeur
     */
    componentDidMount() {
        setTimeout(() => {
            this.setState({ tasks: data, isLoading: false });
        }, 500);
    }

    createTask(task) {
        // setState => modifier le state
        this.setState({ tasks: [task, ...this.state.tasks] });
    }

    deleteTask(id) {
        if (window.confirm('Etes vous sur de vouloir effacer cette tâche ?')) {
            //
            this.setState({
                tasks: this.state.tasks.filter(task => {
                    if (task.id !== id) {
                        return task;
                    }
                    // return id !== task.id;
                }),
            });
        }
    }

    updateTask(updatedTask) {
        updatedTask.done = !updatedTask.done;

        this.setState({
            tasks: this.state.tasks.map(
                task => {
                    if (updatedTask.id === task.id) {
                        return updatedTask;
                    }

                    return task;
                }
                // updatedTask.id === task.id ? updatedTask : task
            ),
        });
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
                        <AddTask createTask={this.createTask} />
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
                                {tasks.map(task => (
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
