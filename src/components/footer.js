// 3rd-party
import React from 'react';

// local
import '../../public/css/style.css';
import GithubPNG from '../../public/static/github.png'
import LinkedinPNG from '../../public/static/linkedin.png'
import GmailPNG from '../../public/static/gmail.png'
import ResumePDF from '../../public/static/Resume.pdf'


export default class FooterComponent extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="more-link-intro">
                    Now, seeking 2018 summer internship ! Feel free to contact me .
                    You can find me in Linkedin, Github or by Email !
                </div>
                <div className="more-link-content">
                    <a className="link-style" target="_blank" href="https://github.com/lancher">
                        <div className="logo-circle-wrapper">
                            <div className="logo-circle">
                                <img className="logo-circle-github" src={GithubPNG} width="20px" height="20px"/>
                           </div>
                        </div>
                    </a>

                    <a className="link-style" target="_blank" href={ResumePDF}>
                        <div className="logo-circle-wrapper">
                            <div className="logo-circle">
                                <div className="logo-circle-resume">RESUME</div>
                            </div>
                        </div>
                    </a>

                    <a className="link-style" target="_blank" href="https://www.linkedin.com/in/shihao-liu/">
                        <div className="logo-circle-wrapper">
                            <div className="logo-circle">
                                <img className="logo-circle-linkedin" src={LinkedinPNG} width="20px" height="20px"/>
                            </div>
                        </div>
                    </a>

                    <a className="link-style" href="mailto:shihao.liu@asu.edu">
                        <div className="logo-circle-wrapper">
                            <div className="logo-circle">
                                <img className="logo-circle-mail" src={GmailPNG} width="24px" height="24px"/>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="copyright">
                   Copyright @ shihao-liu · Powered by React.js
                </div>

            </div>
        );
    }
}
