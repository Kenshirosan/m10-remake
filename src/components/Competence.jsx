import { Component } from "react";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import js from "../assets/img/js.svg";

// Extraire un composant Figure
// const Competence = () => {
//   return (
//     <section id="competences">
//       <h2>Mes compétences</h2>
//       <figure className="language">
//         <img src={html} alt="HTML : 80%" />
//         <figcaption>
//           <p>80%</p>
//           <h3>HTML</h3>
//         </figcaption>
//       </figure>
//
//       <figure className="language">
//         <img src={css} alt="CSS : 95%" />
//         <figcaption>
//           <p>95%</p>
//           <h3>CSS</h3>
//         </figcaption>
//       </figure>
//
//       <figure className="language">
//         <img src={js} alt="JS : 75%" />
//         <figcaption>
//           <p>75%</p>
//           <h3>Javascript</h3>
//         </figcaption>
//       </figure>
//     </section>
//   );
// };

class Competence extends Component {
  render() {
    return (
      <section id="competences">
        <h2>Mes compétences</h2>
        <figure className="language">
          <img src={html} alt="HTML : 80%" />
          <figcaption>
            <p>80%</p>
            <h3>HTML</h3>
          </figcaption>
        </figure>

        <figure className="language">
          <img src={css} alt="CSS : 95%" />
          <figcaption>
            <p>95%</p>
            <h3>CSS</h3>
          </figcaption>
        </figure>

        <figure className="language">
          <img src={js} alt="JS : 75%" />
          <figcaption>
            <p>75%</p>
            <h3>Javascript</h3>
          </figcaption>
        </figure>
      </section>
    );
  }
}
export default Competence;
