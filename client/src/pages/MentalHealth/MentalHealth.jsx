import React from "react";

import MentalHealthCard from "../../components/MentalHealthCard/MentalHealthCard";

const MentalHealth = () => {
    return (
        <div className="mental-health">
            <h2 className="mental-health__title">Be kind to yourself</h2>
            <p className="mental-health__disclaimer">Here are some mental health resources:</p>
            <section className="mental-health__card-wrapper">
                <h3 className="mental-health__section-title">Services</h3>
                <MentalHealthCard
                    info="Get immediate help"
                    url="https://crisiscentre.bc.ca/"
                    name="BC Crisis Centre"
                />
                <MentalHealthCard
                    info="Alcohol"
                    url="https://www.vancouveraa.org/"
                    name="Alcoholics Anonymous"
                />
                <MentalHealthCard
                    info="Drugs"
                    url="https://www.bcrna.ca/"
                    name="Narcotics Anonymous"
                />
            </section>
            <section className="mental-health__card-wrapper">
                <h3 className="mental-health__section-title">Apps</h3>
                <MentalHealthCard
                    info="Meditation and sleep made simple"
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
            <section className="mental-health__card-wrapper">
                <h3 className="mental-health__section-title">Programs</h3>
                <MentalHealthCard
                    info="Feeling low, stressed or anxious?"
                    url="https://bouncebackbc.ca/"
                    name="BounceBack BC"
                />
                <MentalHealthCard
                    info="Evidence-based behavioural therapy"
                    url="https://www.swasth.co/dbt-coach/"
                    name="DBT Coach"
                />
            </section>
    </div>
    );
};

export default MentalHealth;