import React, { Component } from "react";
import { Label } from "reactstrap";
import { FieldControl } from "react-reactive-form";

export default class AnwRehabSelect extends Component {
  constructor() {
    super();
    this.state = {};
    this.selectRef = React.createRef();
  }

  render() {
    const { name, options, optionIdKey, optionLabelKey, optionValueKey } = this.props;
    return (
      <FieldControl
        name={name}
        render={({ handler, touched, hasError, meta }) => (
          <div>
            <select
              ref={this.selectRef}
              {...handler()}
              placeholder={`Enter ${meta.label}`}
              className="form-control"
            >
                {options && options.map(opt => <option key={opt[optionIdKey]} value={opt[optionValueKey]}>{opt[optionLabelKey]}</option>)}
            </select>
            <Label size="sm">
              {touched && hasError("required") && `${meta.label} is required`}
            </Label>
          </div>
        )}
      />
    );
  }
}
