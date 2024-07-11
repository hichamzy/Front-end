import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../app/modules/auth";
import { Languages } from "./Languages";
import { toAbsoluteUrl } from "../../../helpers";
import { useProfesseurStore } from "../../../../app/services/professeurs";

const HeaderUserMenu: FC = () => {
	const { currentUser, logout } = useAuth();
	const { professeur } = useProfesseurStore();
	if (professeur === null) return null;
	
	return (
		<div
			className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
			data-kt-menu="true"
		>
			<div className="menu-item px-3">
				<div className="menu-content d-flex align-items-center px-3">
					<div className="symbol symbol-50px me-5">
						<img alt="Logo" src={toAbsoluteUrl("/media/avatars/300-3.jpg")} />
					</div>

					<div className="d-flex flex-column">
						<div className="fw-bolder d-flex align-items-center fs-5">
							{professeur.lastNameArabic} 
							<span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
								{professeur.subjects[0].nameFr}
							</span>
						</div>
						<a href="#" className="fw-bold text-muted text-hover-primary fs-7">
							{professeur.school.nameFr}
						</a>
					</div>
				</div>
			</div>

			<div className="separator my-2"></div>

			<div className="menu-item px-5">
				<Link to={"#"} className="menu-link px-5">
					Mes informations
				</Link>
			</div>
			

			<div className="menu-item px-5">
				<a href="#" className="menu-link px-5">
					<span className="menu-text">Ma boîte e-mail</span>
					<span className="menu-badge">
						<span className="badge badge-light-danger badge-circle fw-bolder fs-7">
							3
						</span>
					</span>
				</a>
			</div>

			<div className="menu-item px-5">
				<Link to={"#"} className="menu-link px-5">
					Mon portfolio
				</Link>
			</div>
		


			<div className="separator my-2"></div>
			<div className="menu-item px-5">
				<Link to={"#"} className="menu-link px-5">
					mode
				</Link>
			</div>
			<Languages />

			

			<div className="menu-item px-5">
				<a onClick={logout} className="menu-link px-5">
					se deconnecter
				</a>
			</div>
		</div>
	);
};

export { HeaderUserMenu };
