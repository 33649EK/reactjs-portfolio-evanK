const About = () => {
  return (
    <div className="aboutme">
      <img src="./images/Portrait.jpg" className="portraitImage" />
      <div className="textContent">
        <h1 className="aboutHeader">About Me</h1>
        <p id="startPar">
          Hi there! I’m Evan, a beginner web developer with a passion for
          technology and a love for tabletop gaming. My journey into web
          development started with a simple curiosity about how websites are
          made, which quickly turned into a full-fledged passion. To deepen my
          knowledge, I completed an intensive bootcamp where I got to grips with
          React and GraphQL, among other exciting technologies.
        </p>
        <p>
          <strong className="sectionHeader">Bootcamp Experience</strong>
        </p>
        <p>
          My bootcamp experience was incredibly hands-on and project-focused,
          allowing me to build real-world applications and collaborate with
          fellow developers. Here’s a bit more about what I did:
        </p>
        <ul>
          <li>
            <strong>Building Web Applications:</strong> I developed dynamic web
            apps using React, focusing on creating scalable and maintainable
            code with a component-based approach.
          </li>
          <li>
            <strong>GraphQL APIs:</strong> I designed and consumed GraphQL APIs,
            mastering efficient data fetching and manipulation.
          </li>
          <li>
            <strong>Team Projects:</strong> Working on group projects, I
            simulated real-world development scenarios, which sharpened my
            teamwork and communication skills.
          </li>
          <li>
            <strong>Problem Solving:</strong> I got plenty of practice debugging
            and optimizing code, improving my problem-solving skills
            significantly.
          </li>
        </ul>
        <p>
          <strong className="sectionHeader">Tech Interests</strong>
        </p>
        <p>
          Technology isn’t just my job; it’s my passion. Here’s what I’m
          particularly into:
        </p>
        <ul>
          <li>
            <strong>Front-End Development:</strong> I love crafting intuitive
            and responsive user interfaces. Experimenting with new frameworks
            and libraries to enhance user experience is something I truly enjoy.
          </li>
          <li>
            <strong>Back-End Development:</strong> I’m equally fascinated by the
            server-side and love building robust back-end systems. Exploring
            microservices and serverless architectures is on my to-do list.
          </li>
          <li>
            <strong>Lifelong Learning:</strong> Tech is always evolving, and I’m
            committed to staying up-to-date.
          </li>
        </ul>
        <p>
          <strong className="sectionHeader">Tabletop Gaming</strong>
        </p>
        <p>
          When I’m not coding, you’ll probably find me at a tabletop gaming
          session. Here’s why I love it:
        </p>
        <ul>
          <li>
            <strong>Strategic Gameplay:</strong> I enjoy games that challenge my
            strategic thinking and problem-solving skills. Whether it’s a
            complex board game or a tactical RPG, I love the mental challenge.
          </li>
          <li>
            <strong>Community:</strong> Tabletop gaming is a great way to bring
            people together. I love organizing and participating in game nights,
            sharing my passion with friends and fellow enthusiasts.
          </li>
          <li>
            <strong>Creative Storytelling:</strong> Many tabletop games involve
            rich narratives and world-building, which I find incredibly
            engaging. I often take on roles as a game master or player in RPGs,
            enjoying the creative storytelling aspect.
          </li>
        </ul>
        <p id="sectionFooter">
          Thanks for stopping by to learn a bit about me. I’m excited to keep
          growing as a web developer and to blend my technical skills with my
          creative hobbies. Check out my portfolio to see some of my work, and
          feel free to reach out if you’d like to connect or collaborate!
        </p>
      </div>
    </div>
  );
};

export default About;
