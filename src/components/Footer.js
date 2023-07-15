import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function Footer () {
    return (
        <div className="footer--container">
            <a href="https://github.com">
                <FontAwesomeIcon icon={faGithubSquare} class="social-icon" />
            </a>
            <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitterSquare} class="social-icon" />
            </a>
            <a href="https://facebook.com/">
                <FontAwesomeIcon icon={faFacebookSquare} class="social-icon" />
            </a>
            <a href="https://instagram.com/">
                <FontAwesomeIcon icon={faInstagramSquare} class="social-icon" />
            </a>
        </div>  
    )  
};

export default Footer;