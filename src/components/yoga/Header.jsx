import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ title }) => {
    return (
        <header>
            <nav>
                <NavLink exact to="/">
                    <i className="fa fa-calendar" />
                    Home
                </NavLink>
                <NavLink to="/about">
                    <i className="fa fa-calendar" />
                    About
                </NavLink>
                <NavLink to="/contact">
                    <i className="fa fa-book" />
                    Contact
                </NavLink>
                <NavLink to="/pricing">
                    <i className="fa fa-picture-o" />
                    Pricing
                </NavLink>
                <NavLink to="/main">
                    <i className="fa fa-picture-o" />
                    Main
                </NavLink>
                <NavLink to="/blog">
                    <i className="fa fa-picture-o" />
                    Blog
                </NavLink>
                <NavLink to="/todos">
                    <i className="fa fa-picture-o" />
                    Todo
                </NavLink>
                <Link to="/contact">
                    <i className="fa fa-envelope" />
                    Nous contacter
                </Link>
            </nav>
            <p className="promo">
                <strong>OFFRE PROMO : Votre premier cours d'essai gratuit !</strong>
            </p>
            <h1 className="presentation">{title}</h1>
        </header>
    );
};

export default Header;
