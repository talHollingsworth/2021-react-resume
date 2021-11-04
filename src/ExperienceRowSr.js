import React from 'react';

export class ExperienceRowSr extends React.Component {

    render() {
        return <section className={"additional-row bg-grey-dark txt-white txt-align-left txt-18"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                    <h2 className={"txt-white"}>Experience</h2>
                        <h4 className={"txt-yellow"}>Senior Front End Developer <br className={"desktop-hide tablet-hide"} /><i className={"margin-left-30 mobile-margin-left-0 "}>June 2019 - Present</i></h4>
                        <h3 className={"txt-white"}>Bank of America Merrill Lynch</h3>

                        <ul className={"fxcm-list txt-15 list-style-none"}>
                            <li><i className={"ico ico-15 ico-white"}><svg><use xlinkHref={"#ico-dotted-caret-right"}></use></svg></i> Created multiple widgets for the portfolio and accounts redesign across multiple platforms</li>
                            <li><i className={"ico ico-15 ico-white"}><svg><use xlinkHref={"#ico-dotted-caret-right"}></use></svg></i> Implemented UX redesign for multiple reporting tools including: Recent activity summary, pending trades, estimated investment income, and historical performance across multiple platforms.</li>
                            <li><i className={"ico ico-15 ico-white"}><svg><use xlinkHref={"#ico-dotted-caret-right"}></use></svg></i> Contributed in efforts to bring older code bases in parity with modern solutions and implementations.</li>
                            <li><i className={"ico ico-15 ico-white"}><svg><use xlinkHref={"#ico-dotted-caret-right"}></use></svg></i> Worked with UX to overhaul the frontend for financial modeling tool.</li>
                            <li><i className={"ico ico-15 ico-white"}><svg><use xlinkHref={"#ico-dotted-caret-right"}></use></svg></i> Refactored and modernized the portfolio allocation prototype.</li>
                            <li><i className={"ico ico-15 ico-white"}><svg><use xlinkHref={"#ico-dotted-caret-right"}></use></svg></i> Brought older codebase in line with new proprietary frame, Sparta.</li>
                            <li><i className={"ico ico-15 ico-white"}><svg><use xlinkHref={"#ico-dotted-caret-right"}></use></svg></i> Updated SVG implemention to simplify code and for ease of use.</li>
                            <li><i className={"ico ico-15 ico-white"}><svg><use xlinkHref={"#ico-dotted-caret-right"}></use></svg></i> Brought all projects above inline with current ADA compliance specifications</li>
                            <li><i className={"ico ico-15 ico-white"}><svg><use xlinkHref={"#ico-dotted-caret-right"}></use></svg></i> Received multiple awards for the above work</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    }
}