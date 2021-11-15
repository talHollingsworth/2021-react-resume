import React from 'react';
import { ReactComponent as Github } from './svg/github.svg';
import { ReactComponent as Mail } from './svg/mail.svg';
import { ReactComponent as YouAreHere } from './svg/you-are-here.svg';
import { ReactComponent as Linkedin } from './svg/linkedin.svg';

export class HeroBanner extends React.Component {

    render() {
        return <div className={"hero-banner"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 txt-align-center margin-top-30"}>

                    <div className={"txt-18 margin-bottom-50"}>
                            <div className={"d-md-inline-block margin-right-50 margin-bottom-20 mobile-margin-right-0"}>
                                <Github />
                                <a href={"https://github.com/talHollingsworth"}>
                                    @talHollingsworth
                                </a>
                            </div>

                            <div className={"d-md-inline-block margin-right-50 margin-bottom-20 mobile-margin-right-0"}>
                                <Mail />
                                <a href={"mailto:tal.hollingsworth@gmail.com"}>
                                    tal.hollingsworth@gmail.com
                                </a>
                            </div>

                            <div className={"d-md-inline-block margin-right-50 margin-bottom-20 mobile-margin-right-0"}>
                                <YouAreHere />
                                <strong>Dallas, TX</strong>
                            </div>

                            <div className={"d-md-inline-block margin-right-50 margin-bottom-20 mobile-margin-right-0"}>
                                <a href={"https://www.linkedin.com/in/tal-hollingsworth"}>
                                    <Linkedin />
                                    <span class={"d-none"}>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                        
                        <img src={"https://avatars2.githubusercontent.com/u/7200347?v=4"}
                            className={"circle tablet-hide mobile-hide"}
                            alt={""}
                            style={{maxWidth: 250,marginBottom: 50 }} />
                       
                        <blockquote >
                            “You can't do anything about the <span className={"txt-yellow"}>length</span> of your life, but you can do something about its <span className={"txt-yellow"}>width</span> and <span className={"txt-yellow"}>depth</span>.”
                            <cite>― H. L. Mencken</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    }
}