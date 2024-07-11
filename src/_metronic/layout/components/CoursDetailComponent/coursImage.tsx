import { useCourseStore } from "../../../../app/services/courses";

const CoursImage = () => {
	const { course } = useCourseStore();
	if (!course) return null;

	return (
		<>
			<div className="col-xl-3">
				{/*begin::Tiles Widget 4*/}
				<div className="card mb-8 h-200px card-xl-stretch">
					{/*begin::Body*/}
					<div className="card-body align-items-center">
						<div className="text-center d-flex justify-content-center align-items-center">
							<img src={course.Photo} width="240px" />
						</div>
					</div>
					{/*end::Body*/}
				</div>
				{/*end::Tiles Widget 4*/}
			</div>
		</>
	);
};

export default CoursImage;
