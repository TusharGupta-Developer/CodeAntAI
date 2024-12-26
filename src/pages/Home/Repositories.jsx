import React from "react";
import "./Repositories.css";
import { useNavigate } from "react-router-dom";

function Repositories() {

    const navigate = useNavigate();

    const repositories = [
        { name: "design-system", type: "Public", language: "React", size: "7320 KB", updated: "1 day ago" },
        { name: "codeant-ci-app", type: "Private", language: "Javascript", size: "5871 KB", updated: "2 days ago" },
        { name: "analytics-dashboard", type: "Private", language: "Python", size: "4521 KB", updated: "5 days ago" },
        { name: "mobile-app", type: "Public", language: "Swift", size: "3096 KB", updated: "3 days ago" },
        { name: "e-commerce-platform", type: "Private", language: "Java", size: "6210 KB", updated: "6 days ago" },
        { name: "blog-website", type: "Public", language: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
        { name: "social-network", type: "Private", language: "PHP", size: "5432 KB", updated: "7 days ago" },
        { name: "Youtube", type: "Public", language: "Python", size: "50432 KB", updated: "10 days ago" },
    ];

    const handleAddRepository = () => {
        navigate("/signin");
    };

    return (
        <section className="repositories section deskSection">
            <h1 className="section__title" onClick={handleAddRepository} >Repositories</h1>
            <p className="repositories__count">33 total repositories</p>
            <div className="repositories__actions">
                <button className="button refresh-button" onClick={handleAddRepository}>Refresh All</button>
                <button
                    className="button add-button"
                    onClick={handleAddRepository}
                >
                    + Add Repository
                </button>
            </div>
            <input
                type="text"
                className="repositories__search"
                placeholder="Search Repositories"
            />
            <ul className="repositories__list">
                {repositories.map((repo, index) => (
                    <li key={index} className="repository">
                        <div className="repository__details">
                            <h3 className="repository__name">{repo.name}</h3>
                            <div className={`repository__type ${repo.type.toLowerCase()}`}>
                                {repo.type}
                            </div>
                        </div>
                        <div className="repository__meta">
                            <span className="repository__language">{repo.language}</span>
                            <span className="repository__size">{repo.size}</span>
                            <span className="repository__updated">{repo.updated}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Repositories;
