import React from 'react';

export class ProjectRowFxcmPro extends React.Component {

    render() {
        return <section className={"additional-row bg-gray-mid txt-align-left padding-top-20 desktop-padding-bottom-0"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                        <div className={"row"}>
                            <div className={"grid-60"}>
                                <img src={"./img/fxcm-pro.jpg"} alt={"FXCM Pro homepage"} />
                            </div>
                            <div className={"grid-40 desktop-margin-top-40"}>
                                <h2 className={"txt-purple txt-caps margin-bottom-0"}>FXCM Pro</h2>
                                <h3 className={"txt-open-sans-regular margin-top-0"}>
                                    <span className={"txt-purple-bright txt-open-sans-bold"}>Project Role</span> Design + Development
                                </h3>
                                <ul className={"fxcm-list txt-15 list-style-none"}>
                                    <li><a href={"https://www.fxcm.com/pro"} className={"invert"} target={"_blank"} rel={"noreferrer"}>www.fxcm.com/pro/</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}