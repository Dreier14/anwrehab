import React, { Component } from "react";
import { Label } from "reactstrap";
import { FieldControl } from "react-reactive-form";

export default class AnwRehabInput extends Component {
  constructor() {
    super();
    this.state = {};
    this.inputRef = React.createRef();
  }

  render() {
    const { name, label, type } = this.props;
    return (
      <FieldControl
        name={name}

        render={({ handler, touched, hasError, meta }) => (
          <div>
            <input
              className="form-control"
              placeholder={`Enter ${meta.label}`}
              {...handler()}
              ref={this.inputRef}
              type={type}
            />
            <Label size="sm">
              {touched && hasError("required") && name == 'email' ? `Please enter a valid email.` : `${meta.label} is required`}
            </Label>
          </div>
        )}
        meta={{ label }}
      />
    );
  }
}
