import React, { useState, useContext } from "react";
import DevContext from "../context";

const Search = () => {
	const [text, setText] = useState("");
	const { getQuery } = useContext(DevContext);
	const onChange = (e) => {
		e.preventDefault();
		getQuery(text);
	};

	return (
		<div>
			<div className="p-5 mb-4 ">
				<div className="py-5">
					<h1 className="col-md-5 display-5 fs-3  mx-auto text-center">
						Dev-Finder
					</h1>
					<div className="col-md-5 mx-auto" style={{ marginTop: 30 }}>
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								name="keyword"
								placeholder="Search Tech Stack"
								aria-label="Search"
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
							<button className="btn btn-dark text-white" onClick={onChange}>
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
