import { useProfesseurStore } from "../../../../../app/services/professeurs";
import { MenuInnerWithSub } from "./MenuInnerWithSub";

export function MenuInner() {
	const { professeur } = useProfesseurStore();
	if (professeur === null) return null;
	const { levels } = professeur.subjects[0];
	return (
		<>
			{levels.map((level) => (
				<MenuInnerWithSub
					key={level.id}
					title={level.nameFr}
					to={`/level/${level.id}`}
					isMega
					menuPlacement="bottom-start"
					menuTrigger={`{default:'click', lg: 'hover'}`}
				>
					<div className="menu-active-bg px-8 px-lg-0">
						<div className="d-flex w-100 overflow-auto">
							<ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
								{level.classes.map((classe, i) => (
									<li className="nav-item mx-lg-1" key={classe.id}>
										<a
											className={
												"nav-link py-3 py-lg-6 text-active-primary " +
												(i === 0 ? "active" : "")
											}
											href="#"
											data-bs-toggle="tab"
											data-bs-target={"#tab-" + classe.id}
										>
											{classe.name}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div className="tab-content py-4 py-lg-8 px-lg-7">
							{level.classes.map((classe, i) => (
								<div
									className={
										"tab-pane w-lg-350px " + (i === 0 ? "active" : "")
									}
									id={"tab-" + classe.id}
									key={classe.id}
								>
									<div className="row">
										<div className="col-lg-12 mb-3">
											<div className="menu-item p-0 m-0">
												<a
													href="#0"
													className="menu-link check justify-content-between"
												>
													<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
														<i className="ki-duotone ki-element-11 text-primary fs-1">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
															<span className="path4"></span>
														</i>
													</span>
													<span
														className="d-flex flex-column"
														style={{
															marginLeft: "-45px",
														}}
													>
														<span className="fs-6 fw-bold text-gray-800">
															Accéder au cours
														</span>
														<span className="fs-7 fw-semibold text-muted">
															{classe.numberOfStudents}{" "}
															Élèves
														</span>
													</span>
													<div className="progress w-100px h-7px bg-success menu-progress bg-opacity-50 mt-7">
														<div
															className="progress-bar bg-success"
															role="progressbar"
															style={{ width: "50%" }}
														></div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
							{/*end:Tab pane*/}
						</div>
						{/*end:Tab content*/}
					</div>
					{/*end:Pages menu*/}
				</MenuInnerWithSub>
			))}
		</>
	);
}
