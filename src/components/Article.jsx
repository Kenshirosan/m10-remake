import PropTypes from "prop-types";
// Sans destructuring
const Article = (props) => {
  let icon = null;
  if (props.icon) {
    icon = <i className={props.icon} />;
  }

  return (
    <article className={props.class}>
      {/*  Si balise <i> : on met balise </i> ici* */}
      {icon}

      <h3>{props.title}</h3>
      {props.content.map((p, index) => {
        return <p key={index}>{p}</p>;
      })}

      {/* Si on a une image */}
      {props.image && <img src={props.image} alt="" />}

      {/*{props.image ? <img src={props.image} alt="" /> : null}*/}

      {/*si balise a, on met balise a ici*/}
      {props.link && (
        <a href="!#">
          En savoir plus <i className="fa fa-plus-circle" />
        </a>
      )}
    </article>
  );
};

Article.defaultProps = {
  link: false,
};

Article.propTypes = {
  link: PropTypes.bool,
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  icon: PropTypes.string,
  image: PropTypes.string,
  class: PropTypes.string,
};

// Avec destructuring
// const Article = ({ title, image, content }) => {
//   return (
//     <article className={"clear"}>
//       <h3>{title}</h3>
//       {content.map((p) => {
//         return <p>{p}</p>;
//       })}
//       <img src={image} alt="" />
//       <a href="#">
//         En savoir plus <i className="fa fa-plus-circle" />
//       </a>
//     </article>
//   );
// };

export default Article;
