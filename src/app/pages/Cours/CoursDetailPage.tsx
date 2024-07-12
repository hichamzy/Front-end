import { PageTitle } from "../../../_metronic/layout/core";
import CoursInfo from "../../../_metronic/layout/components/CoursDetailComponent/coursInfo";
import CoursImage from "../../../_metronic/layout/components/CoursDetailComponent/coursImage";
import CoursProgression from "../../../_metronic/layout/components/CoursDetailComponent/CoursProgression/CoursProgression";

import CourscardList from "../../../_metronic/layout/components/CoursDetailComponent/CourCardList";
import { useQuery } from "react-query";
import { useCourseStore, getCourseById } from "../../services/courses";
import { useParams } from "react-router-dom";
const CoursDetail = () => {
	const { id } = useParams();

	const { setCourse } = useCourseStore();
	const { isError } = useQuery({
		queryKey: "courses",
		queryFn: () => getCourseById(id!),
		onSuccess: (data) => setCourse(data),
	});

	if (isError) {
		return <div>Une erreur s'est produite</div>;
	}
	return (
		<div>
			<PageTitle breadcrumbs={[]}>Bonjour Sanae Mrabet</PageTitle>
			<div className="row gx-5 gx-xl-8 mb-5 mb-xl-8">
				<CoursImage />
				<CoursInfo />
				<CoursProgression chartColor="primary" chartHeight="200px" value={69} />
			</div>
			<CourscardList />
		</div>
	);
};

export default CoursDetail;
