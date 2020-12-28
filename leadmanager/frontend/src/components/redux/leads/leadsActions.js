import axios from "axios";
import {
  ADD_LEAD,
  CREATE_MESSAGE,
  DELETE_LEADS,
  GET_ERRORS,
  GET_LEADS,
} from "../types";

const actionLead = (type, payload) => ({
  type,
  payload,
});

export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => dispatch(actionLead(GET_LEADS, res.data)))
    .catch((err) => console.log(err));
};

export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(() => {
      dispatch(actionLead(DELETE_LEADS, id));
      dispatch(actionLead(CREATE_MESSAGE, { deleteLead: "Lead Deleted" }));
    })
    .catch((err) =>
      dispatch(
        actionLead(GET_ERRORS, {
          msg: err.response.data,
          status: err.response.status,
        })
      )
    );
};

export const addLead = (lead) => (dispatch) => {
  axios
    .post("/api/leads/", lead)
    .then((res) => {
      dispatch(actionLead(ADD_LEAD, res.data));
      dispatch(actionLead(CREATE_MESSAGE, { addLead: "Lead Added" }));
    })
    .catch((err) =>
      dispatch(
        actionLead(GET_ERRORS, {
          msg: err.response.data,
          status: err.response.status,
        })
      )
    );
};
