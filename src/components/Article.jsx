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

// Sans destructuring
const Article = (props) => {
  return (
    <article className={"clear"}>
      {" "}
      {/* Rendre la classe dynamique */}
      {/*  Si balise i : on met balise i ici*/}
      <h3>{props.title}</h3>
      {props.content.map((p) => {
        return <p>{p}</p>;
      })}
      <img src={props.image} alt="" />
      {/*si balise a, on met balise a ici*/}
      <a href="#">
        En savoir plus <i className="fa fa-plus-circle" />
      </a>
    </article>
  );
};
export default Article;
