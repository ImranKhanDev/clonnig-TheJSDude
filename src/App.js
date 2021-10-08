import logo from "./logo.svg";
import "./App.css";
import tutorialData from "./tutorial.json";
import { useState, useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  )
}
// Header section
function Header() {
  return (
    <header>
      <div class="nav">
        <h2>That is JS dude</h2>
        <button class="btn-sign">submit</button>
      </div>
      <div class="header-hero">
        <h1>Exclusive React Workshop for beginners!</h1>
        <p>
          Once in a year opportunity to learn and build your first React app
        </p>
      <button class="hero-btn">Learn more >></button> 
      </div>
    </header>
  );
}
function Main() {
  return (
    <section className="main">
      {/* ui er left & right section */}

      <Left></Left>
      <Right></Right>
    </section>
  );
}
function Left() {
  const [tuto, setTutorials] = useState([]);

  useEffect(() => {
    setTutorials(tutorialData);
  }, []);

  //  console.log(tuto);
  return (
    <div className="left">
      <JsConfig></JsConfig>
      <div id="tutorial-container">
        {tuto.map((tutorial) => (
          <Tutorial title={tutorial.title} desc={tutorial.desc}></Tutorial>
        ))}
      </div>
    </div>
  );
}
function Tutorial(props) {
  //console.log(props);
  const { title, desc } = props;
  return (
    <div class="tutorial">
      <h2>{title}</h2>
      <p>{desc}</p>
      <button class="hero-btn" type="details">
        Learn More
      </button>
    </div>
  );
}

function Right() {
  return (
    <div class="right">
      <PersonalTraining></PersonalTraining>
      <RecentVideos></RecentVideos>
    </div>
  );
}

// js confusing part

function JsConfig() {
  return (
    <div class="js-confuse">
      <h2>JS Confusing part</h2>
      <p>
        Understand this, scope, hoisting, closure, inheritance, bind, call,
        apply, prototype, event delegation, dom, timers and many more caveats.
      </p>
    </div>
  );
}

function PersonalTraining() {
  return (
    <div class="personal-training">
      <h2>Personal training for $30</h2>
      <p>
        If you need career guide, personal interview tips, mock interview, Life
        Coaching, or anything else, you can book me for 30 min. Just pay $30 via
        paypal to Codinism (my company) and then book a time slot You can Book
        me
      </p>
    </div>
  );
}

function RecentVideos() {
  return (
    <div class="recent-video">
      <h3>Recent Videos</h3>
      <ul>
        <li>15+ tricks for dev tool</li>
        <li>Understanding this</li>
        <li>How Browsers works in 4 min</li>
      </ul>
    </div>
  );
}
export default App;


