import PropTypes from "prop-types";
// Sans destructuring
const Article = ({ post }) => {
  console.log(post.userId);
  return (
    <article className="article" style={aStyle}>
      <h3 style={tStyle}>
        {post.title} <span>par 'Nom de l'auteur'</span>
      </h3>
      <p style={pStyle}>{post.body}</p>
    </article>
  );
};

const tStyle = {
  fontSize: "2em",
};

const aStyle = {
  width: "33%",
  padding: "1em",
  display: "inline-block",
  margin: "0 auto",
};

const pStyle = {
  color: "red",
  textAlign: "center",
};

Article.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Article;
