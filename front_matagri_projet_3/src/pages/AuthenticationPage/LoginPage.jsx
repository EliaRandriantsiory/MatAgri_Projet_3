import React from 'react';

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
    
        // Vérification de la validité des données de connexion
        if (email === '') {
            setError('Veuillez saisir votre adresse e-mail.');
        } else if (password === '') {
            setError('Veuillez saisir votre mot de passe.');
        } else {
            // Effectuer la logique de connexion
            setError(''); // Réinitialiser l'erreur en cas de succès
    
            // Ajoutez ici votre code pour gérer la connexion
            // Par exemple, vous pouvez utiliser une API pour vérifier les informations de connexion
    
            // Exemple fictif pour la gestion de connexion réussie
            const mockApiResponse = {
                success: true,
                message: 'Connexion réussie !'
            };
    
            // Vérifier la réponse de l'API
            if (mockApiResponse.success) {
                // Connexion réussie
                alert(mockApiResponse.message);
    
                // Réinitialiser les champs du formulaire
                setEmail('');
                setPassword('');
            } else {
                // Connexion échouée
                setError(mockApiResponse.message);
            }
        }
    };

    return (
        <div className="login-page section-b-space">
            <div className="container">
                <div className="row">
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
                                    <input type="password" className="form-control" id="review" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button type="submit" className="btn btn-solid" onClick={handleLogin}>Login</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 right-login">
                        <h3>New Customer</h3>
                        <div className="theme-card authentication-right">
                            <h6 className="title-font">Créer un compte</h6>
                            <a href="#" className="btn btn-solid">Créer un compte</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;