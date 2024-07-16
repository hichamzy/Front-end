import { PageTitle } from "../../../_metronic/layout/core";
import CoursInfo from "../../../_metronic/layout/components/CoursDetailComponent/coursInfo";
import CoursImage from "../../../_metronic/layout/components/CoursDetailComponent/coursImage";

import CourscardList from "../../../_metronic/layout/components/CoursDetailComponent/CourCardList";
import { useQuery } from "react-query";
import { getCourseById } from "../../services/courses";
import { useParams } from "react-router-dom";
import CoursProgression from "../../../_metronic/layout/components/CoursDetailComponent/CoursProgression/CoursProgression";

const CoursDetail = () => {
	const { id } = useParams();

	const {
		isError,
		isLoading,
		data: course,
	} = useQuery({
		queryKey: "course-by-id",
		queryFn: () => getCourseById(id!),
	});

	if (isError) {
		return <div>Une erreur s'est produite</div>;
	}

	if (isLoading || !course) {
		return <div>Chargement...</div>;
	}

	return (
		<div>
			<PageTitle>Bonjour Sanae Mrabet</PageTitle>
			<div className="row gx-5 gx-xl-8 mb-5 mb-xl-8">
				<CoursImage photo={course.Photo} />
				<CoursInfo course={course} />
				<CoursProgression chartColor="primary" chartHeight="200px" value={69} />
			</div>
			<CourscardList elements={course.Elements} />
		</div>
	);
};

export default CoursDetail;
