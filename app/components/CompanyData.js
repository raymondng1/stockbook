import React, { Component } from 'react';
import { Form, Button , Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

class CompanyData extends Component {
	render() {
		const { companyInformation } = this.props;
		if (!this.props.companyInformation) {
			return <div> </div>;
		}
		return (
			<div>
        <span> 
          Website: <Nav.Link href={companyInformation.website} > {companyInformation.website} </Nav.Link>
        </span>
				<div>  <span style={{fontWeight:'bold'}}> Description: </span> {companyInformation.description} </div>
				<div> <span style={{fontWeight:'bold'}}> CEO :</span>{companyInformation.CEO}</div>
				<div> <span style={{fontWeight:'bold'}}> Number of Employees:</span> {JSON.parse(companyInformation.employees)}</div>
				<div> <span style={{fontWeight:'bold'}}> Type of Company: </span> {companyInformation.tags[0]}</div>
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
