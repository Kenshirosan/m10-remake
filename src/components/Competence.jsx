import { Component } from "react";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import js from "../assets/img/js.svg";
import Figure from "./Figure";

// Extraire un composant Figure
// const Competence = () => {
//   return (
//     <section id="competences">
//       <h2>Mes compétences</h2>
//       <Figure image={html} title={"HTML"} content={"80%"} />
//         <Figure image={css} title={"CSS"} content={"95%"} />
//         <Figure image={js} title={"JS"} content={"75%"} />
//     </section>
//   );
// };

class Competence extends Component {
  render() {
    return (
      <section id="competences">
        <h2>Mes compétences</h2>

        <Figure image={html} title={"HTML"} content={"80%"} />
        <Figure image={css} title={"CSS"} content={"95%"} />
        <Figure image={js} title={"JS"} content={"75%"} />
      </section>
    );
  }
}

export default Competence;
