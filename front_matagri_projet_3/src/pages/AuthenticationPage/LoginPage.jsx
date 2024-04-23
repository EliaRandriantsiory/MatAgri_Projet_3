import "../assets/css/StyleLoginPage.css";
import React, { useState } from 'react';

// Importation des fichiers CSS pour les composants externes (font-awesome, slick, animate, themify-icons, etc.)
import '../assets/css/vendors/font-awesome.css';
import '../assets/css/vendors/slick.css';
import '../assets/css/vendors/slick-theme.css';
import '../assets/css/vendors/animate.css';
import '../assets/css/vendors/themify-icons.css';
import '../assets/css/vendors/bootstrap.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            window.alert('Veuillez saisir une adresse e-mail valide.');
            return;
        }
        if (password === '') {
            setError('Veuillez saisir votre mot de passe.');
            return;
        }else{
            setError('');
    
            // Ajoutez ici votre code pour gérer la connexion

            const mockApiResponse = {
                success: true,
                message: 'Connexion réussie !'
            };
    
            if (mockApiResponse.success) {
                alert(mockApiResponse.message);
                setEmail('');
                setPassword('');
            } else {
                setError(mockApiResponse.message);
            }
        }
    };

    const handleForgotPassword = () => {
        // Ajoutez ici votre code pour gérer le mot de passe oublié
    };

    return (
        <div className="login-page section-b-space">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <h3>Login</h3>
                <div className="theme-card">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form className="theme-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
    <label htmlFor="review">Password</label>
    <div className="d-flex align-items-center">
        <input type="password" className="form-control" id="review" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </div>
    <div className="d-flex justify-content-end" style={{ marginTop: '-20px' }}>
    <a href="#" className="forgot-password" onClick={handleForgotPassword}>Mot de passe oublié ?</a>
</div>
</div>

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-solid" onClick={handleLogin}>Login</button>
                            <div className="authentication-right">
                                <a href="#" className="btn btn-solid">Créer un compte</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default Login;