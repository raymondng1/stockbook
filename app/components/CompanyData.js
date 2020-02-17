import React, { Component } from 'react';
import { Form, Button , Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

class CompanyData extends Component {
	render() {
		const { companyInformation } = this.props;
		if (!this.props.companyInformation) {
			return <div> Insert Company </div>;
		}
		return (
			<div>
        <span> 
          Website: <Nav.Link> {companyInformation.website} </Nav.Link>
        </span>
				<div> Description: {companyInformation.description} </div>
				<div> CEO: {companyInformation.CEO}</div>
				<div> Number of Employees: {JSON.parse(companyInformation.employees)}</div>
				<div> Type of Company: {companyInformation.tags[0]}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		companyInformation: state.companyReducer
	};
};

export default connect(mapStateToProps)(CompanyData);
