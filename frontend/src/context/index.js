import { createContext, useState } from "react";

const DevContext = createContext();

export const DevProvider = ({ children }) => {
	const [dev, setDev] = useState([]);
	const [singleDev, setSingleDev] = useState(null);

	const getDev = async () => {
		const response = await fetch("http://localhost:8000/projects", {
			method: "GET",
		});
		const jsonData = await response.json();
		if (response.ok) {
			setDev(jsonData);
		}
	};

	const addDev = async (data) => {
		const response = await fetch("http://localhost:8000/projects", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const jsonData = await response.json();

		if (response.ok) {
			setDev(jsonData);
		}
	};

	const getSingleDev = async (id) => {
		const response = await fetch(`http://localhost:8000/project/${id}`, {
			method: "GET",
		});

		const jsonData = await response.json();

		if (response.ok) {
			setSingleDev(jsonData);
		}
	};

	const getQuery = (q) => {
		const searchDev = dev.filter((dev) => dev.body.techStack.includes(q));

		setDev(searchDev);
	};

	let contextData = {
		dev: dev,
		addDev: addDev,
		getDev: getDev,
		getQuery: getQuery,
		singleDev: singleDev,
		getSingleDev: getSingleDev,
	};

	return (
		<DevContext.Provider value={contextData}>{children}</DevContext.Provider>
	);
};

export default DevContext;
