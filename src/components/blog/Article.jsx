import PropTypes from "prop-types";
// Avec destructuring
// const { post, author} = props;
const Article = ({ post, author }) => {
  return (
    <article className="article" style={aStyle}>
      <h3 style={tStyle}>
        {post.title} <span style={spanStyle}>Par : {author.name}</span>
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

const spanStyle = {
  color: "blue",
};

Article.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default Article;
