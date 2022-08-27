import React from "react";
import Button from "../components/Button";
import DeveloperList from "../components/DeveloperList";
import Search from "../components/Search";

const HomePage = () => {
	return (
		<div>
			<Search />
			<DeveloperList />
			<Button />
		</div>
	);
};

export default HomePage;
