import React from 'react';
import clickLastName from '../actions/clicklastname'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class LastName extends React.Component {
    state = {}
    render() {
        return (
            <div>
                LastName:
                <input type="text" onChange={(e) => this.props.clickLastName(e.target.value)}></input>
            </div>
        );
    }
}
function DispatchToProps(dispatch) {
    return bindActionCreators({
        clickLastName: clickLastName
    }, dispatch)
}

export default connect(null, DispatchToProps)(LastName);