import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../components/AuthContext";


function SignIn() {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email); // Geef het e-mailadres door aan de login-functie.
    };

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Emailadres:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Wachtwoord:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Inloggen</button>
            </form>

            <p>
                Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.
            </p>
        </>
    );
}

export default SignIn;

