import React, { Component, Fragment } from "react";
import { sondage } from "./data";
import CustomInput from "./subcomponents/CustomInput";
import CustomSelect from "./subcomponents/CustomSelect";

class Form extends Component {
  state = {
    prenom: "",
    nom: "",
    mail: "",
    amis: false,
    detente: false,
    medecin: false,
    ami: "",
    subscribe: "",
    reputation: "",
  };

  onChangeHandler(event) {
    const inputName = event.target.name;

    if (
      inputName === "detente" ||
      inputName === "amis" ||
      inputName === "medecin" ||
      inputName === "subscribe"
    ) {
      console.log(event.target);

      this.setState({ [event.target.name]: event.target.checked });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }

    // switch (event.target.name) {
    //
    // }
    //
    // console.log(event.target.name);
  }

  render() {
    return (
      <Fragment>
        <h2>Pour valider votre réservation, compléter ce formulaire :</h2>
        <form>
          <fieldset>
            <legend>Vos coordonnées</legend>
            <ul>
              <li>
                <CustomInput
                  type="text"
                  id="prenom"
                  labelText="Votre Prénom :"
                  name="prenom"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </li>
              <li>
                <CustomInput
                  type="text"
                  id="nom"
                  labelText="Votre nom :"
                  name="nom"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </li>
              <li>
                <CustomInput
                  type="mail"
                  id="mail"
                  labelText="Votre mail :"
                  name="mail"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend>Quelles sont les raisons de votre venue ?</legend>
            <ul>
              <li>
                <CustomInput
                  type="checkbox"
                  id="detente"
                  labelText="Besoin de me détendre"
                  name="detente"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </li>
              <li>
                <CustomInput
                  type="checkbox"
                  id="medecin"
                  labelText="Mon médecin m'a conseillé de venir"
                  name="medecin"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </li>
              <li>
                <CustomInput
                  type="checkbox"
                  id="amis"
                  labelText="Je veux tester avec des amis"
                  name="amis"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend>
              Voulez-vous souscrire à notre programme de fidélité ?
            </legend>
            <ul>
              <li>
                <CustomInput
                  type="radio"
                  id="yes"
                  labelText="Oui"
                  name="subscribe"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </li>
              <li>
                <CustomInput
                  type="radio"
                  id="no"
                  labelText="Non"
                  name="subscribe"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend>Comment avez-vous connu Ila Yoga ?</legend>
            <CustomSelect
              name="reputation"
              id="reputation"
              data={sondage}
              onChange={this.onChangeHandler.bind(this)}
            />
          </fieldset>
          <button type="submit">Envoyer</button>
        </form>
      </Fragment>
    );
  }
}

export default Form;
