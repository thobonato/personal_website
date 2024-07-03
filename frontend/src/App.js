// assets
import logo from "./assets/images/2tb.png";
import experiencesData from "./assets/misc/experiences.json";

// components
import Header from "./components/Header";
import Description from "./components/Description";
import WorkSection from "./components/WorkSection";

import './App.css';

function App() {
  return (
    <div className="container pt-14 scroll-smooth">
      <div className="App">
        <Header></Header>
        <Description> </Description>
        <WorkSection experiences={experiencesData.experiences} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </div>
  );
}

export default App;
