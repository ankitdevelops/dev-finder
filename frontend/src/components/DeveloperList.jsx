import React, { useContext, useEffect } from "react";
import DevContext from "../context";
import { Link } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";

const DeveloperList = () => {
	const { getDev, dev } = useContext(DevContext);
	useEffect(() => {
		getDev();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	if (dev) {
		return (
			<div>
				<div className="container">
					<div className="row mx-auto ">
						{dev.map((dev, index) => (
							<div className="col-md-4 " key={index}>
								<div className="card my-2">
									<img
										src={dev.body.image}
										className="card-img-top"
										alt="proj-img"
									/>
									<div className="card-body">
										<h5 className="card-title">{dev.body.title}</h5>
										<p className="card-text">
											{dev.body.description.substring(0, 100)}...
										</p>
										<Link to={`/${dev.id}`} className="btn btn-dark">
											View Details
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container d-flex justify-content-center ">
				<BounceLoader size={150} />;
			</div>
		);
	}
};

export default DeveloperList;
