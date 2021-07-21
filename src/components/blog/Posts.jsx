import { Component } from "react";
import Article from "./Article";

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      posts: [],
      isLoading: true,
    };
  }

  // Méthode du cycle de vie du composant : appelée automatiquement après le constructeur
  componentDidMount() {
    let url = new URL("https://jsonplaceholder.typicode.com/posts");

    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }

          throw new Error("Something went horribly wrong !");
        })
        .then((data) => {
          this.setState({ posts: data });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, 2000);
  }

  render() {
    const { posts } = this.state;

    // Si isLoading affiche Loader
    // Sinon affiche les posts

    return (
      <section className="container" style={sStyle}>
        <h1>Today's News</h1>
        {posts.map((post) => {
          return <Article key={post.id} post={post} />;
        })}
      </section>
    );
  }
}

const sStyle = {
  width: "90%",
  margin: "auto",
};

export default Posts;
