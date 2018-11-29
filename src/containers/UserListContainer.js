import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import { Container, Button } from 'semantic-ui-react';
import LineButtons from '../shared/LineButtons';
import UserTableView from '../views/UserTableView';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'; 
import PageHeader from '../shared/PageHeader';
import userListAction from '../actions/userListAction';

@autobind
class UserListContainer extends Component {
    componentDidMount() {
        this.findUserList();
    }

    findUserList() {
        this.props.userListAction.findUsers();
    }

    // onClickReload() {
    //     this.props.userListAction;
    // }

    onRouteUser(id) {
        const {history} = this.props;
        history.push('/users/${id}');
    }
    render() {
        const {users} = this.props;

        return(
            <Container>
                {/* <PageHeader text='사용자 목록' />

                <LineButtons>
                    <Button onClick={this.onClickReload}>새로고침</Button>
                </LineButtons> */}

                <UserTableView
                    users = {users}
                    routeUserBasePath = '/users'
                    onRouteUser={this.onRouteUser}
                    onClickReload={this.findUserList}
                />
            </Container>
        )
    }
}

const mapStateToProps = ({userListState}) => ({
    users : userListState.users
})

const maptDispatchToProps = (dispatch) => ({
    userListAction : bindActionCreators(userListAction, dispatch)
})

export default connect(mapStateToProps, maptDispatchToProps)(UserListContainer);