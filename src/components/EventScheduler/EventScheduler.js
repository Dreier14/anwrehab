import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import "./LoginModal.css";
import { Button, Col, Modal, ModalBody, ModalFooter, CustomInput, Form, FormGroup } from "reactstrap";
import Nav from "../Nav/Nav";
import "bootstrap";

export default class extends Component {
  constructor() {
    this.state = {
      username: "",
      password: "",
    };
    this.login = this.login.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  login() {
    axios
      .post("/api/login")
      .then((response) => {
        /*
                TODO: Set redux state to login user
                Then navigate to the admin page based on the permissions
            */
      })
      .catch((err) => console.log("Cannot Login", err));
  }

  closeModal() {
    const { closeModal } = this.props;
    this.setState({ username: "", password: "" });
    closeModal();
  }

  render() {
    const { isModalOpen, toggleModal } = this.props;
    window.scrollTo(0, 0);
    return (
      <div>
        <Nav />
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <Form onSubmit={this.login}>
            <ModalHeader toggle={toggleModal}>Login</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <input
                        type="username"
                        name="username"
                        id="username"
                        placeholder="username"
                        onChange={e => this.setState({username: e.target.value})}
                        value={this.state.username}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        onChange={e => this.setState({password: e.target.value})}
                        value={this.state.password}
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" type="submit">
                    Login
                </Button>{" "}
                <Button color="secondary" onClick={this.closeModal}>
                    Cancel
                </Button>
            </ModalFooter>
            </Form>
        </Modal>
       </div>
    );
  }
}
