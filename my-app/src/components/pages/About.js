import React from 'react';
import AboutCard from '../AboutCard';
import HeaderPhoto from '../HeaderPhoto';

export default function About() {

    const aboutItems = [
        {
            "title": "Front-End Design",
            "text": "I'm a frequent user of the world wide web and nothing grinds my gears quite like a bloated, non-intuitive website. I prioritize mobile-first design and implement techniques to provide a positive user experience. Skilled in React, JavaScript, HTMl, CSS and libraries like Tailwind CSS and Bootstrap."
        },
        {
            "title": "Back-End Development",
            "text": "Already have a sweet front? Robust backends are essential in the data driven world we live in and I can hook it up! Proficient with SQL and No-SQL databases and experienced in SQL, MongoDB, Express and NodeJS."
        },
        {
            "title": "Between You and Me",
            "text": "I also like bicycles. On my main commuter I've got a basket large enough to fit a turkey and lights to boot. When I'm not developing or cycling, you can find me coaching my kids' soccer team, making the best pancakes on the block or reading the book before the movie comes out.",
            "imageSrc": "image/fall.png",
            "imageAlt": "A nice photo of Treavor"
        },
    ]

    return (
        <div class="flex flex-col">
            <HeaderPhoto></HeaderPhoto>
            {/* <div class="mx-auto flex flex-col mb-5">
                <img src={process.env.PUBLIC_URL + '/images/fall.png'} class="h-48 rounded-full w-full object-cover h-60 w-60"></img>
                <div class="flex justify-center -mt-5 bg-violet-50">
                <p class="text-4xl font-bold text-slate-800">Treavor Wills</p>
                </div>
            </div> */}
            <AboutCard aboutItems={aboutItems} />
        </div>
    );
}
