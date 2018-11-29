
import React, { Component } from 'react';
import { Container, Header, Divider, Grid, Button, Table, Icon } from 'semantic-ui-react';
import UserApi from '../api/UserApi';
import autobind from 'autobind-decorator';

@autobind
class UserList extends Component {
  //

  state = {
    users : []
  }

  componentDidMount() {
    this.findUserList();
  }

  findUserList() {
    UserApi.findUserList().then((users) => this.setState({users}));
    console.log(this.state.users);
  }

  onClickReload() {
    this.findUserList();
  }

  render() {
    const {users} = this.state
    return (
      <Container style={{ margin: '2em' }}>
        <Header as='h1' content='사용자 목록' />
        <Divider />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button primary floated="right">등록</Button>
              <Button floated="right" onClick={this.onClickReload}>새로고침</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Table celled>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>이메일</Table.HeaderCell>
              <Table.HeaderCell>이름</Table.HeaderCell>
              <Table.HeaderCell>전화번호</Table.HeaderCell>
              <Table.HeaderCell>상세보기</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              Array.isArray(users) && users.length > 0 ?
                users.map((user) =>
                <Table.Row>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.phone}</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Icon name="angle right" />
                  </Table.Cell>
                </Table.Row>
              )
              :
              <Table.Row>
                <Table.Cell>등록된 사용자가 없습니다.</Table.Cell>
              </Table.Row>
            }
            
          </Table.Body>
        </Table>

      </Container>
    )
  }
}

export default UserList;
