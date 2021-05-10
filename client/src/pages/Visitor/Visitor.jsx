import React from "react";
import Button from "../../components/Button/Button";

const Visitor = () => {
    return (
        <pre className="visitor">
            <h2 className="visitor__title">Let's face it...</h2>
            <p className="visitor__text">...people in the Lower Mainland aren't known for their social skills.</p>
            <p className="visitor__text">Oh, that cold facade hides so much.</p>
            <p className="visitor__text">Social isolation is a common complaint in our region, with 41% of British Columbians <a href="https://vancouversun.com/sponsored/news-sponsored/united-way-of-the-lower-mainland-is-tackling-loneliness-and-social-isolation-head-on/" className="visitor__link">reporting</a> not talking to many of their neighbours.</p>
            <p className="visitor__text">Proportionally, more musicians struggle with <a href="https://consequenceofsound.net/2019/05/73-percent-musicians-mental-health-illness-depression-report/" className="visitor__link">mental illness</a> than the general population, and most of us make our best music by playing with other people.</p>
            <p className="visitor__text">Once these crazy times are over, Let's Jam!</p>
            
            {/* Buttons */}
            <a href="/add-user" className="visitor__button--link">
                <Button type="submit" label="Join now" />
            </a>
            <a href="/login" className="visitor__button--link">
                <Button type="submit" label="Log in" />
            </a>
        </pre>
    );
};

export default Visitor;