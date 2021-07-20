import Article from "./Article";
const Services = () => {
  // Ici, avant tout, on récupère les données
  return (
    <section id="services">
      <h2>Mes services</h2>

      <Article
        icon="fa fa-coffee"
        class="service"
        title="On discute"
        content={[
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        ]}
      />

      <Article
        icon="fa fa-flask"
        class="service"
        title="On tente"
        content={[
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        ]}
      />
      <Article
        icon="fa fa-code"
        class="service"
        title="On code"
        content={[
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        ]}
      />
    </section>
  );
};

export default Services;
