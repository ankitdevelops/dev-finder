import React from "react";
import { Link } from "react-router-dom";
const Button = () => {
	return (
		<Link
			to="/add-proj"
			style={{
				position: "fixed",
				right: "10px",
				bottom: "10px",
				borderRadius: "50px",
			}}
			className="btn btn-primary btn-md"
		>
			Add Project
		</Link>
	);
};

export default Button;
