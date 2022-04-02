import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

import "./App.css";

import requests from "./networkRequests/requests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="netflix originals" main url={requests.netflix} />
      <Row title="trending now" url={requests.trending} />
      <Row title="top rated" url={requests.topRated} />
      <Row title="Animation" url={requests.animation} />
      <Row title="family" url={requests.family} />
      <Row title="comedy" url={requests.comedy} />
      <Row title="Action" url={requests.action} />
      <Row title="Horor" url={requests.horor} />
      <Row title="History" url={requests.history} />
    </div>
  );
}

export default App;
