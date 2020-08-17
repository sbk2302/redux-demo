import React from 'react';
import clickFirstName from '../actions/clickfirstname'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class firstName extends React.Component {

    render() {
        return (
            <div>
                FirstName:
                <input type="text" onChange={(e) => this.props.clickFirstName(e.target.value)}></input>

            </div>
        );
    }
}
function dispatchToProps(dispatch) {
    return bindActionCreators({
        clickFirstName: clickFirstName,
    }, dispatch)
}


export default connect(null, dispatchToProps)(firstName);