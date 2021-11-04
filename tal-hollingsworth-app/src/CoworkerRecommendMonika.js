import React from 'react';

export class CoworkerRecommendMonika extends React.Component {

    render() {
        return <section className={"additional-row bg-gray-mid txt-align-left"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                        <p className={"txt-align-center"}>
                            <img src={"./img/monika.jpg"} className={"circle"} style={{ maxWidth: 150 }} alt={"Monika Rut-Koroglu"} />
                        </p>
                        <h2 className={"txt-green-dark txt-align-center"}>Monika Rut-Koroglu</h2>
                        <h3 className={"txt-align-center"}>
                            <span className={"txt-green-dark"}>Director of Analytics and Optimization at FXCM</span> <i>FXCM 2014-Present</i>
                        </h3>
                        <p className={"lead-in"}> Tal is a humble (but not shy) and creative beast! Have worked with Tal on many projects ranging from group collaborated website optimization changes to specific projects involving specific form or page functionalities. Tal is always full of ideas that seems so obvious but only after Tal proposes them. His creativity and problem solving skills are to be matched by few, statement applying to his web dev capabilities but also personal interests and hobbies (super cool). Tal is a “beast” because he is fast, precise and thinks quickly on his feet. His personality and positive outlook is contagious and he is an invaluable asset for any front end dev team, he defines his role and fit real well, real fast.</p>
                    </div>
                </div>
            </div>
        </section>
    }
}