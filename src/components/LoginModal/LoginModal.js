import React, { Component } from "react";
import axios from "axios";
import { Button, Col, Modal, ModalBody, ModalFooter, CustomInput, Form, FormGroup } from "reactstrap";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "bootstrap";
import "./LoginModal.css";

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
          <ModalHeader toggle={toggleModal}>Login</ModalHeader>
          <ModalBody>
          
          </ModalBody>
          <ModalFooter>
              <Button color="primary" type="submit">
                  Login
              </Button>{" "}
              <Button color="secondary" onClick={this.closeModal}>
                  Cancel
              </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
