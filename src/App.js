import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Page from "./layouts/Page";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <nav>
            <Navigation />
          </nav>
          <div>
            <Page />
          </div>
        </main>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
