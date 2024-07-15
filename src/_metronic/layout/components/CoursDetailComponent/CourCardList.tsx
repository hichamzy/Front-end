import { Link } from "react-router-dom";
import { useCourseStore } from "../../../../app/services/courses";

const CourCardList = () => {
	const { course } = useCourseStore();
	if (!course) return null;
	return (
		<div className="row gx-5 gx-xl-8 mb-5 mb-xl-8 justify-content-center">
			{course.Elements.map((element, i) => (
				<div key={i} className="col-lg-4 mb-8 position-relative">
					<Link
						to="#"
						className="card hover-elevate-up card-contents shadow-sm card-xxl-stretch parent-hover"
					>
						<div className="card-header" style={{ backgroundColor: "#f3f6ff" }}>
							<h3 className="card-title">
								<div className="card-toolbar">
									<h3
										className="card-title"
										dangerouslySetInnerHTML={{
											__html: element.IconBody,
										}}
									></h3>
								</div>
							</h3>

							<div className="card-toolbar">
								<span
									className={`badge badge-light-${
										element.Status ?? "success"
									} fw-bold me-10 px-4 py-3`}
								>
									{element.Status}
								</span>
								<input
									className="form-check-input"
									type="checkbox"
									onChange={(e) => e.stopPropagation()}
								/>
							</div>
						</div>
						<div className="card-body text-center text-white d-flex align-items-center">
							<h4 className="w-100">{element.ElementName}</h4>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default CourCardList;
