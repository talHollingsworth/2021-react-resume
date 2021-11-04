import React from 'react';

export class Summary extends React.Component {

    render() {
        return <section className={"additional-row bg-black txt-white txt-align-left"} >
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                        <h2 className={"txt-white"}>Web Developer</h2>

                        <p className={"lead-in txt-white"}>I am a web developer with 7 years’ experience in building and maintaining
                            enterprise-level websites. This includes taking design proofs and developing them into fully
                            fleshed out experiences. During this time, I took part in building websites, widgets, CMS
                            components, landing pages, and promotional banners. In addition, the sites I helped build were
                            translated into multiple languages by an in-house CMS platform. By taking part in team-driven
                            efforts, I modernized outdated websites by making them scalable and responsive. Working with a
                            team of fellow developers, I completed assignments during long and short-delivery intervals to
                            help drive new business.</p>
                    </div>
                </div>
            </div>
        </section>
    }
}