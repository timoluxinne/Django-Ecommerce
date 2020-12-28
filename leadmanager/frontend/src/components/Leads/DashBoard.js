import React, { Fragment } from 'react';
import Form from './Form';
import Leads from './Leads';

const DashBoard = () => {
    return (
        <Fragment>
            <Form />
            <Leads />
        </Fragment>
    );
};

export default DashBoard;