import { Component } from "react";
import TextInput from "./subComponents/TextInput";
import Button from "./subComponents/Button";

// const ContactForm = () => {
//   return (
//     <form>
//       <TextInput name="name" placeholder="Votre prénom" />
//       <TextInput type="email" name="main" placeholder="Votre mail" />
//
//       <textarea name="message" rows="1" placeholder="Votre message" />
//       <Button type="submit" text="Envoyer" />
//       <Button type="reset" text="Effacer" />
//     </form>
//   );
// };

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  getData(e) {
    e.preventDefault();

    localStorage.setItem("message", JSON.stringify(this.state));

    e.target.reset();
  }

  handleChange(e) {
    // this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ message: e.target.value });
    }
  }

  render() {
    return (
      <form onSubmit={this.getData.bind(this)}>
        <TextInput
          name="name"
          placeholder="Votre prénom"
          handleOnChange={this.handleChange.bind(this)}
        />
        <TextInput
          type="email"
          name="email"
          placeholder="Votre mail"
          handleOnChange={this.handleChange.bind(this)}
        />
        <textarea
          onChange={this.handleChange.bind(this)}
          name="message"
          rows="1"
          placeholder="Votre message"
        />

        <Button type="submit" text="Envoyer" />
        <Button type="reset" text="Effacer" />
      </form>
    );
  }
}

export default ContactForm;
