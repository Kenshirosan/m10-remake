import img from './404.gif';

const NotFound = () => {
    return (
        <article>
            <h2>OOOPpppsssss !!!</h2>
            <p>La ressource demandée n'existe pas / Le serveur a rencontré un problème</p>
            <img src={img} alt="Page Not Found" />
        </article>
    );
};

export default NotFound;
