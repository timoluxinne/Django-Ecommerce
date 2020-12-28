import leadsReducer from "./leads/leadsReducer";
import { combineReducers } from "redux";
import errorsReducer from "./errors/errorsReducer";
import messagesReducer from "./messages/messagesReducer";

const rootReducer = combineReducers({
  leads: leadsReducer,
  errors: errorsReducer,
  messages: messagesReducer
});

export default rootReducer;
