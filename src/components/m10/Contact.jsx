// Extraire des composants : Input et Button
import { Component } from "react";
import ContactForm from "./ContactForm";

// const Contact = () => {
//   return (
//     <section id="contact">
//       <h2>Contactez-moi</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//         occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//         mollit anim id est laborum.
//       </p>
//       <form>
//         <input type="text" name="name" placeholder="Votre prénom" />
//         <input type="text" name="mail" placeholder="Votre mail" />
//         <textarea name="message" rows="1" placeholder="Votre message" />
//         <button type="submit" name="button">
//           Envoyer
//         </button>
//         <button type="reset" name="button">
//           Effacer
//         </button>
//       </form>
//     </section>
//   );
// };

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <h2>Contactez-moi</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ContactForm />
      </section>
    );
  }
}

export default Contact;
