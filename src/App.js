import "./App.css";
import axios from "axios";
import Row from "./components/Row";

import requests from "./networkRequests/requests";

function App() {
  return (
    <div className="App">
      <Row title="trending now" url={requests.trending} />
      <Row title="top rated" url={requests.topRated} />
      <Row title="Action movies" url={requests.action} />
      <Row title="comedy movies" url={requests.comedy} />
      <Row title="Horor movies" url={requests.horor} />
      <Row title="Romace movies" url={requests.romance} />
      <Row title="Documentary movies" url={requests.doc} />
    </div>
  );
}

export default App;
