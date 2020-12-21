/* Template
    <MentalHealthCard
        topInfo="CTA"
        url="https://"
        name="Name"
        bottomInfo="Advertisement"
    />
*/

import React from "react";

const MentalHealthCard = (props) => {
    return (
    <article className="mental-health__card">
        <p className="mental-health__info">{props.info}</p>
        <a href={props.url} className="mental-health__link">
            <pre className="mental-health__card-title">{props.name}</pre>
        </a>
    </article>
    );
};

export default MentalHealthCard;