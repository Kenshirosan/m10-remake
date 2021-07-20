import React, { Fragment } from "react";
import { sondage } from "./data";
import CustomInput from "./subcomponents/CustomInput";
import CustomSelect from "./subcomponents/CustomSelect";

const Form = () => {
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
              />
            </li>
            <li>
              <CustomInput
                type="text"
                id="nom"
                labelText="Votre nom :"
                name="nom"
              />
            </li>
            <li>
              <CustomInput
                type="mail"
                id="mail"
                labelText="Votre mail :"
                name="mail"
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
                name="détente"
              />
            </li>
            <li>
              <CustomInput
                type="checkbox"
                id="medecin"
                labelText="Mon médecin m'a conseillé de venir"
                name="médecin"
              />
            </li>
            <li>
              <CustomInput
                type="checkbox"
                id="ami"
                labelText="Je veux tester avec des amis"
                name="amis"
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Voulez-vous souscrire à notre programme de fidélité ?</legend>
          <ul>
            <li>
              <CustomInput
                type="radio"
                id="yes"
                labelText="Oui"
                name="subscribe"
              />
            </li>
            <li>
              <CustomInput
                type="radio"
                id="no"
                labelText="Non"
                name="subscribe"
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Comment avez-vous connu Ila Yoga ?</legend>
          <CustomSelect name="reputation" id="reputation" data={sondage} />
        </fieldset>
        <button type="submit">Envoyer</button>
      </form>
    </Fragment>
  );
};

export default Form;
