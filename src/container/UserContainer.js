import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../action'
import UserComponent from '../component/UserComponent'
import { searchUser } from '../fetchAPI/fetchAPI';

class UserContainer extends Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {

        return (
            <div>
                <UserComponent {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'day la statetoProps');
    return {
        listUser: state.myReducer.listUser,

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(Actions.getUserRequest()),
        addUser: (payload) => dispatch(Actions.addUserRequest(payload)),
        deleteUser: (payload) => dispatch(Actions.deleteUserRequest(payload)),
        updateUser: (payload) => dispatch(Actions.updateUserRequest(payload)),
        searchUser: (payload) => dispatch(Actions.searchUserRequest(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);