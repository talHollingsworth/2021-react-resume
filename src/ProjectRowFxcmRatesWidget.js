import React from 'react';

export class ProjectRowFxcmRatesWidget extends React.Component {

    render() {
        return <section className={"additional-row bg-gray-mid txt-align-left"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                        <div className={"row"}>
                            <div className={"grid-60 tablet-margin-bottom-20 mobile-margin-bottom-20"}>
                                <img src={"./img/rate-widget.jpg"} alt={"FXCM Rates Widget"} />
                            </div>
                            <div className={"grid-40"}>
                                <h2 className={"margin-bottom-0"}>FXCM Rates Widget - Angular Widget</h2>
                                <h3 className={"margin-top-0"}><span className={"txt-yellow txt-open-sans-bold"}>Project Role</span> Update + Maintenance</h3>
                                <ul className={"fxcm-list txt-15 list-style-none"}>
                                    <li><a href={"https://www.fxcm.com/uk"} className={"invert"} target={"_blank"} rel={"noreferrer"}>Homepage Version</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}