import React, { useContext } from "react";
import LanguageContext from "../Context/LanguageContext";
import ColorContext from "../Context/ColorContext";

export default function Button() {
	// const langauge = useContext(LanguageContext);
	// const text = langauge === "English" ? "Sumbit" : "DutchSubmit";
	// console.log(langauge);

	const renderButton = (color) => {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{(value) => {
						return value === "English"
							? "EngSUMBIT"
							: "DutchSubmit";
					}}
				</LanguageContext.Consumer>
			</button>
		);
	};
	return (
		<ColorContext.Consumer>
			{(color) => renderButton(color)}
		</ColorContext.Consumer>
	);
}

//Note => <LanguageContext.Consumer></LanguageContext.Consumer> k andar sirf ek function hona chaiye {} aisa
