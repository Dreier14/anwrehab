import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminApi from './api/AdminApi';
import './App.css';
import Nav from './components/Nav/Nav';
import routes from "./routes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    };
  }

  componentDidMount() {
    const { currentUser } = this.props;
    try {
      let componentState = this;
      setInterval(
        function() {
          if(!currentUser) return;
          return AdminApi.getNotifications()
              .then(function(notifications) {
                componentState.setState({notifications})
              })
              .catch(function(error) {
                console.log(error);
              });
        },
        3000
      );
      setInterval(
        function() {}
      )
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const { notifications } = this.state;
    return (
      <div>
        <Nav notifications={notifications} />
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
})

export default withRouter(connect(mapStateToProps)(App));
