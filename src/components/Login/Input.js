import React, { Component } from 'react';
import { Label } from 'reactstrap';
import {
    FieldControl,
} from 'react-reactive-form';
import Icon from 'react-icons-kit';
import { eye } from 'react-icons-kit/icomoon/eye';
import { eyeBlocked } from 'react-icons-kit/icomoon/eyeBlocked';


export default class AnwRehabInput extends Component {
    constructor(){
        super();
        this.state = {
            showPassword: false
        };
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
        this.inputRef = React.createRef();
    }

    togglePasswordVisibility(e) {
        e.stopPropagation();
        this.setState(prevState => {
            const newShowPasswordState = !prevState.showPassword;
            this.inputRef.current.type = newShowPasswordState ? "text" : "password";
            return {
                showPassword: newShowPasswordState
            };
        });
    }

    render() {
        const { name, label, type } = this.props;
        const { showPassword } = this.state;
        const isPasswordInput = name === 'password';
        return <FieldControl
                    name={name}
                    render={({handler, touched, hasError, meta}) => (
                        <div className={isPasswordInput && 'password-input-container'}>
                            <input 
                                name={name}
                                className={`form-control ${isPasswordInput && 'password'}`}
                                placeholder={`Enter ${meta.label}`} 
                                {...handler()}
                                ref={this.inputRef}
                                type={type}
                            />
                            {
                                isPasswordInput &&
                                <button
                                    id="see-password-button"
                                    type="button"
                                    onClick={this.togglePasswordVisibility}
                                    className='btn password-btn'
                                >
                                    {showPassword ? <Icon icon={eyeBlocked} size={17.5} /> : <Icon icon={eye} size={17.5} />}
                                </button>
                            }
                            <Label size="sm">
                                {touched
                                && hasError("required")
                                && `${meta.label} is required`}
                            </Label>
                        </div>  
                    )}
                    meta={{ label }}
                />
    }
}