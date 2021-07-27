import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Posts from './components/blog/Posts';
import TodoList from './components/todos/TodoList';
// import UsersList from './components/userslist/UsersList';
// YOGA
import Header from './components/yoga/Header';
// import Main from './components/yoga/Main';
import Footer from './components/yoga/Footer';
// M10
// import Header from "./components/m10/Header";
import Presentation from './components/m10/Presentation';
import Main from './components/m10/Main';

// Rocket
// import Rocket from './components/rocket/Rocket';

// Accordéon
// import Articles from './components/accordeon-basics/Articles';

// sortByCategories
// import Menu from './components/sortItemsByCategory/Menu';

// Router LESSON
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Pricing from './components/pages/Pricing';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Header title="Bienvenue sur le site d'Ila Yoga" />

                <Route exact path="/" component={Presentation} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/main" component={Main} />
                <Route path="/blog" component={Posts} />
                <Route path="/todos" component={TodoList} />
                {/*<UsersList />*/}
                {/*<Rocket />*/}
                {/*/!*<Articles />*!/*/}
                {/*<Menu />*/}
            </Router>

            <Footer text={new Date().toLocaleDateString()} />
        </Fragment>
    );
};

export default App;
