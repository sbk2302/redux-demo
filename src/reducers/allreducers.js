import {combineReducers} from "redux";
import firsnamereducer from "./firsnamereducer";
import lastnamereducer from "./lastnamereducer";
import scorereducer from "./scorereducer";

const allReducers = combineReducers({
    firstname: firsnamereducer,
    lastname: lastnamereducer,
    score: scorereducer

    
})

export default allReducers