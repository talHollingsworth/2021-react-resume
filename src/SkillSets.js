import React from 'react';

export class SkillSets extends React.Component {

    render() {
        return <section className={"additional-row bg-grey-dark"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                        <h2 className={"txt-align-left txt-yellow margin-bottom-20"}>Skill Sets</h2>

                        <div className={"row  txt-24 margin-bottom-40"}>
                            <div className={"grid-33 skill-set"} data-match-height={"skill-set"}>
                                <div className={"bg-white padding-20"}>
                                    <h3>Front End Development</h3>
                                    <p>Responsive Design</p>
                                    <p>DOM manipulation</p>
                                    <p>CMS Integration</p>
                                    <p>Cross-platform functionality</p>
                                </div>
                            </div>

                            <div className={"grid-33 skill-set"} data-match-height={"skill-set"}>
                                <div className={"bg-white padding-20"}>
                                    <h3>Web Design</h3>
                                    <p>User-experience (UX) design</p>
                                    <p>User-interface (UI) design</p>
                                    <p>Information architecture</p>
                                    <p>E-Commerce design</p>
                                </div>
                            </div>

                            <div className={"grid-33 skill-set"} data-match-height={"skill-set"}>
                                <div className={"bg-white padding-20"}>
                                    <h3>WordPress Development</h3>
                                    <p>Theme/Template Creation</p>
                                    <p>WP Dashboard design</p>
                                    <p>Extending WP Codex</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}