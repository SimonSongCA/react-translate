import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // // set up the property of language to the current Button object
  // static contextType = LanguageContext;

  // render() {
  //   const text = this.context === "english" ? "Submit" : "Voorleggen";
  //   return <button className="ui button primary">{text}</button>;
  // }

  // replace 'Context' with 'Consumer'
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
// an alternative way to set up the contextType.
// The line below should be outside of the class
// Button.contextType = LanguageContext;

export default Button;
