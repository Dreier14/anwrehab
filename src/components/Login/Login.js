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
import Checkbox from './Checkbox';
import Input from './Input';
import { login } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthApi from '../../api/AuthApi';
import './Login.css';


class AnwRehabLogin extends Component {
    constructor(){
        super();
        this.handleReset = this.handleReset.bind(this);
        this.login = this.login.bind(this);
    }

    loginForm = FormBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
        rememberMe: true
    });

    handleReset() {
        const { closeModal } = this.props;
        this.loginForm.reset();
        closeModal();
    }

    async login(e) {
        e.preventDefault();
        const { closeModal, dispatch, history } = this.props;
        const { username, password, rememberMe } = this.loginForm.value;
        // try {
        //     const loggedInUser = await AuthApi.login({ username, password, rememberMe })
        //     localStorage.setItem("user", JSON.stringify(loggedInUser));
        // } catch(error) {
        //     console.log("Error:", error);
            
        // } finally {
        //     // dispatch(removeApiCallInProgress());
        // }
        dispatch(login({ username, password, rememberMe }));
        this.handleReset();
        setTimeout(() =>  history.push('/Dashboard'), 2000);
    }

    render() {
        const { isModalOpen, toggleModal, closeModal } = this.props;
        return (
            <div style={{height: '20em'}}>
                <Modal id="login-modal-container" isOpen={isModalOpen} toggle={toggleModal}>
                    <FieldGroup
                        control={this.loginForm}
                        render={({_, invalid}) => (
                                <form onSubmit={this.login} >
                                    <ModalHeader toggle={closeModal}>
                                        <p>Login</p>
                                    </ModalHeader>
                                    <ModalBody>
                                        <Input name="username" label="Username" />
                                        <Input name="password" label="Password" type="password" />
                                        <Checkbox name="rememberMe" label="Remember Me" />
                                    </ModalBody>
                                    <ModalFooter>
                                        <button id="cancel-button" className="btn btn-secondary" type="button" onClick={this.handleReset}>Cancel</button>
                                        <button id="login-submit-button" className="btn btn-primary" type="submit" disabled={invalid}>Login</button>
                                    </ModalFooter>
                                </form>
                        )}
                    />
                </Modal>
            </div>
        );
    }
}

AnwRehabLogin.propTypes = {
    isModalOpen: PropTypes.bool,
    toggleModal: PropTypes.func,
    closeModal: PropTypes.func
};

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

export default withRouter(connect(mapStateToProps)(AnwRehabLogin));