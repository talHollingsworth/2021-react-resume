import React from 'react';

export class ProjectRowMultilingual extends React.Component {

    render() {
        return <section className={"additional-row bg-gray-mid txt-align-left multi-ling"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                        <div className={"row"}>
                            <div className={"grid-60"}>
                                <div className={"row"}>
                                    <div className={"grid-50 margin-bottom-20"}>
                                        <img src={"./img/ar-banner.jpg"} alt={"FXCM Arabic homepage"} />
                                    </div>
                                    <div className={"grid-50 margin-bottom-20"}>
                                        <img src={"./img/de-banner.jpg"} alt={"FXCM German homepage"} />
                                    </div>
                                    <div className={"grid-50 margin-bottom-20"}>
                                        <img src={"./img/es-banner.jpg"} alt={"FXCM Espanol homepage"} />
                                    </div>
                                    <div className={"grid-50 margin-bottom-20"}>
                                        <img src={"./img/it-banner.jpg"} alt={"FXCM Italian homepage"} />
                                    </div>
                                </div>
                            </div>
                            <div className={"grid-40"}>
                                <h2 className={"txt-purple txt-caps margin-bottom-0"}>Multilingual Development</h2>
                                <h3 className={"txt-open-sans-regular margin-top-0"}>
                                    <span className={"txt-purple-bright txt-open-sans-bold"}>Project Role</span> Development
                                </h3>
                                <ul className={"fxcm-list txt-15 list-style-none"}>

                                    <li><a href={"https://www.fxcm.com/uk"} className={"invert"} target={"_blank"} rel={"noreferrer"}>www.fxcm.com/uk/</a></li>
                                    <li><a href={"https://www.fxcm.com/au"} className={"invert"} target={"_blank"} rel={"noreferrer"}>www.fxcm.com/au/</a></li>
                                    <li><a href={"https://www.fxcm.com/markets"} className={"invert"} target={"_blank"} rel={"noreferrer"}>www.fxcm.com/markets/</a></li>
                                    <li><a href={"https://www.fxcm.com/za"} className={"invert"} target={"_blank"} rel={"noreferrer"}>www.fxcm.com/za/</a></li>
                                    <li><a href={"https://www.fxcm.com/es"} className={"invert"} target={"_blank"} rel={"noreferrer"}>www.fxcm.com/es/</a></li>
                                    <li><a href={"https://www.fxcm.com/de"} className={"invert"} target={"_blank"} rel={"noreferrer"}>www.fxcm.com/de/</a></li>
                                    <li><a href={"https://www.fxcm.com/fr"} className={"invert"} target={"_blank"} rel={"noreferrer"}>www.fxcm.com/fr/</a></li>
                                    <li><a href={"https://www.fxcm.it/"} className={"invert"} target={"_blank"} rel={"noreferrer"}>www.fxcm.it/</a></li>
                                    <li><a href={"https://www.fxcm-arabic.com/"} className={"invert"} target={"_blank"} rel={"noreferrer"}>www.fxcm-arabic.com/</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}