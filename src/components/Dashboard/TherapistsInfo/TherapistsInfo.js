import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Roles } from '../../constants/users';
import './UpdateTherapists.css';
import 'bootstrap';

class TherapistsInfo extends PureComponent {
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
            </div>
        );   
    }
}

const mapStateToProps = state => ({
    apiCallsInProgress: state.api.apiCallsInProgress
});

export default connect(mapStateToProps)(TherapistsInfo);