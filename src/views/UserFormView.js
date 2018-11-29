import React, {Component, Fragment} from 'react';
import autobind from 'autobind-decorator';
import { Form } from 'semantic-ui-react';

@autobind
class UserFormView extends Component{
    onChangeEmail(e) {
        const {onChangeUserProp} = this.props;
        onChangeUserProp('email', e.target.value);
    }

    onChangeName(e) {
        const {onChangeUserProp} = this.props;
        onChangeUserProp('name', e.target.value);
    }

    onChangePhone(e) {
        const {onChangeUserProp} = this.props;
        onChangeUserProp('phone', e.target.value);
    }

    render() {
        const { user} = this.props;
        return(
            <Fragment>
                <Form.Field>
                    <label>이메일</label>
                    <input value={user.email} onChange={this.onChangeEmail} />
                    <label>이름</label>
                    <input value={user.name} onChange={this.onChangeName} />
                    <label>전화번호</label>
                    <input value={user.phone} onChange={this.onChangePhone} />
                </Form.Field>
            </Fragment>
        )
    }
}

export default UserFormView