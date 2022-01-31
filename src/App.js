import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Slide from "react-reveal/Slide";
import FirstBlock from "./Components/FirstBlock";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Faq from "./Components/Faq";
import Recruiter from "./Components/Recruiter";
import Workshops from "./Components/Workshops";
import Certifications from "./Components/Certifications";
import StudentPortal from "./StudentPortal/StudentPortal";
import LoginSignup from "./StudentPortal/LoginSignup";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router  basename={process.env.PUBLIC_URL} >
      <div className="App">
        <Slide bottom>
          <Header />
        </Slide>
        <Switch>
          <Route path="/" exact component={FirstBlock}></Route>
          <Route path="/contactUs" component={ContactUs}></Route>
          <Route path="/faqs" component={Faq}></Route>
          <Route path="/recruiter" component={Recruiter}></Route>
          <Route path="/workshops" component={Workshops}></Route>
          <Route path="/certifications" component={Certifications}></Route>

        </Switch>
        <Slide bottom>
          <Footer />
        </Slide>
      </div>
    </Router>
  );
}

export default App;
