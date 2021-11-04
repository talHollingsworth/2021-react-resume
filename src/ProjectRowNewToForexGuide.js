import React from 'react';

export class ProjectRowNewToForexGuide extends React.Component {

    render() {
        return <section className={"additional-row bg-white txt-align-left padding-top-0"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                        <div className={"row"}>
                            <div className={"grid-60 push-40"}>
                                <img src={"./img/new-to-forex-guide.jpg"} alt={"FXCM New to Forex Guide webpage"} />
                            </div>
                            <div className={"grid-40 pull-60 desktop-margin-top-40"}>
                                <h2 className={"margin-bottom-0"}>New To Forex Guide</h2>
                                <h3 className={"margin-top-0"}><span className={"txt-yellow"}>Project Role</span> Development</h3>
                                <ul className={"fxcm-list txt-15 list-style-none"}>
                                    <li><a href={"https://www.fxcm.com/uk/education/new-to-forex/"} className={"invert"} target={"_blank"} rel={"noreferrer"}>UK version</a></li>
                                    <li><a href={"https://www.fxcm.com/au/education/new-to-forex/"} className={"invert"} target={"_blank"} rel={"noreferrer"}>AU version</a></li>
                                    <li><a href={"https://www.fxcm.com/markets/education/new-to-forex/"} className={"invert"} target={"_blank"} rel={"noreferrer"}>Markets version</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}


