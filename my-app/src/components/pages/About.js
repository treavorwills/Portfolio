import React from 'react';
import AboutCard from '../AboutCard';

export default function About() {

    const aboutItems = [
        {
            "title": "one",
            "text": "two"
        },
        {
            "title": "three",
            "text": "four"
        },
    ]

    return (
        <div class="flex mx-auto mt-10">
            <AboutCard aboutItems={aboutItems} />
        </div>
    );
}
