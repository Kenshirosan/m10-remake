import { Component, Fragment } from 'react';
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
class Posts extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            posts: [],
            isLoading: true,
        };
    }

    // Méthode du cycle de vie du composant : appelée automatiquement après le constructeur
    componentDidMount() {
        let postsUrl = new URL('https://jsonplaceholder.typicode.com/posts');
        let usersUrl = new URL('https://jsonplaceholder.typicode.com/users');
        // Extraire le code suivant dans une méthode
        // Appeler 2 fois cette méthode : une fois pour les posts, une fois pour les users
        this.getData(postsUrl, 'posts');
        this.getData(usersUrl, 'users');
    }

    getData(url, state) {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    this.setState({ isLoading: false });
                    return res.json();
                }

                throw new Error('Something went horribly wrong !');
            })
            .then(data => {
                this.setState({ [state]: data });
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    render() {
        const { posts, users, isLoading } = this.state;
        let author = {};
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
                            author = users.find(user => user.id === post.userId);

                            return <Article key={post.id} post={post} author={author} />;
                        })
                    )}
                </Fragment>
            </section>
        );
    }
}

const sStyle = {
    width: '90%',
    margin: 'auto',
};

export default Posts;
