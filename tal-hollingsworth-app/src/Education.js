import React from 'react';

export class Education extends React.Component {

    render() {
        return <section className={"additional-row bg-gray-mid txt-align-left padding-bottom-40"}>
            <div className={"grid-container"}>
                <div className={"row"}>
                    <div className={"grid-100 content"}>
                        <h2>Education</h2>
                        <h4>2012 - 2014 <span className={"txt-open-sans-regular"}>The Art Institute of Dallas, Bachelor's Degree, Web Design &amp; Interactive Media</span></h4>
                        <h4>2000 - 2002 <span className={"txt-open-sans-regular"}>The Art Institute of Dallas, Associate's Degree, 3D Design - Conceptual Art</span></h4>
                    </div>
                </div>
            </div>
        </section>
    }
}