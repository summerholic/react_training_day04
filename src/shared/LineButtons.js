import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

class LineButtons extends Component {
    render() {
        const {children} = this.props;

        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        {children}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default LineButtons;