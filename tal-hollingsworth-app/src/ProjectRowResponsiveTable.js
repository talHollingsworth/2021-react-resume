import React from 'react';

export class ProjectRowResponsiveTable extends React.Component {

    render() {
        return <section className={"additional-row bg-white txt-align-left"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                        <div className={"row"}>
                            <div className={"grid-60 push-40"}>
                                <div className={"table-wrap col6 col-group3 mobile-cards no-row-keys tablet-small-titles"}>
                                    <table data-mobile-inline-titles={""}>
                                        <thead>
                                            <tr className={"table-title"}>
                                                <th>Column 1</th>
                                                <th>Column 2</th>
                                                <th>Column 3</th>
                                                <th>Column 4</th>
                                                <th>Column 5</th>
                                                <th>Column 6</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className={"section-title"}>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <td data-title={"Column 1"}>Data Title</td>
                                                <td data-title={"Column 2"}>Value</td>
                                                <td data-title={"Column 3"}>Data Title</td>
                                                <td data-title={"Column 4"}>Value</td>
                                                <td data-title={"Column 5"}>Data Title</td>
                                                <td data-title={"Column 6"}>Value</td>
                                            </tr>
                                            <tr>
                                            <td data-title={"Column 1"}>Data Title</td>
                                                <td data-title={"Column 2"}>Value</td>
                                                <td data-title={"Column 3"}>Data Title</td>
                                                <td data-title={"Column 4"}>Value</td>
                                                <td data-title={"Column 5"}>Data Title</td>
                                                <td data-title={"Column 6"}>Value</td>
                                            </tr>
                                            <tr>
                                                <td data-title={"Column 1"}>Data Title</td>
                                                <td data-title={"Column 2"}>Value</td>
                                                <td data-title={"Column 3"}>Data Title</td>
                                                <td data-title={"Column 4"}>Value</td>
                                                <td data-title={"Column 5"}>Data Title</td>
                                                <td data-title={"Column 6"}>Value</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className={"grid-40 pull-60"}>
                                <h2 className={"margin-bottom-0"}>Responsive Table Module</h2>
                                <h3 className={"margin-top-0"}><span className={"txt-yellow"}>Project Role</span> Development</h3>
                                <ul className={"fxcm-list txt-15 list-style-none"}>
                                    <li><a href={"https://www.fxcm.com/uk/accounts/spread-costs/"} className={"invert"} target={"_blank"} rel={"noreferrer"}>Three Column</a></li>
                                    <li><a href={"https://www.fxcm.com/uk/indices/spread-costs/"} className={"invert"} target={"_blank"} rel={"noreferrer"}>Two Column</a></li>
                                    <li><a href={"https://www.fxcm.com/uk/algorithmic-trading/compare-api/"} className={"invert"} target={"_blank"} rel={"noreferrer"}>Large Table</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}