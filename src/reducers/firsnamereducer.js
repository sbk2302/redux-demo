


const clickName = function clickFirstName(state = null, action) {

    switch (action.type) {
        case "First_Name":

            return action.payload


        default:
            break;
    }

    return state

}

export default clickName