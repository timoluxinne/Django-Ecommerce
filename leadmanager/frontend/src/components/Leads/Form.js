import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../redux/leads/leadsActions";

export class Form extends Component {
  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({
        name:'',
        email:'',
        message:''
    });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <div className="card card-body my-3">
          <h3 className="text-center card-title">Add Lead</h3>
          <form method="post" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                id="message"
                value={message}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <button type='submit' className="btn btn-block btn-info">Add Lead</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
