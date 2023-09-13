import React from "react";
import HeaderPhoto from "../HeaderPhoto";

export default function About() {
  return (
    <>
      <HeaderPhoto page='About'></HeaderPhoto>
    <section className="about">
      <p>
        Hey! My name is <strong>Treavor Wills</strong> and here's a little about
        me.
      </p>
      <p>
        I was destined to be a web developer right from the start, and my parents saw
        all the signs. In grade school, I didn't just color in the lines {`\u2014`} I
        created{" "}
        <strong>
          <em>visually stunning layouts</em>
        </strong>
        . While rounding little league bases, I daydreamed of well-rounded{" "}
        <strong>
          <em>SQL/noSQL databases</em>
        </strong>
        . And unlike my bed when I was six, my code is always{" "}
        <strong>
          <em>DRY</em>
        </strong>
        .
      </p>
      <p>
        But, jokes aside, my journey has been quite diverse. I hold a <strong>bachelor's degree</strong> in applied math, complemented by a <strong>bootcamp certificate</strong> in web development, and underpinned by an unwavering commitment to <strong>hard work</strong>. My professional experience is in sales, process improvement, and customer support. I also enjoyed a small but rewarding stint a
        stay-at-home dad. These experiences have equipped me with a unique
        blend of analytical thinking, problem-solving skills, and the ability to
        tackle new challenges head-on.
      </p>
      <p>
        For me, web development is where I find the perfect mix of <strong>creativity</strong> and my love for <strong> problem-solving</strong>. It's a continually evolving craft that allows me to learn, grow,
        and bring innovative ideas to life.
      </p>
      <p>
        When I'm not immersed in code, you can find me on a
        bike or a board somewhere around <strong>Salt Lake City</strong>. I’ve got a few
        restaurants I visit on the regular and I always enjoy discovering new
        favorites. My family keeps me on my toes and serves as <strong><em>daily motivation</em></strong> to be the best me.{" "}
      </p>
      <hr className="project-hr"></hr>
    </section>
    </>
  );
}
