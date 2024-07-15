import React from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

interface HomeProps {
    idToken: string;
    Login: () => void;
    Logout: () => void;
}

const Home: React.FC<HomeProps> = ({ idToken, Login, Logout }) => {
    return (
      
        <div className="home">
            <p className="text-center fs-5 fw-bold">
                Authenticating a React App using Azure AD B2C
            </p>
            <AuthenticatedTemplate>
                <div className="alert alert-success" role="alert">
                    You are authenticated! 😊
                    <button type="button" className="btn btn-dark btn-sm float-end" onClick={Logout}>Logout</button>
                </div>
                <div className="card">
                    <div className="card-header">
                        Id Token
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{idToken}</li>
                        <li className="list-group-item">Paste the above on <span><a href="https://jwt.ms" target="_blank" rel="noopener noreferrer">jwt.ms</a></span> to decode the token</li>
                    </ul>
                </div>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <div className="alert alert-warning" role="alert">
                    You are not authenticated 🥺
                    <button type="button" className="btn btn-dark btn-sm float-end" onClick={Login}>Login</button>
                </div>
            </UnauthenticatedTemplate>
        </div>
        
    );
};

export default Home;