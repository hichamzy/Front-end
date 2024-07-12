import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HeaderWrapper } from "./components/header";
import { RightToolbar } from "../partials/layout/RightToolbar";
import { ScrollTop } from "./components/scroll-top";
import { Content } from "./components/content";
import { FooterWrapper } from "./components/footer";
import { Sidebar } from "./components/sidebar";
import { ActivityDrawer, DrawerMessenger, InviteUsers, UpgradePlan } from "../partials";
import { PageDataProvider } from "./core";
import { reInitMenu } from "../helpers";
import { ToolbarWrapper } from "./components/toolbar";
import { useQuery } from "react-query";
import { getProfesseurByEmail, useProfesseurStore } from "../../app/services/professeurs";

const MasterLayout = () => {
	const location = useLocation();
	const { setProfesseur } = useProfesseurStore();

	const { isError } = useQuery({
		queryKey: "get-professeur",

		queryFn:()=>{
			//return getProfesseurByEmail("ABDELMOULA.HARFI@taalim.ma")
			return getProfesseurByEmail()
		},		
		onSuccess: (data) => setProfesseur(data),
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		reInitMenu();
	}, [location.key]);

	if (isError) {
		return (
			<div className="alert alert-danger" role="alert">
				Une erreur s'est produite lors de la récupération des données
			</div>
		);
	}

	return (
		<PageDataProvider>
			<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
				<div className="app-page flex-column flex-column-fluid" id="kt_app_page">
					<HeaderWrapper />
					<div
						className="app-wrapper flex-column flex-row-fluid"
						id="kt_app_wrapper"
					>
						<Sidebar />
						<div className="app-main flex-column flex-row-fluid" id="kt_app_main">
							<div className="d-flex flex-column flex-column-fluid">
								<ToolbarWrapper />
								<Content>
									<Outlet />
								</Content>
							</div>
							<FooterWrapper />
						</div>
					</div>
				</div>
			</div>

			{/* begin:: Drawers */}
			<ActivityDrawer />
			<RightToolbar />
			<DrawerMessenger />
			{/* end:: Drawers */}

			{/* begin:: Modals */}
			<InviteUsers />
			<UpgradePlan />
			{/* end:: Modals */}
			<ScrollTop />
		</PageDataProvider>
	);
};

export { MasterLayout };
