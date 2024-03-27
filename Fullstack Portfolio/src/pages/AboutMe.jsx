function AboutMe() {
  return (
    <div className="aboutContainer">
      <div className="about">
        <h1>About Me</h1>
        <div>
          <p>
            Growing up in New York City (NYC) I was fortunate enough to
            experience a expansive quantity of diverse cultures, art, and
            architecture; With no shortage of worlds to explore, I started my
            journey as an enthusiastic learner and inquisitve soul looking to
            understand people in communal spheres and advanced concepts in
            educational spheres. Now I am on the path to learning,
            experimenting, and conquering web development.
          </p>
        </div>
      </div>
      <div>
        <h2>Technologies</h2>
        <ul className="frontend">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
        <ul className="backend">
          <li>MongoDB</li>
          <li>Express</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
      <div className="resume">
        <a href="">Download my resume here</a>
      </div>
    </div>
  );
}

export default AboutMe;
