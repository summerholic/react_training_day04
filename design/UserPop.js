
import React, { Component } from 'react';
import { Modal, Form, Grid, Button } from 'semantic-ui-react';

class UserPop extends Component {

  render() {
    return (
      <Modal
        open={true}
      >
        <Modal.Content>
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

            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Button primary floated="right">저장</Button>
                  <Button floated="right">취소</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default UserPop;
