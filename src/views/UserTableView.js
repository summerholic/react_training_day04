
import React, { Component } from 'react';
import { Container, Header, Divider, Grid, Button, Table, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom'; 
import autobind from 'autobind-decorator';

@autobind
class UserTableView extends Component {
  //
  routerUser(userId) {
    const {history} = this.props;
    history.push(`/users/${userId}`);
  }


  render() {
    const { users, routeUserBasePath, onRouteUser, onClickReload } = this.props;

    return (
      <Container style={{ margin: '2em' }}>
        <Header as='h1' content='사용자 목록' />
        <Divider />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button primary floated="right">등록</Button>
              <Button floated="right" onClick={() => onClickReload()}>새로고침</Button>
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
                <Table.Row key={user.email}>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.phone}</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Link to={`${routeUserBasePath}/${user.id}`}>
                      <Icon name="angle right" />
                    </Link>
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

export default UserTableView;
