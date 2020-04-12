import React, { Component } from "react";
import languageContext from "../Context/LanguageContext";

export default class Field extends Component {
	static contextType = languageContext;
	render() {
		console.log("Class Context", this.context);
		const name = this.context === "English" ? "Name" : "DutchName";
		return (
			<div>
				<label>
					<h3>{name}</h3>
				</label>
				<input></input>
			</div>
		);
	}
}
