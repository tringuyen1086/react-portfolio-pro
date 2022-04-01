import React from 'react';
import "./footer.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';


function Footer() {

    return (
        <div className="footer" id="footer">
        <ul>
            <li><a href="https://github.com/tringuyen1086" target="_blank" rel="noreferrer"><GitHubIcon className="icon"></GitHubIcon></a></li>
            <li><a href="https://www.linkedin.com/in/tri-nguyen-1086/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon"></LinkedInIcon></a></li>
            <li><a href="https://twitter.com/TriNguy19394776" target="_blank" rel="noreferrer"><Twitter className="icon"></Twitter></a></li>
        </ul>
    </div>
        );
}

export default Footer;