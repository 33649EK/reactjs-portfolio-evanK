const Resume = () => {
  return (
    <div className="resumeContent">
      <h1 className="resume">Resume</h1>
      <div>
        <h2 className="resumeHeader">Education</h2>
        <ul>
          <li>University Name - Degree, Year</li>
          <li>High School Name - Year</li>
        </ul>

        <h2 className="resumeHeader">Experience</h2>
        <ul>
          <li>Company Name - Position, Year</li>
          <li>Company Name - Position, Year</li>
        </ul>

        <h2 className="resumeHeader">Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
