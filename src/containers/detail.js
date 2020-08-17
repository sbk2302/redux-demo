import React from 'react';
import { connect } from 'react-redux';
class Detail extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <h2>Details Added!!</h2>
               <h4>First Name: {this.props.firstname}</h4>
               <br></br>
                <h4>Last Name: {this.props.lastname}</h4>
                <br></br>
                <h4>Score: {this.props.score}</h4>
            </div>
         );
    }
}
function convertStoreToPropsForFriendDetail(store){
    console.log("Detail has received store....")
    console.log(store);
    return {
        firstname: store.firstname,
        lastname:store.lastname,
        score:store.score
    
    }
}
 
export default connect(convertStoreToPropsForFriendDetail)(Detail);