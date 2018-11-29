
import React, { Component } from 'react';
import { Modal, Form, Grid, Button } from 'semantic-ui-react';

class AddressModal extends Component {

  render() {
    return (
      <Modal
        open={true}
      >
        <Modal.Content>
          <Form size='large'>
            <Form.Field>
              <label>명칭</label>
              <input placeholder="명칭" />
            </Form.Field>
            <Form.Field>
              <label>도시</label>
              <input placeholder="도시" />
            </Form.Field>
            <Form.Field>
              <label>우편번호</label>
              <input placeholder="우편번호" />
            </Form.Field>

            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Button primary floated="right">추가</Button>
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

export default AddressModal;
