import un from "../assets/img/realisation/1.png";
import deux from "../assets/img/realisation/2.png";
import trois from "../assets/img/realisation/3.png";
import quatre from "../assets/img/realisation/4.png";
import Article from "./Article";
// Extraire un composant Article
const Resume = () => {
  const contenu = [
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
  ];

  return (
    <section id="resume">
      <h2>Quelques exemples de réalisations</h2>
      <Article
        class="clear"
        title={"Orange Juice"}
        image={un}
        content={contenu}
        link={true}
      />
      <Article
        class="clear"
        title={"Banana Juice"}
        image={deux}
        content={contenu}
        link={true}
      />
      <Article
        class="clear"
        title={"Pineapple Juice"}
        image={trois}
        content={contenu}
        link={true}
      />
      <Article
        class="clear"
        title={"Grape Juice"}
        image={quatre}
        content={contenu}
        link={true}
      />
    </section>
  );
};

export default Resume;
