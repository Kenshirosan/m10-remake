import React from "react";

const Footer = (props) => {
  return (
    <footer className="licence">
      <p>&copy; - {props.text}</p>
    </footer>
  );
};

export default Footer;
