import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Voor nu loggen we alleen de ingevulde gegevens in de console.
        console.log({ email, password, username });
    };

    return (
        <>
            <h1>Registreren</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    Gebruikersnaam:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
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
                <button type="submit">Registreren</button>
            </form>
            <p>
                Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.
            </p>
        </>
    );
}

export default SignUp;
