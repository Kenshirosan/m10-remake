import React, { Component } from 'react';
import Loader from '../spinners/Loader';
import User from './User';
/**
 * Créer un state avec une propriété users et un isLoading
 *
 * Récupérer une liste d'utilisateur avec fetch et l'api typicode, mettre les users dans le state
 * users: https://jsonplaceholder.typicode.com/users/
 * Utilisez un constructor et componentDidMount()
 *
 * Créez un composant user qui acceptera un prop user
 */

/*
 * INDEX => Récupérer les données et les afficher. (maybe...)
 * CREATE => Montre un formulaire pour créer une resource.
 * STORE => Créer une resource : Besoin des données du formulaire.
 * SHOW => Montre une resource : On a besoin d'identifier la resource : il faut un identifiant unique.
 * EDIT => Montre un formulaire pré-rempli : On a besoin d'un identifiant unique, on a besoin de l'objet à mettre à jour.
 * UPDATE => Met à jour la resource : Besoin des données du formulaire et d'un identifiant unique.
 * DESTROY => Efface la resource : besoin d'un identifiant unique.
 *
 */
class UsersList extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getData(url, 'users');
    }

    getData(user, state) {}

    render() {
        return (
            <div>
                <h2>Users</h2>
            </div>
        );
    }
}

export default UsersList;
