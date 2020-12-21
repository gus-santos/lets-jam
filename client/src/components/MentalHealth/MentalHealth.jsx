import React from "react";

import MentalHealthCard from "../MentalHealthCard/MentalHealthCard";

const MentalHealth = () => {
    return (
        <div className="mental-health">
            <h2 className="mental-health__title">Be kind to yourself</h2>
            <p className="mental-health__disclaimer">Here are some mental health resources:</p>
            <h3 className="mental-health__section-title">Services</h3>
            <section className="mental-health__card-wrapper">
                <MentalHealthCard
                    info="Get immediate help"
                    url="https://crisiscentre.bc.ca/"
                    name="BC Crisis Centre"
                />
                <MentalHealthCard
                    info="Alcohol"
                    url="https://"
                    name="AA"
                />
                <MentalHealthCard
                    info="Drugs"
                    url="https://www.bcrna.ca/"
                    name="NA"
                />
            </section>
            <h3 className="mental-health__section-title">Apps</h3>
            <section className="mental-health__card-wrapper">
                <MentalHealthCard
                    info="Less stressed. More resilient. Happier. It all starts with just a few minutes a day"
                    url="https://www.headspace.com/"
                    name="Headspace"
                />
                <MentalHealthCard
                    info="#1 free app for sleep, anxiety and stress"
                    url="https://insighttimer.com/"
                    name="Insight Timer"
                />
                <MentalHealthCard
                    info="Sleep more. Stress less. Live better"
                    url="https://www.calm.com/"
                    name="Calm"
                />
                </section>
                <h3 className="mental-health__section-title">Programs</h3>
                <section className="mental-health__card-wrapper">
                <MentalHealthCard
                    info="Feeling low, stressed or anxious?"
                    url="https://bouncebackbc.ca/"
                    name="BounceBack BC"
                />
                <MentalHealthCard
                    info="Evidence-based behavioural therapy app"
                    url="https://www.swasth.co/dbt-coach/"
                    name="DBT Coach"
                />
            </section>
        </div>
    );
};

export default MentalHealth;