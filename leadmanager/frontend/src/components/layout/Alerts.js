import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    error !== prevProps.error &&
      (error.msg.name && alert.error(`Name: ${error.msg.name}`),
      error.msg.email && alert.error(`Email: ${error.msg.email}`),
      error.msg.message && alert.error(`Message: ${error.msg.message}`));
      
    message !== prevProps.message &&
      (message.deleteLead && alert.success(message.deleteLead),
      message.addLead && alert.success(message.addLead));
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
