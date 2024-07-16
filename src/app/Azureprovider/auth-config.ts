export const msalConfig = {
	auth: {
		clientId: "97b38229-b8c2-43e8-b6ed-604167894be1", // This is the ONLY mandatory field that you need to supply.
		authority: "https://TetouanB2C.b2clogin.com/TetouanB2C.onmicrosoft.com/B2C_1_ppn", // Choose SUSI as your default authority.
		knownAuthorities: ["TetouanB2C.b2clogin.com"], // Mark your B2C tenant's domain as trusted.
		redirectUri: "http://localhost:5173/metronic8/react/demo1/", // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
		postLogoutRedirectUri: "http://localhost:5173/metronic8/react/demo1/", // Indicates the page to navigate after logout.
		navigateToLoginRequestUrl: false, // If 'true', will navigate back to the original request location before processing the auth code response.
	},
	cache: {
		cacheLocation: "sessionStorage", // Configures cache location. 'sessionStorage' is more secure, but 'localStorage' gives you SSO between tabs.
		storeAuthStateInCookie: false, // Set this to 'true' if you are having issues on IE11 or Edge
	},
};
