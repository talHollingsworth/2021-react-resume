import React from 'react';
import { ReactComponent as DownloadCloud } from './svg/download-cloud.svg';
import { ReactComponent as ThumbsUp } from './svg/thumbs-up.svg';

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
                    <DownloadCloud />
                    Download My Resume
                </a>

                <a class="floatR btn txt-align-center margin-horizontal-10 margin-vertical-20"
                    href="mailto:tal.hollingsworth@gmail.com"
                    role="button">
                    <ThumbsUp />
                    Hire Me
                </a>
            </div>
        </div>
    }
}