import React, {Component, Fragment} from 'react';
import { Header, Divider } from 'semantic-ui-react';

class PageHeader extends Component {
    render() {
        const {text} = this.props;
        return(
            <Fragment>
                <Header as='h1' content={text} />
                <Divider />
            </Fragment>
        )
    }
}

export default PageHeader;