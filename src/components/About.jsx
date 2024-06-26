import "./About.css";

export default function About() {
  return (
    <div>
      <h1>The Developers</h1>
      <div className="group-members">
        <div className="group-member">
          <img
            src="https://ca.slack-edge.com/TCVA3PF24-U063SF1VCJ3-f07910bf77c9-512"
            alt="CodeTrack King"
          />
          <h3>Anthony Cannonier aka "CodeTrack King"</h3>
          <p>Head Avenger</p>
          <p>
            After the fall of Thanos, I was interested in a career change. I
            love to learn, solve problems, create, and foster growth, so it was
            only natural for me to gravitate into tech. Joining Pursuit has provided me with even more super powers.
          </p>
        </div>
        <div className="group-member">
          <img
            src="https://ca.slack-edge.com/TCVA3PF24-U064KLDFYKB-1e41f20ca5e6-512"
            alt="Staten Island King"
          />
          <h3>Abdelrahman Sayedahmed</h3>
          <p>Co-Avenger</p>
          <p>
            {" "}
            While pursuing a degree in electrical engineering, I was becoming
            distracted and losing focus on this path. Fortunately, I was
            introduced to Pursuit, which was the right choice. I have been
            fortunate enough to excel and be a part of the Avengers.{" "}
          </p>
        </div>
        <div className="group-member">
          <img
            src="https://ca.slack-edge.com/TCVA3PF24-U02MFNE3HEU-87f17bade30c-512"
            alt="just Ari"
          />
          <h3>Ari Collado</h3>
          <p>Pedestrian</p>
          <p>Intern</p>
        </div>
        <div className="group-member">
          <img
            src="https://ca.slack-edge.com/TCVA3PF24-U06471DTBDY-08b366aced14-512"
            alt="A photograph of erick in the wild"
          />
          <h3>Erick Fierro</h3>
          <p>air-RICK</p>
          <p>Living life one meme at a time.</p>
        </div>
        <div className="group-member">
          <img
            src="https://ca.slack-edge.com/TCVA3PF24-U06471E6458-39230e958373-512"
            alt="Adeola AinaMarshall"
          />
          <h3>Adeola AinaMarshall </h3>
          <p>lorem ipsum</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ullam quidem minima incidunt neque et a, ab perspiciatis, officia voluptates architecto.</p>
        </div>
      </div>
    </div>
  );
}
