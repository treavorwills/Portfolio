import React from "react";
import HeaderPhoto from "../HeaderPhoto";

export default function About() {
  return (
    <>
      <HeaderPhoto page='About'></HeaderPhoto>
    <section className="about">
      <p>
        My name is <strong>Treavor Wills</strong> and here is a little bit about
        me.
      </p>
      <p>
        I was destined to be a web developer from a young age and my parents saw
        all the signs. In grade school, I didn't just color in the lines, I
        created{" "}
        <strong>
          <em>visually stunning layouts</em>
        </strong>
        . While rounding little league bases, I daydreamed of well-rounded{" "}
        <strong>
          <em>SQL and noSQL databases</em>
        </strong>
        . And unlike my bed when I was six, my code is always{" "}
        <strong>
          <em>DRY</em>
        </strong>
        .
      </p>
      <p>
        Jokes aside, I earned a bachelor's degree in applied math, have worked
        professionally in sales, process improvement, customer support and as a
        stay-at-home dad. My diverse experiences have equipped me with a unique
        blend of analytical thinking, problem-solving skills, and the ability to
        adapt to new challenges.
      </p>
      <p>
        Web development satisfies my passion for creativity and my love for
        problem-solving. It's an evolving craft where I continually learn, grow,
        and bring innovative ideas to life.
      </p>
      <p>
        When I’m not hunched over in front of the screen, you can find me on a
        bike or a board somewhere around Salt Lake City. I’ve got a few
        restaurants I visit on the regular and I always enjoy discovering new
        favorites. My family keeps me busy and really helps motivate me to be my
        best self.{" "}
      </p>
      <hr className="project-hr"></hr>
    </section>
    </>
  );
}
