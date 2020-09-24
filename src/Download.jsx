import React, { Component } from "react";
import jsPDF from "jspdf";

class Download extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	createPDF = () => {
		let doc = new jsPDF("p", "pt");
		doc.text(20, 20, JSON.stringify(this.props.data, null, 2));
		doc.setFont("courier");
		doc.save("Curriculum.pdf");
	};

	render() {
		return (
			<button onClick={this.createPDF} className="add-button">
				Generate PDF
			</button>
		);
	}
}

export default Download;
