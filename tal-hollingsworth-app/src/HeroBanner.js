import React from 'react';

export class HeroBanner extends React.Component {

    render() {
        return <div className={"hero-banner"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 txt-align-center margin-top-30"}>

                    <div className={"txt-18 margin-bottom-50"}>
                            <div className={"d-md-inline-block margin-right-50 margin-bottom-20 mobile-margin-right-0"}>
                                <svg height={"20"}
                                    className={"octicon octicon-mark-github margin-right-10 v-align-middle"}
                                    fill={"#24292e"}
                                    aria-label={"GitHub"}
                                    viewBox={"0 0 16 16"}
                                    version={"1.1"}
                                    width={"20"}
                                    role={"img"}>
                                    <path fill-rule={"evenodd"}
                                        d={"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}></path>
                                </svg>
                                <a href={"https://github.com/talHollingsworth"}>
                                    @talHollingsworth
                                </a>
                            </div>

                            <div className={"d-md-inline-block margin-right-50 margin-bottom-20 mobile-margin-right-0"}>
                                <svg height={"20"}
                                    className={"octicon octicon-mail margin-right-10 v-align-middle"}
                                    fill={"#24292e"}
                                    aria-label={"email"}
                                    viewBox={"0 0 14 16"}
                                    version={"1.1"}
                                    width={"17"}
                                    role={"img"}>
                                    <path fill-rule={"evenodd"}
                                        d={"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"}></path>
                                </svg>
                                <a href={"mailto:tal.hollingsworth@gmail.com"}>
                                    tal.hollingsworth@gmail.com
                                </a>
                            </div>

                            <div className={"d-md-inline-block margin-right-50 margin-bottom-20 mobile-margin-right-0"}>
                                <svg height={"20"}
                                    className={"octicon octicon-location margin-right-10 v-align-middle"}
                                    fill={"#24292e"}
                                    aria-label={"Location"}
                                    viewBox={"0 0 12 16"}
                                    version={"1.1"}
                                    width={"15"}
                                    role={"img"}>
                                    <path fill-rule={"evenodd"}
                                        d={"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"}></path>
                                </svg>
                                <strong>Dallas, TX</strong>
                            </div>

                            <div className={"d-md-inline-block margin-right-50 margin-bottom-20 mobile-margin-right-0"}>
                                <a href={"https://www.linkedin.com/in/tal-hollingsworth"}
                                    title={"LinkedIn: tal-hollingsworth"}
                                    className={"tooltipped tooltipped-s"}
                                    aria-label={"LinkedIn: tal-hollingsworth"}>
                                    <svg height={"20"}
                                        xmlns={"http://www.w3.org/2000/svg"}
                                        viewBox={"0 0 19 18"}>
                                        <path d={"M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z"}
                                            fill={"#0c51a3"}></path>
                                    </svg>
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