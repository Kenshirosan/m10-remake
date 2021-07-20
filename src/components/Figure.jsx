import PropTypes from "prop-types";

const Figure = ({ image, title, content }) => {
  return (
    <figure className="language">
      <img src={image} alt={`${title} : ${content}`} />
      <figcaption>
        <p>{content}</p>
        <h3>{title}</h3>
      </figcaption>
    </figure>
  );
};

Figure.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Figure;
