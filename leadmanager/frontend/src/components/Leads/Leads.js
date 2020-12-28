import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteLead, getLeads } from "../redux/leads/leadsActions";

const Leads = ({ leads, getLeads, deleteLead }) => {
  useEffect(() => {
    getLeads();
  }, []);
  return (
    <div>
      <table className="table table-striped">
        <thead className="bg-info">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td><button onClick={() => deleteLead(lead.id)} className="btn btn-sm btn-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

const mapDispatchToProps = (dispatch) => ({
  getLeads: () => dispatch(getLeads()),
  deleteLead: (id) => dispatch(deleteLead(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
