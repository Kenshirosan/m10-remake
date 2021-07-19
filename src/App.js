import { Fragment } from "react";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Main from "./components/Main";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Presentation />
      <Main />
    </Fragment>
  );
};

export default App;
