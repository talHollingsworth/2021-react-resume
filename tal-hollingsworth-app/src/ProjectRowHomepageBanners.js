import React from 'react';

export class ProjectRowHomepageBanners extends React.Component {

    render() {
        return <section className={"additional-row bg-white txt-align-left"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content tablet-padding-top-20 mobile-padding-top-20"}>
                        <div className={"row"}>
                            <div className={"grid-60 push-40 desktop-margin-top-20 tablet-margin-bottom-20 mobile-margin-bottom-20"}>
                                <img src={"./img/homepage-banners.jpg"} alt={"FXCM 20 year homepage banner"} />
                            </div>
                            <div className={"grid-40 pull-60 desktop-margin-top-20"}>
                                <h2 className={"txt-purple txt-caps margin-bottom-0"}>Homepage Banners</h2>
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



