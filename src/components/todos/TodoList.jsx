import { Fragment, useState, useEffect } from 'react';
import Loader from '../spinners/Loader';
import Task from './Task';
import AddTask from './AddTask';
import data from './data';

const TodoList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tasks, setTasks] = useState([]);

    /**
     * componentDidMount() => méthode qui fait partie du cycle de vie du composant et qui est appelée juste après le constructeur
     *
     * useEffect avec un tableau vide en deuxième argument est équivalent à componentDidMount
     */
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setTasks(data);
        }, 500);
    }, []);

    const createTask = task => {
        // AVEC SPREAD OPERATOR
        const newTasks = [task, ...tasks];
        setTasks(newTasks);
    };

    const deleteTask = id => {
        if (window.confirm('Etes vous sur de vouloir effacer cette tâche ?')) {
            // filter : filtre un tableau et retourne un nouveau tableau filtré selon des conditions.
            const newTasks = tasks.filter(task => {
                if (task.id !== id) {
                    return task;
                }
            });

            setTasks(newTasks);
        }
    };

    const updateTask = updatedTask => {
        updatedTask.done = !updatedTask.done;

        // map retourne un nouveau tableau modifié en fonction de conditions, le nouveau tableau contient le même nombre d'éléments que le tableau original
        const updatedTasks = tasks.map(task => (updatedTask.id === task.id ? updatedTask : task));

        setTasks(updatedTasks);
    };

    return (
        <section className="container">
            <h2>TodoList</h2>

            {isLoading ? (
                <Loader />
            ) : (
                <Fragment>
                    <AddTask createTask={createTask} />
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
                                <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
                            ))}
                        </tbody>
                    </table>
                </Fragment>
            )}
        </section>
    );
};

export default TodoList;
