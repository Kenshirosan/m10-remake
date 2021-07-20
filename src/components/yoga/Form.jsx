import React, { Component, Fragment } from "react";
import { sondage } from "./data";
import CustomInput from "./subcomponents/CustomInput";
import CustomSelect from "./subcomponents/CustomSelect";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      prenom: "",
      nom: "",
      mail: "",
      amis: false,
      detente: false,
      medecin: false,
      ami: "",
      subscribe: "non",
      reputation: "",
      age: "18",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    const inputName = event.target.name;

    if (
      inputName === "detente" ||
      inputName === "amis" ||
      inputName === "medecin"
    ) {
      this.setState({ [event.target.name]: event.target.checked });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem("infos", JSON.stringify(this.state));

    event.target.reset();
  }

  render() {
    return (
      <Fragment>
        <h2>Pour valider votre réservation, compléter ce formulaire :</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <legend>Vos coordonnées</legend>
            <ul>
              <li>
                <CustomInput
                  type="text"
                  id="prenom"
                  labelText="Votre Prénom :"
                  name="prenom"
                  onChange={this.onChangeHandler}
                />
              </li>
              <li>
                <CustomInput
                  type="text"
                  id="nom"
                  labelText="Votre nom :"
                  name="nom"
                  onChange={this.onChangeHandler}
                />
              </li>
              <li>
                <CustomInput
                  type="mail"
                  id="mail"
                  labelText="Votre mail :"
                  name="mail"
                  onChange={this.onChangeHandler}
                />
              </li>
              <li>
                <label htmlFor="age">Votre Age</label>
                <input
                  name="age"
                  type="range"
                  id="age"
                  onChange={this.onChangeHandler}
                  min="18"
                  max="122"
                  step="1"
                />
                {this.state.age}
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
                  onChange={this.onChangeHandler}
                />
              </li>
              <li>
                <CustomInput
                  type="checkbox"
                  id="medecin"
                  labelText="Mon médecin m'a conseillé de venir"
                  name="medecin"
                  onChange={this.onChangeHandler}
                />
              </li>
              <li>
                <CustomInput
                  type="checkbox"
                  id="amis"
                  labelText="Je veux tester avec des amis"
                  name="amis"
                  onChange={this.onChangeHandler}
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
                  value="oui"
                  onChange={this.onChangeHandler}
                />
              </li>
              <li>
                <CustomInput
                  type="radio"
                  id="no"
                  labelText="Non"
                  name="subscribe"
                  value="non"
                  onChange={this.onChangeHandler}
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
              onChange={this.onChangeHandler}
            />
          </fieldset>
          <button type="submit">Envoyer</button>
        </form>
      </Fragment>
    );
  }
}

export default Form;
