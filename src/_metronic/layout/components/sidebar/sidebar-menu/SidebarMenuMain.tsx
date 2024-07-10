import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
	return (
		<>
			<SidebarMenuItem
				to="/dashboard"
				icon="element-11"
				title="Accueil"
				fontIcon="bi-app-indicator"
			/>
			<SidebarMenuItem
				to="#"
				icon="ki-solid ki-people fs-2x"
				title="Mes classes "
				fontIcon="bi-layers"
			/>
			<SidebarMenuItemWithSub
				to="#"
				title="Ma gestion scolaire"
				icon="ki-solid ki-teacher fs-2x"
				fontIcon="bi-layers"
			>
				<SidebarMenuItem to="#" title="Absences de mes élèves" hasBullet={true} />
				<SidebarMenuItem to="#" title="Mes Notes" hasBullet={true} />
			</SidebarMenuItemWithSub>

			<SidebarMenuItem
				to="#"
				icon="ki-solid ki-book-open fs-2x"
				title="Mes cours"
				fontIcon="bi-layers"
			/>
			<SidebarMenuItem
				to="#"
				icon="ki-solid ki-abstract-28 fs-2x"
				title="Sondages"
				fontIcon="bi-layers"
			/>
			<SidebarMenuItem
				to="#"
				icon="ki-solid ki-chart-pie-4 fs-2x"
				title="Tableau de bord"
				fontIcon="bi-layers"
			/>
		</>
	);
};

export { SidebarMenuMain };
