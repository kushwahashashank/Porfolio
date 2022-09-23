import Header from "./components/Header.jsx"
import Navigator from "./components/Navigator.jsx"
import About from  "./components/About.jsx"
import Experience from  "./components/Experience.jsx"
import Services from  "./components/Services.jsx"
import Portfolio from  "./components/Portfolio.jsx"
import Contact from  "./components/Contact.jsx"
import "./App.css"
function App() {
  return (
    <div className="app">
           <Navigator/>
           <div className="flip_box">
            <div className="flip_box_inner">
           <div className="flip_box_front">

      <Header/>
      </div>
 <div className="flip_box_back">
      <About/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
