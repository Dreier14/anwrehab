import React, { Component } from "react";
import { Label } from "reactstrap";
import { FieldControl } from "react-reactive-form";

export default class AnwRehabTextArea extends Component {
  constructor() {
    super();
    this.state = {};
    this.textAreaRef = React.createRef();
  }

  render() {
    const { name } = this.props;
    return (
      <FieldControl
        name={name}
        render={({ handler, touched, hasError, meta }) => (
          <div>
            <textarea
              rows="4"
              ref={this.textAreaRef}
              {...handler()}
              placeholder={`Enter ${meta.label}`}
              className="form-control"
            ></textarea>
            <Label size="sm">
              {touched && hasError("required") && `${meta.label} is required`}
            </Label>
          </div>
        )}
      />
    );
  }
}
