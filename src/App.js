import { Fragment } from "react";
import Posts from "./components/blog/Posts";
// YOGA
import Header from "./components/yoga/Header";
// import Main from "./components/yoga/Main";
import Footer from "./components/yoga/Footer";
// M10
// import Header from "./components/m10/Header";
// import Presentation from "./components/m10/Presentation";
// import Main from "./components/m10/Main";

const App = () => {
  return (
    <Fragment>
      <Header />
      {/*<Presentation />*/}
      {/*<Main />*/}
      <Posts />
      <Footer text={new Date().toLocaleDateString()} />
    </Fragment>
  );
};

export default App;
