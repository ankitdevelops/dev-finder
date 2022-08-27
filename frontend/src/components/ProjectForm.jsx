import React, { useState, useContext } from "react";
import { TagsInput } from "react-tag-input-component";
import DevContext from "../context/index";
import { Link, useNavigate } from "react-router-dom";

const ProjectForm = () => {
	const [title, setTitle] = useState("");
	const [sourceCode, setSourceCode] = useState("");
	const [deployedLink, setDeployedLink] = useState("");
	const [video, setVideo] = useState("");
	const [techStack, setTechStack] = useState([]);
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [country, setCountry] = useState("");
	const [phone, setPhone] = useState("");
	const [error, setError] = useState("");
	const { addDev } = useContext(DevContext);

	const navigate = useNavigate();

	const data = {
		title: title,
		sourceCode: sourceCode,
		deployedLink: deployedLink,
		video: video,
		techStack: techStack,
		description: description,
		image: image,
		name: name,
		email: email,
		country: country,
		phone: phone,
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			(title,
			sourceCode,
			deployedLink,
			video,
			techStack,
			description,
			image,
			name,
			email,
			country,
			phone)
		) {
			addDev(data);
			setTitle("");
			setCountry("");
			setDeployedLink("");
			setDescription("");
			setEmail("");
			setImage("");
			setName("");
			setPhone("");
			setSourceCode("");
			setVideo("");
			setTechStack([]);
			navigate("/");
		} else {
			setError("Please fill up all the details");
		}
	};

	return (
		<section>
			<div className="container">
				<div className="col-md-8 mx-auto card p-3 my-5">
					<form className="form-group">
						<Link to="/" className="btn btn-dark my-2">
							Back
						</Link>
						<h6>Project Details</h6>
						<div className="row">
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingInput"
										placeholder="Your Project Title"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
										required
									/>
									<label htmlFor="floatingInput" className="text-capitalize">
										Project Title
									</label>
								</div>
							</div>
							<div className="col">
								<div className="form-floating">
									<input
										type="text"
										className="form-control"
										id="floatingPassword"
										placeholder="Source Code "
										value={sourceCode}
										onChange={(e) => setSourceCode(e.target.value)}
										required
									/>
									<label htmlFor="floatingPassword">Source Code</label>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingInput"
										placeholder="Deployed Link"
										value={deployedLink}
										onChange={(e) => setDeployedLink(e.target.value)}
										required
									/>
									<label htmlFor="floatingInput" className="text-capitalize">
										Deployed Link
									</label>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingInput"
										placeholder="Demo Video"
										value={video}
										onChange={(e) => setVideo(e.target.value)}
										required
									/>
									<label htmlFor="floatingInput" className="text-capitalize">
										Demo Video
									</label>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col ">
								<div className=" mb-3">
									<TagsInput
										value={techStack}
										onChange={setTechStack}
										name="techStack"
										placeHolder="Tech Stack"
										required
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="form-floating mb-3">
									<textarea
										className="form-control"
										placeholder="Project Description"
										id="floatingTextarea2"
										style={{ height: 100 }}
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										required
									/>
									<label
										htmlFor="floatingTextarea2"
										className="text-capitalize"
									>
										Project Description
									</label>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingInput"
										placeholder="Demo Video"
										value={image}
										onChange={(e) => setImage(e.target.value)}
										required
									/>
									<label htmlFor="floatingInput" className="text-capitalize">
										Project Thumbnail Link
									</label>
								</div>
							</div>
						</div>
						<h6 className="text-capitalize">Personal Details</h6>
						<div className="row">
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingInput"
										placeholder="Full Name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
									<label htmlFor="floatingInput" className="text-capitalize">
										Full Name
									</label>
								</div>
							</div>
							<div className="col">
								<div className="form-floating">
									<input
										type="email"
										className="form-control"
										id=""
										placeholder="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
									<label htmlFor="floatingPassword" className="text-capitalize">
										Email
									</label>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingInput"
										placeholder="Country"
										value={country}
										onChange={(e) => setCountry(e.target.value)}
										required
									/>
									<label htmlFor="floatingInput" className="text-capitalize">
										Country
									</label>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingInput"
										placeholder="Phone"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										required
									/>
									<label htmlFor="floatingInput " className="text-capitalize">
										Phone Number with country Code
									</label>
								</div>
							</div>
						</div>
						<button
							className="btn btn-dark btn-block"
							type="button"
							onClick={handleSubmit}
						>
							Add
						</button>
						<span className="mx-5 text-warning text-capitalize">{error}</span>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ProjectForm;
