import { useState, Fragment } from 'react';
import data from './data';
import Article from './Article';

// Afficher les articles en se servant du composant Article

// 1. Mettre data dans un state : articles, setArticles (importer et utiliser useState)
// 2. Avec map, afficher la liste des articles
// 3. Passer chaque article en prop dans le composant Article : ne pas oublier key sur le composant Article

const Articles = () => {
    const [articles] = useState(data);

    return (
        <Fragment>
            <h2>Articles Component</h2>

            {articles.map(article => (
                <Article key={article.id} article={article} />
            ))}
        </Fragment>
    );
};

export default Articles;
