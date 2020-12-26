import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // set up the property of language to the current Button object
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary">{text}</button>;
  }
}
// an alternative way to set up the contextType.
// The line below should be outside of the class
// Button.contextType = LanguageContext;

export default Button;
