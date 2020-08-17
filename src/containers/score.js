import React from 'react';
import { bindActionCreators } from 'redux';
import clickScore from '../actions/clickscore';
import { connect } from 'react-redux'

class Score extends React.Component {
    state = {}
    render() {
        return (
            <div>
                Score:
                <input type="number" onChange={(e) => this.props.clickScore(e.target.value)}></input>
            </div>
        );
    }
}
function dispatchToProps(dispatch) {
    return bindActionCreators({
        clickScore: clickScore
    }, dispatch)
}
export default connect(null, dispatchToProps)(Score);