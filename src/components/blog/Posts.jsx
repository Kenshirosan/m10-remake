import { Fragment, useEffect, useState } from 'react';
import Article from './Article';
import Loader from '../spinners/Loader';

// convertir les composants classes en fonctions :
// dans les composants fonctionnels :
// Le state est gérer avec useState
// componentDidMount est remplacé par useEffect
// Si besoin, les props sont passés en paramètres du composant
// Pas de mot-clé this
// Pas de bind(this)
// Pas de this.setState();
// Pas de constructeur
// Pas de render : uniquement un return
//
// Commencer par re-déclarer Posts pour en faire une fonction
const Posts = () => {
    //Faire le state avec hooks
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [postsUrl] = useState(new URL('https://jsonplaceholder.typicode.com/posts'));
    const [isLoading, setIsLoading] = useState(true);

    // Méthode du cycle de vie du composant : appelée automatiquement après le constructeur
    useEffect(() => {
        getData(postsUrl, setPosts);
        let usersUrl = new URL('https://jsonplaceholder.typicode.com/users');
        getData(usersUrl, setUsers);
    }, []);

    const getData = (url, setState) => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Something went horribly wrong !');
            })
            .then(data => {
                setState(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    // Si isLoading affiche Loader
    // Sinon affiche les posts
    return (
        <section className="container" style={sStyle}>
            <h1>Today's News</h1>

            <Fragment>
                {isLoading ? (
                    <Loader />
                ) : (
                    posts.map(post => {
                        // Trouver l'utilisateur qui a l'id correspondant a post.userId et le passer en props au composant Article
                        let author = users.find(user => user.id === post.userId);

                        return <Article key={post.id} post={post} author={author} />;
                    })
                )}
            </Fragment>
        </section>
    );
};

const sStyle = {
    width: '90%',
    margin: 'auto',
};

export default Posts;
