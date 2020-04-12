import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../Context/LanguageContext";
import ColorContext from "../Context/ColorContext";

const App = () => {
	const [language, setLanguage] = useState("English");
	return (
		<div className="ui container">
			<div>
				Select A language
				<i
					className="flag us"
					onClick={() => {
						setLanguage("English");
					}}
				></i>
				<i
					className="flag nl"
					onClick={() => {
						setLanguage("Dutch");
					}}
				></i>
			</div>
			<ColorContext.Provider value="pink">
				<LanguageContext.Provider value={language}>
					<UserCreate></UserCreate>
				</LanguageContext.Provider>
			</ColorContext.Provider>
		</div>
	);
};
export default App;
