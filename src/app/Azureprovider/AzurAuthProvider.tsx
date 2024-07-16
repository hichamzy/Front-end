import { FC } from "react";
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";

export const AzurAuthProvider: FC<{
	children: React.ReactNode;
	instance: IPublicClientApplication;
}> = ({ children, instance }) => {
	return <MsalProvider instance={instance}>{children}</MsalProvider>;
};
