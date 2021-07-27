import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/errors/NotFound';
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
        <Router>
            <Header title="Bienvenue sur le site d'Ila Yoga" />
            {/* Si les composants s'affichent pas : Pensez à mettre les uniquement les routes dans le switch*/}
            <Switch>
                {/*exact : Si on reçoit pas exactement '/', on affiche pas le composant*/}
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
                <Route component={NotFound} />
            </Switch>
            <Footer text={new Date().toLocaleDateString()} />
        </Router>
    );
};

export default App;
