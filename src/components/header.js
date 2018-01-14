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
                                <li>Contributor of Node.js Open-Source (
                                    <a href="https://github.com/sindresorhus/got" target="_blank" className="about-me-content-link">Got</a>)
                                </li>
                                <li>Contributor of Open-Source (
                                    <a href="https://github.com/Lancher/docker-ubuntu-vnc-desktop" target="_blank" className="about-me-content-link">docker-desktop</a>)
                                </li>
                                <li>Committer of Python Open-Source (
                                    <a href="https://github.com/Lancher/increasing" target="_blank" className="about-me-content-link">Increasing</a>)
                                </li>
                                <li>React.js Blog (
                                    <a href="https://github.com/Lancher/blog" target="_blank" className="about-me-content-link">Blog</a>)
                                </li>
                                <li>Prototype of Raft Consensus Algorithm (
                                    <a href="https://github.com/Lancher/raft" target="_blank" className="about-me-content-link">Raft</a>)
                                </li>
                                <li>Taiwan Stock Crawler (
                                    <a href="https://github.com/Lancher/tw-stock" target="_blank" className="about-me-content-link">TW-Stock</a>)
                                </li>
                                <li>Contributor of Python Open-Source (
                                    <a href="https://github.com/tornadoweb/tornado" target="_blank" className="about-me-content-link">Tornado</a>)
                                </li>
                                <li>Comprehensive Cheatsheet (
                                    <a href="https://github.com/Lancher/cheatsheet" target="_blank" className="about-me-content-link">Python/Java/Node.js</a>)
                                </li>
                                <li>Linux Programming (
                                    <a href="https://github.com/Lancher/linux-programming-examples" target="_blank" className="about-me-content-link">C System Calls</a>)
                                </li>
                                <li>Network Programming (
                                    <a href="https://github.com/Lancher/network-programming-examples" target="_blank" className="about-me-content-link">IPv4/IPv6/TCP</a>)
                                </li>
                                <li>iOS Independent App (
                                    <a href="http://appcrawlr.com/ios/oilbox" target="_blank" className="about-me-content-link">OilBox</a>)
                                </li>
                                <li>MIPs/ARM Processor Simulator (
                                    <a href="https://github.com/Lancher/process-simulator" target="_blank" className="about-me-content-link">Simulator</a>)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
