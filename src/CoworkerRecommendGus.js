import React from 'react';

export class CoworkerRecommendGus extends React.Component {

    render() {
        return <section className={"additional-row txt-align-left"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                        <p className={"txt-align-center"}>
                            <img src={"./img/gus-ford.jpg"} className={"circle"} style={{ maxWidth: 150 }} alt={"Project Manager Gus Ford"} />
                        </p>
                        <h2 className={"txt-green-dark txt-align-center"}>Gus Ford</h2>
                        <h3 className={"margin-top-0 txt-align-center"}>
                            <span className={"txt-green-dark"}>Former Vice President of Web Marketing</span> <i>FXCM 2012-2017</i>
                        </h3>
                        <p className={"lead-in"}> I’ve had the privilege of working with Tal Hollingsworth while leading the web marketing
                            team at FXCM. Tal was amazing to work with due to his strong work ethic, and willingness to
                            share his skill set and processes with his entire team. I know I learned so much about
                            JavaScript and efficient work flow best practices from working closely with Tal. He is a
                            dedicated teammate and natural leader, that is sure to be an asset to any firm. He has
                            strong skills using HTML, CSS, and JavaScript for all project types and sizes with high
                            levels of complexity and managing tight and competing deadlines. While working together, we
                            used collaboration tools such as Smart Sheets and Jira, as well as a custom tool that Tal
                            built for the entire web marketing department to save time and reduce emails.</p>
                    </div>
                </div>
            </div>
        </section>
    }
}