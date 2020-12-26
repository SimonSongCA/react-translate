import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // set up the property of language to the current Button object
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}
// an alternative way to set up the contextType.
// The line below should be outside of the class
// Button.contextType = LanguageContext;

export default Button;
