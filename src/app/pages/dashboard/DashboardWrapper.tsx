import { FC, useState } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getCourses } from "../../services/courses";
import { Course } from "../../../types";

const SearchCard: FC = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<>
			<div className="card">
				<div
					className="card-header cursor-pointer user-select-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<h3 className="card-title">
						<i className="fa-solid fa-filter fs-2 me-2"></i>
						Recherche
					</h3>
					<div className="card-toolbar">
						<i className={`fa fa-angle-${isOpen ? "up" : "down"} fs-4`}></i>
					</div>
				</div>
				{isOpen && (
					<div className="card-body">
						<div className="row">
							<div className="col-md-10">
								<div className="row">
									<div className="col-lg-3">
										<label className="form-label" htmlFor="domaines">
											Domaines
										</label>
										<select
											className="form-select form-select-solid"
											id="domaines"
										>
											<option value=""></option>
											<option value="1">Domaines 1</option>
											<option value="2">Domaines 2</option>
											<option value="3">Domaines 3</option>
										</select>
									</div>
									<div className="col-lg-3">
										<label className="form-label">Module:</label>
										<select className="form-select form-select-solid">
											<option value=""></option>
											<option value="1">Module 1</option>
											<option value="2">Module 2</option>
											<option value="3">Module 3</option>
										</select>
									</div>
									<div className="col-lg-3">
										<label className="form-label">Unités:</label>
										<select className="form-select form-select-solid">
											<option value=""></option>
											<option value="1">Unité 1</option>
											<option value="2">Unité 2 </option>
											<option value="3">Unité 3</option>
										</select>
									</div>
									<div className="col-lg-3">
										<label className="form-label">Chapitres</label>
										<select className="form-select form-select-solid">
											<option value=""></option>
											<option value="1">Chapitre 1</option>
											<option value="2">Chapitre 2</option>
											<option value="3">Chapitre 3</option>
										</select>
									</div>
								</div>
							</div>
							<div className="col-md-2">
								<label className="form-label opacity-0">Status:</label>
								<button className="btn btn-primary w-100">
									<i className="fa-solid fa-filter"></i>
									Filter
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

const CourseCard: FC<{
	course: Course;
}> = ({ course: { id, CourseName, Description, Photo, Progession } }) => {
	const progress = Progession ?? 0;
	return (
		<Link to={`/coursdetail/${id}`}>
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
					<img src={Photo} alt="" className="card-img-top mb-10" />
					<h5 className="card-title">{CourseName}</h5>
					<p className="card-text">{Description}</p>
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

const CoursesList: FC<{ courses: Course[] }> = ({ courses }) => {
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

const DashboardPage: FC = () => {
	//const {professeur}=useProfesseurStore()
	//	queryFn:()=> getCoursesByEmail(professeur!.email),
	const {
		isError,
		isLoading,
		data: courses,
	} = useQuery({
		queryKey: "courses",
		queryFn: getCourses,
	});

	if (isError) {
		return <div>Erreur lors de la récupération des données</div>;
	}
	if (isLoading || !courses) {
		return <div>Chargement...</div>;
	}
	return (
		<div className="row g-5 g-xl-10 mb-5 mb-xl-10">
			<div className="col-12">
				<SearchCard />
			</div>
			<div className="col-12">
				<CoursesList courses={courses} />
			</div>
		</div>
	);
};

const DashboardWrapper: FC = () => {
	return (
		<>
			<PageTitle>Bonjour Sanae Mrabet</PageTitle>
			<DashboardPage />
		</>
	);
};

export { DashboardWrapper };
