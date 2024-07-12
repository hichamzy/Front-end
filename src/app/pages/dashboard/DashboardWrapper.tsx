import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../_metronic/layout/core";
import { Link } from "react-router-dom";
import { useProfesseurStore } from "../../services/professeurs";
import { useCourseStore } from "../../services/courses";

const SearchCard: FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
		<div className="card card-search mb-8 card-xl-stretch">
		<div style={{backgroundColor:"#f3f6ff"}} className="card-header collapsible cursor-pointer rotate" data-bs-toggle="collapse" data-bs-target="#kt_docs_card_collapsible">
			<h3 className="card-title"><i className="ki-outline ki-filter-search text-primary me-3 fs-2x"></i> Recherche</h3>
			<div className="card-toolbar rotate-180">
				<i className="ki-duotone ki-down fs-1"></i>
			</div>
		</div>
		{/*begin::Body*/}
		<div id="kt_docs_card_collapsible" className="collapse show">
		<div className="card-body align-items-center">
			<div className="row mt-2">
				<div className="col-md-10">
					<div className="row">
						<div className="col-md-3">
							<div className="mb-10">
								<label className="form-label">Domaines</label>
								<select className="form-select form-select-solid">
								<option value="" selected disabled ></option>
									<option value="1">Domaine 1</option>
									<option value="2">Domaine 2</option>
									<option value="3">Domaine 3</option>
								</select>
							</div>
						</div>
						<div className="col-md-3">
							<div className="mb-10">
								<label className="form-label">Modules</label>
								<select className="form-select form-select-solid">
								<option value="" selected disabled ></option>
									<option value="1">Modules 1</option>
									<option value="2">Modules 2</option>
									<option value="3">Modules 3</option>
								</select>
							</div>
						</div>
						<div className="col-md-3">
							<div className="mb-10">
								<label className="form-label">Unités</label>
								<select className="form-select form-select-solid">
								<option value="" selected disabled ></option>
									<option value="1">Unité 1</option>
									<option value="2">Unité 2</option>
									<option value="3">Unité 3</option>
								</select>
							</div>
						</div>
						<div className="col-md-3">
							<div className="mb-10">
								<label className="form-label">Chapitres</label>
								<select className="form-select form-select-solid">
									<option value="" selected disabled></option>
									<option value="1">Chapitres 1</option>
									<option value="2">Chapitres 2</option>
									<option value="3">Chapitres 3</option>
								</select>
							</div>
						</div>
					</div>

				</div>
				
				<div className="col-md-2">
						<div className="mb-10">
							<button className="btn btn-md btn-primary w-100 mt-9 me-2"><i className="ki-duotone ki-filter-search fs-1"><span className="path1"></span><span className="path2"></span><span className="path2"></span></i> Filtrer</button>
						</div>
				</div>
			</div>
			
		</div>
	</div>
		{/*end::Body*/}
	</div>
    );
};
const CourseCard: FC<{
	course: {
		id: number;
		imageURL: string;
		title: string;
		description: string;
		progress: number;
	};
}> = ({ course: { id, imageURL, title, description, progress } }) => {
	return (
		<Link to={"/coursdetail/" + id}>
			<div className="card relative">
				<label
					htmlFor={`input-${id}`}
					style={{
						position: "absolute",
						top: "10px",
						right: "10px",
					}}
				></label>
				<div className="card-body">
					<img src={imageURL} alt="" className="card-img-top mb-10" />
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
				</div>
				<div className="card-footer border-0">
					<div className="d-flex justify-content-between fw-bold fs-6 opacity-50 w-100 mt-auto mb-2">
						<span>Terminé</span>
						<span>{progress}%</span>
					</div>
					<div className="progress w-100 h-10px bg-success menu-progress bg-opacity-50">
						<div
							className="progress-bar bg-success"
							role="progressbar"
							style={{ width: `${progress}%` }}
						></div>
					</div>
				</div>
			</div>
		</Link>
	);
};

const CoursesList: FC = () => {
	const courses = [
		{
			id: 1,
			imageURL: "/img1.png",
			title: "La digestion des aliments dans le tube digestif",
			description: "Sciences de la vie et de la terre",
			progress: 61,
		},
	];

	
	return (
		<div className="row g-5 g-xl-10">
			{courses.map((course) => (
				<div key={course.id} className="col-md-4">
					<CourseCard course={course} />
				</div>
			))}
		</div>
	);
};

const DashboardPage: FC = () => (
	<>
		<div className="row g-5 g-xl-10 mb-5 mb-xl-10">
			<div className="col-12">
				<SearchCard />
			</div>
			<div className="col-12">
				<CoursesList />
			</div>
		</div>
	</>
);

const DashboardWrapper: FC = () => {
	const { professeur } = useProfesseurStore();
	if (professeur === null) return null;
	const intl = useIntl();
	return (
		<>
			<PageTitle breadcrumbs={[]}>Bonjour {professeur.lastNameArabic}</PageTitle>
			<DashboardPage />
		</>
	);
};

export { DashboardWrapper };
