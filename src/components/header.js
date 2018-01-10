// 3rd-party
import React from 'react';

// local
import '../../public/css/style.css';


export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="section-1">
                    <div className="drop">
                        <div className="drop1"></div>
                        <div className="drop2"></div>
                        <div className="drop3"></div>
                        <div className="drop4"></div>
                    </div>
                    {/*<div className="logo"></div>*/}
                </div>

                <div className="section-2">
                    <div className="slogan">
                        <div className="slogan-header">Python & Javascript Programmer</div>
                        <div className="slogan-content">
                            I love coding and re-think every details on software developments
                        </div>
                    </div>
                    <div className="photo-wrapper">
                        <div className="photo">
                            <div className="selfie"></div>
                        </div>
                    </div>
                    <div className="about-me">
                        <div className="about-me-header">
                            <div className="about-me-header-text-1">Who is "Shi Hao" ?</div>
                            <div className="about-me-header-text-2">
                                Hi, my name is Shi Hao or just called me Steve. I love coding.
                                My passion is split between my love for Open Source projects and
                                my drive to study aboard to work with different people with
                                various capabilities and learn from each other !
                            </div>
                        </div>
                        <div className="about-me-content">
                            <ul className="about-me-content-text-1">
                                <li>'18 - Working on Open-Source (
                                    <a href="https://github.com/sindresorhus/got" target="_blank" className="about-me-content-link">Got</a>)
                                </li>
                                <li>'17 - Studied computer science (
                                    <a href="https://www.asu.edu/" target="_blank" className="about-me-content-link">ASU</a>)
                                </li>
                                <li>'16 - Contributed to Open-Source (
                                    <a href="https://github.com/tornadoweb/tornado" target="_blank" className="about-me-content-link">Tornado</a>)
                                </li>
                                <li>'15 - Full-Stack engineer (
                                    <a href="https://www.qnap.com" target="_blank" className="about-me-content-link">QNAP</a>)
                                </li>
                                <li>'14 - Joined military service (
                                    <a href="https://www.klcg.gov.tw/en/Default/Index" target="_blank" className="about-me-content-link">Keelung</a>)
                                </li>
                                <li>'13 - Developed web for Capstone Project
                                </li>
                                <li>'12 - Built independent iOS app (
                                    <a href="http://appcrawlr.com/ios/oilbox" target="_blank" className="about-me-content-link">OilBox</a>)
                                </li>
                                <li>'11 - Designed processor simulator (
                                    <a href="https://github.com/Lancher/process-simulator" target="_blank" className="about-me-content-link">MIPS</a>)
                                </li>
                                <li>'10 - Congratulated my first terminal gaming app
                                </li>
                                <li>'09 - Studied computer science (
                                    <a href="http://nthu-en.web.nthu.edu.tw/bin/home.php" target="_blank" className="about-me-content-link">NTHU</a>)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
