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

export default Figure;
