import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Slide from "react-reveal/Slide";
import FirstBlock from "./Components/FirstBlock";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Faq from "./Components/Faq";
import Workshops from "./Components/Workshops";
import Certifications from "./Components/Certifications";

function App() {
  return (
    <Router>
      <div className="App">
        <Slide bottom>
          <Header />
        </Slide>
        <Switch>
          <Route path="/" exact component={FirstBlock}></Route>
          <Route path="/contactUs" component={ContactUs}></Route>
          <Route path="/faqs" component={Faq}></Route>
          <Route path="/workshops" component={Workshops}></Route>
          <Route path="/certifications" component={Certifications}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
