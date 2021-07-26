import PropTypes from 'prop-types';

// Destructure props
const Task = ({ task, updateTask, deleteTask }) => {
    return (
        <tr>
            <td>{task.id}</td>
            <td>{task.title}</td>
            {/*  Si done === true j'affiche oui, sinon j'affiche non*/}
            <td>{task.done ? 'Oui' : 'Non'}</td>
            <td>
                <button onClick={() => updateTask(task)} style={task.done ? btnDoneStyle : null}>
                    Modifier
                </button>
            </td>
            <td>
                <button onClick={() => deleteTask(task.id)} style={btnDangerStyle}>
                    Supprimer
                </button>
            </td>
        </tr>
    );
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

const btnDangerStyle = {
    background: 'red',
};

const btnDoneStyle = {
    backgroundColor: 'green',
};

export default Task;
