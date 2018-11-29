
import React, { Component } from 'react';
import { Container, Header, Divider, Grid, Button, Table, Icon } from 'semantic-ui-react';


class UserList extends Component {
  //
  render() {
    return (
      <Container style={{ margin: '2em' }}>
        <Header as='h1' content='사용자 목록' />
        <Divider />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button primary floated="right">등록</Button>
              <Button floated="right">새로고침</Button>
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

            <Table.Row>
              <Table.Cell>email</Table.Cell>
              <Table.Cell>name</Table.Cell>
              <Table.Cell>phone</Table.Cell>
              <Table.Cell textAlign='center'>
                <Icon name="angle right" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </Container>
    )
  }
}

export default UserList;
