import { Course } from "../../../../types";

const CoursInfo = ({ course }: { course: Course }) => {
	return (
		<>
			<div className="col-xl-6">
				<div className="card mb-8 h-150px card-xl-stretch">
					<div className="card-body align-items-center">
						<div className="text-center  d-flex justify-content-center align-items-center">
							<h1>{course.CourseName}</h1>
						</div>
						<div className="row g-0 justify-content-center">
							<div className="col-3">
								<div className="d-flex align-items-center me-2">
									<div className="symbol symbol-50px me-3">
										<div className="symbol-label bg-lighten">
											<i className="ki-duotone ki-profile-user fs-1">
												<span className="path1"></span>
												<span className="path2"></span>
												<span className="path3"></span>{" "}
												<span className="path4"></span>
											</i>{" "}
										</div>
									</div>

									<div>
										<div className="fs-4 text-gray-900 fw-bold">
											12
										</div>
										<div className="fs-7 text-muted fw-bold">
											Élèves
										</div>
									</div>
								</div>
							</div>

							<div className="col-3">
								<div className="d-flex align-items-center me-2">
									<div className="symbol symbol-50px me-3">
										<div className="symbol-label bg-lighten">
											<i className="ki-duotone ki-book-open fs-1">
												<span className="path1"></span>
												<span className="path2"></span>
												<span className="path3"></span>
												<span className="path4"></span>
											</i>{" "}
										</div>
									</div>

									<div>
										<div className="fs-4 text-gray-900 fw-bold">
											5
										</div>
										<div className="fs-7 text-muted fw-bold">
											Séances
										</div>
									</div>
								</div>
							</div>

							<div className="col-3">
								<div className="d-flex align-items-center me-2">
									<div className="symbol symbol-50px me-3">
										<div className="symbol-label bg-lighten">
											<i className="ki-duotone ki-time fs-1">
												<span className="path1"></span>
												<span className="path2"></span>
											</i>{" "}
										</div>
									</div>

									<div>
										<div className="fs-4 text-gray-900 fw-bold">
											5h
										</div>
										<div className="fs-7 text-muted fw-bold">
											Durée
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursInfo;
