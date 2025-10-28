import Header from "./header";
import Intro from "./intro";
import Expertise from "./expertise";
import Projects from "./project";
import data from "./text.json";
import Card from "./card";
import Button from "./pixelButton";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "20px";
  } else {
    document.getElementById("header").style.padding = "50px";
  }
}

function Portfolio() {
  return (
    <div className="portfolio">
      <Header />
      <Intro />
      <Expertise />
      <div id="project">
        <div className="project">
          <label>Project </label>
          <hr />
          <div>
            <span className="s">s</span>
          </div>
        </div>
      </div>
      <Projects
        title={data.project[0].title}
        framework={data.project[0].framework}
        desc={data.project[0].desc}
      />
      <Projects
        title={data.project[1].title}
        framework={data.project[1].framework}
        desc={data.project[1].desc}
        pics={data.project[1].pics}
        alt_text={data.project[1].alt}
      />
      <Projects
        title={data.project[2].title}
        framework={data.project[2].framework}
        desc={data.project[2].desc}
        pics={data.project[2].pics}
      />
      <span className="dote">. . . . . . . . . . . . .</span>
      <div id="contact">
        <Card className="card-u" p1={data.cards[1].p1}>
          {" "}
          {<Button />}{" "}
        </Card>
      </div>
      <footer>
        <img src="./footer3.png" alt="" />
      </footer>
    </div>
  );
}

export default Portfolio;
