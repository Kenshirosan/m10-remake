import { Fragment } from 'react';
// import Posts from "./components/blog/Posts";
import TodoList from './components/todos/TodoList';
import UsersList from './components/userslist/UsersList';
// YOGA
import Header from './components/yoga/Header';
// import Main from './components/yoga/Main';
import Footer from './components/yoga/Footer';
// M10
// import Header from "./components/m10/Header";
// import Presentation from "./components/m10/Presentation";
// import Main from "./components/m10/Main";

// import Rocket from './components/rocket/Rocket';

const App = () => {
    return (
        <Fragment>
            <Header title="Bienvenue sur le site d'Ila Yoga" />
            {/*<Presentation />*/}
            {/*<Main />*/}
            {/*<Posts />*/}
            <TodoList />
            <UsersList />
            {/*<Rocket />*/}
            <Footer text={new Date().toLocaleDateString()} />
        </Fragment>
    );
};

export default App;
