import React from 'react';
import ProjectCard from '../ProjectCard';

function Projects() {

    const projects = [
        {
          "id": 1,
          "title": "Blog",
          "src": "images/blog.png",
          "alt": "Photo of Blog",
          "description": "This Blog was created as an exercise following the MVC paradigm. It is an application built on Sequelize, Handlebars, Express and Node. It incorporates user validation allowing you to log in and create blog posts for yourself. As a visitor you can still view and appreciate blog posts.",
          "appLink": "https://frozen-earth-85548.herokuapp.com/",
          "repo": "https://github.com/treavorwills/blog",
        },
        {
          "id": 2,
          "title": "Social Network Backend",
          "src": "images/socialNetwork.png",
          "alt": "Photo of Social Network Backend",
          "description": "This is a social media NoSQL backend API. This project is built on MongoDB with routing handled by Express.js. User information like username and email address are stored as well as friendships with other users. Users can post their own thoughts and add reactions to other users' thoughts. Since this exercise did not include a front end, all the routes were tested in Insomnia. The repository linked below has a couple of screenshots as well as a video demonstrating various CRUD operations.",
          "appLink": "#",
          "repo": "https://github.com/treavorwills/SocialNetworkAPI",
        },
        {
          "id": 3,
          "title": "Logan's List",
          "src": "images/logansList.png",
          "alt": "Photo of Logan's List",
          "description": "Logan's List is a buy and sell application similar to Craigslist or KSL Classifieds. It was a project I collaborated. I primary worked on the back end to ensure our API routes worked as expected. This was a great project in which I learned a lot about running queries to populate a website and database management. Check it out!",
          "appLink": "https://aqueous-sea-47353.herokuapp.com/",
          "repo": "https://github.com/treavorwills/logans-list",
        },
        {
          "id": 4,
          "title": "Note Taker Application",
          "src": "images/noteTaker.png",
          "alt": "Photo of Note Taker",
          "description": "This is a web application that allows users to save and delete notes to themselves. It was one of my first forays into using express.js to access and render data stored locally.",
          "appLink": "https://fathomless-shelf-01568.herokuapp.com/",
          "repo": "https://github.com/treavorwills/express-note-taker",
        },
        {
          "id": 5,
          "title": "Cuddly Robot Food Crawl",
          "src": "images/cuddlyRobot.png",
          "alt": "Photo of Cuddly Robot Food Crawl",
          "description": "This application provides guidance to users that are looking for a restaurant(s) in a specific location. I implemented changes to make the application more user friendly and worked on the API call to obtain and render search results.",
          "appLink": "https://benbushman98.github.io/cuddly-robot/",
          "repo": "https://github.com/benbushman98/cuddly-robot",
        }
      ];

    return (
        <div class="pt-10 pb-20">
                 <ProjectCard projects={projects} />
        </div>
    );
}

export default Projects;