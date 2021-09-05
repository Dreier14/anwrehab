import React, { PureComponent } from "react";
import { Button, Collapse, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import AdminEventsInfo from "./AdminEventsInfo";
import Calendar from "../Calendar/Calendar";
import DashboardCard from "./DashboardCard.js";
import { getDashboardData } from "../../redux/actions/adminActions";
// import { } from '../../redux/actions/eventActions';
// import { } from '../../redux/actions/eventActions';
import Nav from "../Nav/Nav";
import Icon from "react-icons-kit";
import { meter } from "react-icons-kit/icomoon/meter";
import { users } from "react-icons-kit/feather/users";
import { user } from 'react-icons-kit/feather/user';
import { speech_bubbles } from "react-icons-kit/ikons/speech_bubbles";
import { calendar } from "react-icons-kit/feather/calendar";
import { Roles } from "../../constants/users";
import AdminApi from "../../api/AdminApi";
import "./Dashboard.css";
import "bootstrap";

class AnwRehabDashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin:
        Roles[props.currentUser && props.currentUser.lkRoleId] !== "Therapist",
      allUsers: [],
      openUsers: false,
      openTestimonials: false,
      openEvents: false,
    };
    this.toggleOpenUsers = this.toggleOpenUsers.bind(this);
    this.toggleOpenEvents = this.toggleOpenEvents.bind(this);
    this.toggleOpenTestimonials = this.toggleOpenTestimonials.bind(this);
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    const { dispatch } = this.props;
    dispatch(getDashboardData());
  }

  toggleOpenUsers() {
    this.setState((prevState) => ({
      openUsers: !prevState.openUsers,
    }));
  }

  toggleOpenEvents() {
    this.setState((prevState) => ({
      openEvents: !prevState.openEvents,
    }));
  }

  toggleOpenTestimonials() {
    this.setState((prevState) => ({
      toggleOpenTestimonials: !prevState.openTestimonials,
    }));
  }

  render() {
    const { isAdmin, openUsers, openEvents, openTestimonials, allUsers } = this.state;
    const { currentUser } = this.props;
    if (!currentUser) return <Redirect to="/" />;

    return (
      <React.Fragment>
        <div>
          <div className="dashboard-background">
            <Container>
              <Row>
                <Icon icon={meter} size={30} />
                <h2>{currentUser.firstName} Dashboard</h2>
              </Row>
            </Container>
            {isAdmin ? (
              <div className="d-flex flex-column">
                <Button
                  color="primary"
                  onClick={this.toggleOpenUsers}
                  style={{ marginBottom: "1rem" }}
                  className="text-left"
                >
                  <Icon icon={users} size={25} />
                  {openUsers ? "Close" : "Open"} Users
                </Button>
                <Collapse isOpen={openUsers}>
                  {allUsers && (
                    <Row md="3">
                      {allUsers.map((user) => (
                        <Calendar
                          key={user.id}
                          name={user.firstName + " " + user.lastName}
                        />
                      ))}
                    </Row>
                  )}
                </Collapse>
                <Button
                  color="primary"
                  onClick={this.toggleOpenTestimonials}
                  style={{ marginBottom: "1rem" }}
                  className="text-left"
                >
                  <Icon icon={speech_bubbles} size={25} />
                  {openTestimonials ? "Close" : "Open"} Testimonials
                </Button>
                <Collapse isOpen={openTestimonials}>
                  {allUsers && (
                    <Row md="3">
                      {allUsers.map((user) => (
                        <Calendar
                          key={user.id}
                          name={user.firstName + " " + user.lastName}
                        />
                      ))}
                    </Row>
                  )}
                </Collapse>
                <Button
                  color="primary"
                  onClick={this.toggleOpenEvents}
                  style={{ marginBottom: "1rem" }}
                  className="text-left"
                >
                  <Icon icon={calendar} size={25} />
                  {openEvents ? "Close" : "Open"} Events
                </Button>
                <Collapse isOpen={openEvents}>
                  <AdminEventsInfo />
                </Collapse>
              </div>
            ) : (
                <div className="d-flex flex-column">
                    <DashboardCard 
                        footer="ABCD Footer"
                        header={
                            <React.Fragment>
                                <Icon icon={user} size={25} />
                                Users
                            </React.Fragment>
                        }
                        body="ABCD Body"
                    />
                    <DashboardCard
                        footer="ABCD Footer"
                        header={
                            <React.Fragment>
                                <Icon icon={speech_bubbles} size={25} />
                                Testimonials
                            </React.Fragment>
                        }
                        body="ABCD Body"
                    />
                    <DashboardCard
                        footer="ABCD Footer"
                        header={
                            <React.Fragment>
                                <Icon icon={calendar} size={25} />
                                Events
                            </React.Fragment>
                        }
                        body={
                            <Calendar
                                name={currentUser.firstName + " " + currentUser.lastName}
                            />
                        }
                    />
                </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  apiCallsInProgress: state.api.apiCallsInProgress,
});

export default withRouter(connect(mapStateToProps)(AnwRehabDashboard));
