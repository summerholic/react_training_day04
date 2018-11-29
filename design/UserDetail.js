
import React, { Component, Fragment } from 'react';
import { Container, Header, Grid, Table, Button, Icon, Divider, Form } from 'semantic-ui-react';


class UserDetail extends Component {
  //
  render() {
    return (
      <Container style={{ margin: '2em' }}>
        <Header as='h1' content={`사용자 > 강부트`} />
        <Divider />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              {/*<Button primary floated="right">저장</Button>*/}
              <Button floated="right">목록</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />

        <Form>
          <Form.Field>
            <label>이메일</label>
            <input placeholder='이메일' />
          </Form.Field>

          <Form.Field>
            <label>이름</label>
            <input placeholder="이름" />
          </Form.Field>

          <Form.Field>
            <label>전화번호</label>
            <input placeholder="전화번호" />
          </Form.Field>
        </Form>

        <Container style={{ marginTop: '2em' }}>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Header as='h3'>
                  <Icon.Group size='small'>
                    <Icon name='square full' color='blue' />
                  </Icon.Group>
                  주소
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Button primary size="tiny" floated="right">주소등록</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Table celled>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>명칭</Table.HeaderCell>
                <Table.HeaderCell>도시</Table.HeaderCell>
                <Table.HeaderCell>우편번호</Table.HeaderCell>
                {/*<Table.HeaderCell />*/}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>name</Table.Cell>
                <Table.Cell>city</Table.Cell>
                <Table.Cell>zipCode</Table.Cell>
                {/*
                <Table.Cell width={2} textAlign="center">
                  <Button color="grey" size="mini" >삭제</Button>
                </Table.Cell>
                 */}
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
      </Container>
    )
  }
}

export default UserDetail;
