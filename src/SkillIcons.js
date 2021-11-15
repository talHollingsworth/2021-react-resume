import React from 'react';
import { ReactComponent as Html5 } from './svg/html5.svg';
import { ReactComponent as Css } from './svg/css.svg';
import { ReactComponent as Sass } from './svg/sass.svg';
import { ReactComponent as Js } from './svg/js.svg';
import { ReactComponent as JQuery } from './svg/jquery.svg';
import { ReactComponent as Php } from './svg/php.svg';
import { ReactComponent as Wordpress } from './svg/wordpress.svg';
import { ReactComponent as AdobePhotoshop } from './svg/adobe-photoshop.svg';
import { ReactComponent as AdobeIllustrator } from './svg/adobe-illustrator.svg';
import { ReactComponent as Twig } from './svg/twig.svg';
import { ReactComponent as ReactLogo } from './svg/react-logo.svg';
import { ReactComponent as Node } from './svg/node.svg';

export class SkillIcons extends React.Component {

    render() {
        return <section className="additional-row">
            <div className="grid-container">
                <div className="row">
                    <div className="grid-100 content">
                        <h2 className="txt-align-left">Skills</h2>
                        <div className="grid-75 grid-center">
                            <div className="d-flex flex-wrap flex-justify-between margin-bottom-20">
                                <i className="ico ico-80 margin-30 flex-auto">
                                    <Html5 />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto">
                                    <Css />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto">
                                    <Sass />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto">
                                   <Js />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto">
                                    <JQuery />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto">
                                    <Php />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto">
                                    <Wordpress />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto">
                                    <AdobePhotoshop />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto">
                                    <AdobeIllustrator />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto">
                                    <Twig />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto">
                                    <ReactLogo />
                                </i>
                                <i className="ico ico-80 margin-30 flex-auto bg-grey-dark padding-10">
                                    <Node />
                                </i>
                                <div className="padding-25 flex-auto no-logo">
                                    <h4 className="txt-grey txt-align-center">CMB2 Plugin</h4>
                                </div>
                                <div className="padding-25 flex-auto no-logo">
                                    <h4 className="txt-grey txt-align-center">Sparta</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}