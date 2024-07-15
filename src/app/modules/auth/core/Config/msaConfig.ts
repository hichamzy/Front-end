export interface MsalConfig {
    auth: {
      clientId: string;
      authority: string;
      knownAuthorities: string[];
      redirectUri: string;
      postLogoutRedirectUri: string;
      navigateToLoginRequestUrl: boolean;
    };
    cache: {
      cacheLocation: 'sessionStorage' | 'localStorage';
      storeAuthStateInCookie: boolean;
    };
  }
  
  export const msalConfig: MsalConfig = {
    auth: {
      clientId: '97b38229-b8c2-43e8-b6ed-604167894be1',
      authority: 'https://TetouanB2C.b2clogin.com/TetouanB2C.onmicrosoft.com/B2C_1_ppn',
      knownAuthorities: ['TetouanB2C.b2clogin.com'],
      redirectUri: 'http://localhost:3000/',
      postLogoutRedirectUri: 'http://localhost:3000/',
      navigateToLoginRequestUrl: false,
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    }
  };
  