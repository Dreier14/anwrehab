import React, { Component } from 'react';
import {
    FieldControl,
} from 'react-reactive-form';
import { Label } from 'reactstrap';

export default class AnwRehabCheckbox extends Component {
    constructor(){
        super();
    }

    render() {
        const { name, label } = this.props;
        return (
            <FieldControl
            name={name}
            render={({handler}) => (
                <div className='remember-me-checkbox-container'>
                  <input name={name} {...handler("checkbox")}/>
                  <Label size="sm">
                    {label}
                  </Label>
                </div>
            )}
          />
        );
    }
}