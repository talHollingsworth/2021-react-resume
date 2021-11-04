import React from 'react';

export class Nav extends React.Component {

    render() {
        return <div className={'bg-black clearfix'}>
            <div className={'row grid-50 tablet-grid-100 mobile-grid-100'}>
                <h1 className={'txt-white margin-left-50'}>Tal Hollingsworth</h1>
            </div>
            <div className={'row grid-50 tablet-grid-100 mobile-grid-100 floatR omni-btns mobile-padding-top-10 margin-right-10 mobile-padding-right-10 mobile-margin-0'}>
                <a className={"floatR btn txt-align-center margin-horizontal-10 margin-vertical-20"}
                    href={"./pdf/tal-hollingsworth-resume-portfolio.pdf"}
                    role={"button"}>
                    <svg className={"octicon octicon-cloud-download margin-right-10"}
                        viewBox={"0 0 16 16"}
                        version={"1.1"}
                        width={"22"}
                        height={"22"}
                        aria-hidden={"true"}>
                        <path fill-rule={"evenodd"}
                            d={"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"}></path>
                    </svg>
                    Download My Resume
                </a>

                <a class="floatR btn txt-align-center margin-horizontal-10 margin-vertical-20"
                    href="mailto:tal.hollingsworth@gmail.com"
                    role="button">
                    <svg class={"octicon octicon-thumbsup margin-right-10"}
                        viewBox={"0 0 16 16"}
                        version={"1.1"}
                        width={"22"}
                        height={"22"}
                        aria-hidden={"true"}>
                        <path fill-rule={"evenodd"}
                            d={"M14 14c-.05.69-1.27 1-2 1H5.67L4 14V8c1.36 0 2.11-.75 3.13-1.88 1.23-1.36 1.14-2.56.88-4.13-.08-.5.5-1 1-1 .83 0 2 2.73 2 4l-.02 1.03c0 .69.33.97 1.02.97h2c.63 0 .98.36 1 1l-1 6L14 14zm0-8h-2.02l.02-.98C12 3.72 10.83 0 9 0c-.58 0-1.17.3-1.56.77-.36.41-.5.91-.42 1.41.25 1.48.28 2.28-.63 3.28-1 1.09-1.48 1.55-2.39 1.55H2C.94 7 0 7.94 0 9v4c0 1.06.94 2 2 2h1.72l1.44.86c.16.09.33.14.52.14h6.33c1.13 0 2.84-.5 3-1.88l.98-5.95c.02-.08.02-.14.02-.2-.03-1.17-.84-1.97-2-1.97H14z"}></path>
                    </svg>
                    Hire Me
                </a>
            </div>
        </div>
    }
}