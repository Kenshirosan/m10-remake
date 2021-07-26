import { Fragment } from 'react';
import Posts from './components/blog/Posts';
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

// Rocket
// import Rocket from './components/rocket/Rocket';

// Accordéon
import Articles from './components/accordeon-basics/Articles';

// sortByCategories
import Menu from './components/sortItemsByCategory/Menu';
const App = () => {
    return (
        <Fragment>
            <Header title="Bienvenue sur le site d'Ila Yoga" />
            {/*<Presentation />*/}
            {/*<Main />*/}
            {/*<Posts />*/}
            {/*<TodoList />*/}
            {/*<UsersList />*/}
            {/*<Rocket />*/}
            {/*<Articles />*/}
            <Menu />
            <Footer text={new Date().toLocaleDateString()} />
        </Fragment>
    );
};

export default App;
