const scorereducer = function clickScore(state = null, action) {
    switch (action.type) {
        case "Score":
            return action.payload
        default: break;
    }
    return state
}
export default scorereducer