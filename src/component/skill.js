import React, { Component } from 'react';
import { Cell, Grid, ProgressBar } from 'react-mdl';
class Skill extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{ display: 'flex' }}>{this.props.skill}
                        {/* Simple Progress Bar */}
                        <ProgressBar progress={this.props.progress} style={{ margin: 'auto', width: '75%' }} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}
export default Skill;
