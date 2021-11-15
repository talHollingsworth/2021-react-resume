import React from 'react';
import { ReactComponent as ThreeArrowsUp } from './svg/three-arrows-up.svg';
import { ReactComponent as BitcoinChart } from './svg/bitcoin-chart.svg';
import { ReactComponent as HandCoin } from './svg/hand-coin.svg';
import { ReactComponent as JusticeScales } from './svg/justice-scales.svg';
import { ReactComponent as Lightbulb } from './svg/lightbulb.svg';
import { ReactComponent as ChartCheck } from './svg/chart-check.svg';
import { ReactComponent as ArrowDownUnderlined } from './svg/arrow-down-underlined.svg';
import { ReactComponent as PersonBulb } from './svg/person-bulb.svg';

export class ProjectRowSvgModule extends React.Component {

    render() {
        return <section className="additional-row bg-gray-mid txt-align-left">
            <div className="grid-container">
                <div className="row">
                    <div className="grid-100 content">
                        <div className="row">
                            <div className="grid-60">
                                <div className="d-flex flex-wrap flex-justify-between margin-bottom-20">
                                    <i className="ico ico-100 ico-yellow margin-30 flex-auto">
                                        <ThreeArrowsUp />
                                    </i>
                                    <i className="ico ico-100 ico-yellow margin-30 flex-auto">
                                        <BitcoinChart />
                                    </i>
                                    <i className="ico ico-100 ico-yellow margin-30 flex-auto">
                                        <HandCoin />
                                    </i>
                                    <i className="ico ico-100 ico-yellow margin-30 flex-auto">
                                        <JusticeScales />
                                    </i>
                                    <i className="ico ico-100 ico-yellow margin-30 flex-auto">
                                        <Lightbulb />
                                    </i>
                                    <i className="ico ico-100 ico-yellow margin-30 flex-auto">
                                        <ChartCheck />
                                    </i>
                                    <i className="ico ico-100 ico-yellow margin-30 flex-auto">
                                        <ArrowDownUnderlined />
                                    </i>
                                    <i className="ico ico-100 ico-yellow margin-30 flex-auto">
                                        <PersonBulb />
                                    </i>
                                </div>
                            </div>
                            <div className="grid-40 desktop-margin-top-40">
                                <h2 className="margin-bottom-0">SVG Module</h2>
                                <h3 className="margin-top-0"><span className="txt-yellow">Project Role</span> Development</h3>
                                <ul className="fxcm-list txt-15 list-style-none">
                                    <li><a href="https://www.fxcm.com/uk/" className="invert" target="_blank" rel={"noreferrer"}>Homepage Usage</a></li>
                                    <li><a href="https://www.fxcm.com/uk/crypto/" className="invert" target="_blank" rel={"noreferrer"}>Content Usage</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    }
}