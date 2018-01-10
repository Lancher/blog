// 3rd-party
import React from 'react';
import { connect } from 'react-redux'

// local
import '../../public/css/style.css';
import GithubSVG from '../../public/static/github.svg'
import LinkedinSVG from '../../public/static/linkedin.svg'


class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "selected_circle_id": "0",
            "element_0_class": "box",
            "element_1_class": "github",
            "element_2_class": "box",
            "element_3_class": "linkedin",
            "element_4_class": "box",
            "element_10_class": "edge-line",
            "element_11_class": "circle",
            "element_12_class": "line",
            "element_13_class": "circle",
            "element_14_class": "line",
            "element_15_class": "circle",
            "element_16_class": "line",
            "element_17_class": "circle",
            "element_18_class": "edge-line",
        };

        this.handleCircleClick = this.handleCircleClick.bind(this);
        this.handleCircleOnMouseEnter = this.handleCircleOnMouseEnter.bind(this);
        this.handleCircleOnMouseLeave = this.handleCircleOnMouseLeave.bind(this);
    }

    handleCircleClick(e) {
        this.setState({"selected_circle_id": e.target.getAttribute("circle_id")}, () => {
            console.log(this.props);
        });
    }

    handleCircleOnMouseEnter(e) {
        if (e.target.getAttribute("element_id") == 1) {
            this.setState({
                "element_0_class": "smaller-box-enter",
                "element_1_class": "bigger-github-enter",
                "element_2_class": "smaller-box-enter",
            });
        } else if (e.target.getAttribute("element_id") == 3) {
            this.setState({
                "element_2_class": "smaller-box-enter",
                "element_3_class": "bigger-linkedin-enter",
                "element_4_class": "smaller-box-enter",
            });
        } else if (e.target.getAttribute("element_id") == 11) {
            this.setState({
                "element_10_class": "shorter-edge-line-enter",
                "element_11_class": "bigger-circle-enter",
                "element_12_class": "shorter-line-enter",
            });
        } else if (e.target.getAttribute("element_id") == 13) {
            this.setState({
                "element_12_class": "shorter-line-enter",
                "element_13_class": "bigger-circle-enter",
                "element_14_class": "shorter-line-enter",
            });
        } else if (e.target.getAttribute("element_id") == 15) {
            this.setState({
                "element_14_class": "shorter-line-enter",
                "element_15_class": "bigger-circle-enter",
                "element_16_class": "shorter-line-enter",
            });
        } else if (e.target.getAttribute("element_id") == 17) {
            this.setState({
                "element_16_class": "shorter-line-enter",
                "element_17_class": "bigger-circle-enter",
                "element_18_class": "shorter-edge-line-enter",
            });
        }
    }

    handleCircleOnMouseLeave(e) {
        if (e.target.getAttribute("element_id") == 1) {
            this.setState({
                "element_0_class": "smaller-box-leave",
                "element_1_class": "bigger-github-leave",
                "element_2_class": "smaller-box-leave",
            });
        } else if (e.target.getAttribute("element_id") == 3) {
            this.setState({
                "element_2_class": "smaller-box-leave",
                "element_3_class": "bigger-linkedin-leave",
                "element_4_class": "smaller-box-leave",
            });
        } else if (e.target.getAttribute("element_id") == 11) {
            this.setState({
                "element_10_class": "shorter-edge-line-leave",
                "element_11_class": "bigger-circle-leave",
                "element_12_class": "shorter-line-leave",
            });
        } else if (e.target.getAttribute("element_id") == 13) {
            this.setState({
                "element_12_class": "shorter-line-leave",
                "element_13_class": "bigger-circle-leave",
                "element_14_class": "shorter-line-leave",
            });
        } else if (e.target.getAttribute("element_id") == 15) {
            this.setState({
                "element_14_class": "shorter-line-leave",
                "element_15_class": "bigger-circle-leave",
                "element_16_class": "shorter-line-leave",
            });
        } else if (e.target.getAttribute("element_id") == 17) {
            this.setState({
                "element_16_class": "shorter-line-leave",
                "element_17_class": "bigger-circle-leave",
                "element_18_class": "shorter-edge-line-leave",
            });
        }
    }
    //"SuperGrotesk", "Roboto", "Helvetica", "Arial", sans-serif
    render() {
        return (
            <div className="navbar">
                <div className="logo-bar">
                    <div element_id="0" className={this.state.element_0_class} ></div>
                    <img element_id="1" className={this.state.element_1_class} onClick={this.handleCircleClick} onMouseEnter={this.handleCircleOnMouseEnter} onMouseLeave={this.handleCircleOnMouseLeave} src={GithubSVG}></img>
                    <div element_id="2" className={this.state.element_2_class} ></div>
                    <img element_id="3" className={this.state.element_3_class} onClick={this.handleCircleClick} onMouseEnter={this.handleCircleOnMouseEnter} onMouseLeave={this.handleCircleOnMouseLeave} src={LinkedinSVG}></img>
                    <div element_id="4" className={this.state.element_2_class} ></div>
                </div>
                <div element_id="10" className={ this.state.element_10_class }></div>
                <div element_id="11" className={ this.state.element_11_class } onClick={this.handleCircleClick} onMouseEnter={this.handleCircleOnMouseEnter} onMouseLeave={this.handleCircleOnMouseLeave}></div>
                <div element_id="12" className={ this.state.element_12_class }></div>
                <div element_id="13" className={ this.state.element_13_class } onClick={this.handleCircleClick} onMouseEnter={this.handleCircleOnMouseEnter} onMouseLeave={this.handleCircleOnMouseLeave}></div>
                <div element_id="14" className={ this.state.element_14_class }></div>
                <div element_id="15" className={ this.state.element_15_class } onClick={this.handleCircleClick} onMouseEnter={this.handleCircleOnMouseEnter} onMouseLeave={this.handleCircleOnMouseLeave}></div>
                <div element_id="16" className={ this.state.element_16_class }></div>
                <div element_id="17" className={ this.state.element_17_class } onClick={this.handleCircleClick} onMouseEnter={this.handleCircleOnMouseEnter} onMouseLeave={this.handleCircleOnMouseLeave}></div>
                <div element_id="18" className={ this.state.element_18_class }></div>
            </div>
        );
    }
}

export default connect(
    state => ({ scroll: state.scroll })
)(NavBar)