/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

// import { Logout, AuthPage } from "../modules/auth";
import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorsPage } from "../modules/errors/ErrorsPage";
import { App } from "../App";
import { AuthenticatedTemplate, useMsal ,UnauthenticatedTemplate} from "@azure/msal-react";

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
	const { accounts, instance } = useMsal();
	if (accounts.length === 0) {
		instance.loginRedirect();
	}else(
		console.log(accounts)
	
	)
	
	return (
    <>
		<AuthenticatedTemplate>
			<BrowserRouter basename={BASE_URL}>
				<Routes>
					<Route element={<App />}>
						<Route path="error/*" element={<ErrorsPage />} />
						<Route path="/*" element={<PrivateRoutes />} />
						<Route index element={<Navigate to="/dashboard" />} />
						{/* <Route path="auth/*" element={<AuthPage />} />
							<Route path="*" element={<Navigate to="/auth" />} /> 
							<Route path="logout" element={<Logout />} />
						*/}
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthenticatedTemplate>
    
    </>
	);
};

export { AppRoutes };
