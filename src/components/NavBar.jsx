import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/banana-01.png"
import {AuthContext} from "./AuthContext";

function NavBar() {
    const { isAuth, user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav>
            <Link to="/">
        <span className="logo-container">
          <img src={logo} alt="logo" />
          <h3>Banana Security</h3>
        </span>
            </Link>

            <div>
                {isAuth ? (
                    <>
                        <span>Welkom, {user}!</span>
                        <button type="button" onClick={logout}>
                            Uitloggen
                        </button>
                    </>
                ) : (
                    <>
                        <button type="button" onClick={() => navigate("/signin")}>
                            Log in
                        </button>
                        <button type="button" onClick={() => navigate("/signup")}>
                            Registreren
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
