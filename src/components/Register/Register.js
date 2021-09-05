import React, { Component } from 'react';
import {
    FormBuilder,
    FieldGroup,
    Validators
} from 'react-reactive-form';
import {
    Modal, ModalBody, ModalFooter,ModalHeader
} from 'reactstrap';
import PropTypes from 'prop-types';
import TextArea from './TextArea';
import Select from './Select';
import Input from './Input';
import { register } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import './Login.css';


class AnwRehabRegister extends Component {
    constructor(){
        super();
        this.handleReset = this.handleReset.bind(this);
        this.login = this.login.bind(this);
    }

    registerForm = FormBuilder.group({
        uniqueId: ["", Validators.required],
        username: ["", Validators.required],
        email: ["", Validators.email],
        photo: "",
        firstName: ["", Validators.required],
        middleName: "",
        lastName: ["", Validators.required],
        information: ["", Validators.required],
        lkServiceId: ["", Validators.required],
        lkRoleId: 3,
        password: ["", Validators.required],
        rememberMe: true
    });

    handleReset() {
        this.registerForm.reset();
    }

    register(e) {
        e.preventDefault();
        const { dispatch, currentUser } = this.props;
        const { id } = currentUser.info;
        const {  uniqueId, username, photo, firstName, middleName, lastName, information, lkServiceId, lkRoleId } = this.loginForm.value;
        dispatch(register({creatorId: id, uniqueId, username, email, photo, firstName, middleName, lastName, information, lkServiceId, lkRoleId}));
        this.handleReset();
    }

    render() {
        const { isModalOpen, toggleModal, closeModal } = this.props;
        return (
            <div style={{height: '20em'}}>
                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <FieldGroup
                        control={this.loginForm}
                        render={({_, invalid}) => (
                            
                                <form onSubmit={this.login}>
                                    <ModalHeader toggle={closeModal}>
                                        <p>Register</p>
                                    </ModalHeader>
                                    <ModalBody>
                                        <Input name="uniqueId" label="Unique #" />
                                        <Input name="photo" label="Photo" type="file" />
                                        <Input name="username" label="Username" />
                                        <Input name="email" label="Email" />
                                        <Input name="password" label="Password" type="password" />
                                        <Input name="firstName" label="First Name" />
                                        <Input name="middleName" label="Middle Name" />
                                        <Input name="lastName" label="Last Name" />
                                        <TextArea name="information" label="Information about of therapist" />
                                        {/* <Select name="lkServiceId" label="Service the therapist provides" options, optionIdKey, optionLabelKey, optionValueKey /> */}
                                    </ModalBody>
                                    <ModalFooter>
                                        <button className="btn btn-secondary" type="button" onClick={this.handleReset}>Cancel</button>
                                        <button className="btn btn-primary" type="submit" disabled={invalid}>Register</button>
                                    </ModalFooter>
                                </form>
                        )}
                    />
                </Modal>
            </div>
        );
    }
}

AnwRehabRegister.propTypes = {
    isModalOpen: PropTypes.bool,
    toggleModal: PropTypes.func,
    closeModal: PropTypes.func
};

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

export default connect(mapStateToProps)(AnwRehabRegister);