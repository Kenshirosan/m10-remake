import React from 'react';

const Header = ({ title }) => {
    return (
        <header>
            <nav>
                <a href="!#">
                    <i className="fa fa-calendar" />
                    Agenda
                </a>
                <a href="!#">
                    <i className="fa fa-book" />
                    Livre d'or
                </a>
                <a href="!#">
                    <i className="fa fa-picture-o" />
                    Album Photo
                </a>
                <a href="!#">
                    <i className="fa fa-envelope" />
                    Nous contacter
                </a>
            </nav>
            <p className="promo">
                <strong>OFFRE PROMO : Votre premier cours d'essai gratuit !</strong>
            </p>
            <h1 className="presentation">{title}</h1>
        </header>
    );
};

export default Header;
