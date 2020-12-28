import { CREATE_MESSAGE } from "../types";

const messagesReducer = (state={}, action) => {
    switch (action.type) {
        case CREATE_MESSAGE:
            return (state=action.payload)
        default:
            return state;
    }
}

export default messagesReducer