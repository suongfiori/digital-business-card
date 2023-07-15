import React from "react";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header () {
    return (
        <div className="info">
            <div className="info-details">
                <h1 className="profile-name">Laura Smith</h1>
                <span className="profile-role">Frontend Developer</span>
                <a 
                className="website" 
                href="laurasmith.website"
                target="_blank"
                rel="noreferrer"
                >
                    laurasmith.website
                </a>
                <div className="info--contact">
                    <a href="mailto:laurasmith@gmail.com">
                        <button className="button button--email">
                        <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
                        Email
                        </button>
                    </a>
                    <a href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        >
                        <button className="button button--linkedin">
                            <FontAwesomeIcon icon={faLinkedin} className="info--icon"/>
                            LinkedIn
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Header;

