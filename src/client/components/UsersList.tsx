import * as React from 'react';
import { } from 'react-redux';
import { fetchUsers } from '../actions';
import { connect } from 'react-redux';

//@connect(mapStateToProps, mapDispatchToProps)
export default class UsersList extends React.Component<any, any> {
    componentDidMount() {
        
    }
    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        });
    }
    render() {
        return (
            <div>
                Here's the big list of users:
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        fetchUsers: fetchUsers
    }
}
connect(mapStateToProps, { fetchUsers })(UsersList)