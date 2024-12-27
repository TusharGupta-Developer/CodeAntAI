import React from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const handleAddRepository = () => {
        navigate("/");
    };

    return (
        <div className="signin-container">
            {/* Left side - Stats Section */}
            <div className="stats-container">
                <div className="stats-card">
                    <h3 className="stats-title">AI to Detect & Autofix Bad Code</h3>
                    <div className="stats-details">
                        <div>
                            <span className="stats-value">30+</span>
                            <span className="stats-label">Language Support</span>
                        </div>
                        <div>
                            <span className="stats-value">10K+</span>
                            <span className="stats-label">Developers</span>
                        </div>
                        <div>
                            <span className="stats-value">100K+</span>
                            <span className="stats-label">Hours Saved</span>
                        </div>
                    </div>
                </div>
                <div className="additional-stats">
                    <div className="chart-icon">
                        <i className="ri-pie-chart-line"></i>
                    </div>
                    <div>
                        <span className="stats-value">500K+</span>
                        <span className="stats-label">Issues Fixed</span>
                        <span className="stats-growth">+14% This week</span>
                    </div>
                </div>
            </div>


            {/* Right side - Sign-In Section */}
            <div className="signin-card">
                {/* <img src="logo.png" alt="CodeAnt AI Logo" className="signin-logo" /> */}
                <span className="signin-logo">CodeAnt AI</span>
                <h1 className="signin-title">Welcome to CodeAnt AI</h1>

                <div className="signin-toggle">
                    <button className="toggle-button active" onClick={handleAddRepository}>SAAS</button>
                    <button className="toggle-button" onClick={handleAddRepository}>Self Hosted</button>
                </div>

                <div className="signin-buttons">
                    <button className="signin-btn github" onClick={handleAddRepository}>
                        <i className="ri-github-fill"></i> Sign in with Github
                    </button>
                    <button className="signin-btn bitbucket" onClick={handleAddRepository}>
                        <i className="fab fa-bitbucket"></i> Sign in with Bitbucket
                    </button>

                    <button className="signin-btn azure" onClick={handleAddRepository}>
                        <i className="ri-microsoft-fill"></i> Sign in with Azure Devops
                    </button>
                    <button className="signin-btn gitlab" onClick={handleAddRepository}>
                        <i className="ri-gitlab-fill"></i> Sign in with GitLab
                    </button>
                    <button className="signin-btn sso" onClick={handleAddRepository}>
                        <i className="ri-key-fill"></i>  Sign in with SSO
                    </button>
                </div>


                <p className="signin-footer">
                    By signing up you agree to the <a href="#">Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
};

export default SignIn;
