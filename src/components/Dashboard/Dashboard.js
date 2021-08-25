import React, { PureComponent } from 'react';
import { Button, Collapse, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import Nav from '../Nav/Nav';
import Icon from 'react-icons-kit';
import { meter } from 'react-icons-kit/icomoon/meter';
import { Roles } from '../../constants/users';
import './Dashboard.css';
import 'bootstrap';

class AnwRehabDashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: Roles[props.currentUser && props.currentUser.lkRoleId] !== 'Therapist',
            allUsers: [],
            openCalendars: false
        };
        this.toggleOpenCalendars = this.toggleOpenCalendars.bind(this);
    }

    componentDidMount() {
        const { isAdmin } = this.state;
        if(isAdmin) this.setState({ allUsers: [] })
    }

    toggleOpenCalendars() {
        this.setState(prevState => ({
            openCalendars: !prevState.openCalendars
        }));
    }

    render() {
        const { isAdmin, openCalendars, allUsers } = this.state;
        const { currentUser } = this.props;
        window.scrollTo(0, 0);
        if(!currentUser) return <Redirect to="/" />
        
        return (
            <div>
                <Nav/>
                <div>
                    <div className="dashboard-background">
                        <Container>
                            <Row>
                                <Icon icon={meter} size={30} />
                                <h2>{currentUser.firstName} Dashboard</h2>
                            </Row>
                        </Container>
                        {
                            isAdmin
                            ?   <React.Fragment>
                                    <Button 
                                        color="primary" 
                                        onClick={this.toggleOpenCalendars} 
                                        style={{ marginBottom: '1rem' }}
                                    >
                                        {openCalendars ? 'Close' : 'Open'} Calendar
                                    </Button>
                                    <Collapse isOpen={openCalendars}>
                                    {
                                        allUsers && <Row md="3">
                                                        {allUsers.map(user => <Calendar key={user.id} name={user.firstName + ' ' + user.lastName} />)}
                                                    </Row>
                                    }
                                    </Collapse>
                                </React.Fragment>
                            : <Calendar name={currentUser.firstName + ' ' + currentUser.lastName} />
                        }
                        
                    </div>
                </div>   
            </div>
        );   
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(AnwRehabDashboard);

