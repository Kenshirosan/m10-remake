import PropTypes from 'prop-types';
import Accordion from './Accordion';
// 1. Accepter article en prop
// 2. Pour afficher l'article qui arrive en prop:
//      Utiliser la balise <article>,
//      une balise h2 pour le titre avec un lien a href dans le h2,
//      et une balise p.
// 3. Ensuite, transférer la balise p dans le composant Accordion.
// 4. Remplacer la balise p par le composant Accordion.
// 5. PropTypes : article doit être un objet et est obligatoire.
//
const Article = ({ article }) => {
    return (
        <article style={style}>
            <h2>
                <a href="!#">{article.title}</a>
            </h2>
            <Accordion text={article.body} />
        </article>
    );
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
};

const style = {
    width: '33%',
    margin: 'auto',
};

export default Article;
