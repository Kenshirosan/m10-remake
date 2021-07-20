import { Component } from "react";
import Competence from "./Competence";
import Services from "./Services";
import Resume from "./Resume";
import Contact from "./Contact";

// const Main = () => {
//   return (
//     <main className="container">
//       <Competence />
//       <Resume />
//       <Contact />
//     </main>
//   );
// };

class Main extends Component {
  render() {
    return (
      <main className="container">
        <Competence />
        <Services />
        <Resume />
        <Contact />
      </main>
    );
  }
}

export default Main;
