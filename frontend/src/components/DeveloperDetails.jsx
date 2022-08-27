import React, { useContext, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { useParams, Link } from "react-router-dom";
import DevContext from "../context";

const DeveloperDetails = () => {
	const { getSingleDev, singleDev } = useContext(DevContext);
	const params = useParams();
	useEffect(() => {
		getSingleDev(params.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	if (singleDev) {
		return (
			<div className="container mt-5 mb-5">
				<div className="row d-flex justify-content-center">
					<div className="col-md-10">
						<div className="card">
							<div className="row">
								<div className="col-md-6">
									<div className="images p-3">
										<div className="text-center ">
											<img
												id="main-image"
												src={singleDev.body.image}
												style={{ width: "100%", objectFit: "cover" }}
												alt="proj-thumbnail"
											/>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="product p-4">
										<div className="d-flex justify-content-between align-items-center">
											<div className="d-flex align-items-center">
												<i className="fa fa-long-arrow-left" />
												<Link to="/" className="ml-1 btn btn-dark">
													Back
												</Link>
											</div>
											<i className="fa fa-shopping-cart text-muted" />
										</div>
										<div className="mt-4 mb-3">
											<h5 className="text-uppercase">{singleDev.body.title}</h5>
										</div>
										<p className="about">{singleDev.body.description}</p>
										<div className="sizes mt-5">
											<h6 className="text-uppercase">Tech Stack</h6>
											{singleDev.body.techStack.map((stack, index) => (
												<span className="badge text-bg-dark me-2" key={index}>
													{stack}
												</span>
											))}
										</div>
										<div className="sizes mt-5">
											<h6 className="text-uppercase">Developer Info</h6>
											<span className="badge text-bg-dark me-2">
												{singleDev.body.name}
											</span>
											<span className="badge text-bg-dark me-2">
												{singleDev.body.email}
											</span>
											<span className="badge text-bg-dark me-2">
												{singleDev.body.country}
											</span>
											<span className="badge text-bg-dark me-2">
												{singleDev.body.phone}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div
				className="container d-flex justify-content-center align-items-center"
				style={{ height: "100vh" }}
			>
				<BounceLoader size={150} />;
			</div>
		);
	}
};

export default DeveloperDetails;
